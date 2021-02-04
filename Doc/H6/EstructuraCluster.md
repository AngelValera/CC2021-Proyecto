## Documentación y justificación de la estructura del cluster

<!-- ![](../Img/ "") -->
- [Documentación y justificación de la estructura del cluster](#documentación-y-justificación-de-la-estructura-del-cluster)
  - [Estructura inicial](#estructura-inicial)
  - [Estructura final](#estructura-final)
  - [Referencias:](#referencias)
### Estructura inicial

En un principio se pensó en hacer uso de dos servicios principalmente. El primer servicio, el cual corresponde al servicio que se encarga de procesar las peticiones al recurso `Grupos`. El segundo servicio se encargaba de la configuración distribuida, usando para ello `Etcd`.

Tal y como se puede comprobar en los commits siguientes, se consiguió hacer funcionar ambos conjuntamente:

- [89a01f5](https://github.com/AngelValera/LyricsHunter/commit/89a01f512ee5c44e7ed05f72c61c0094fe076363)
- [bb05c02](https://github.com/AngelValera/LyricsHunter/commit/bb05c025a8d25a77b6f79e02bd1d7ccd4f08b1e1)

El funcionamiento, consistía en hacer desplegar primero el servicio de `Etcd` y posteriormente el servicio de `Grupos`. El servicio de `Etcd` estaría disponible en los puertos 2379 y 2380 y el servicio de `Grupos` estaría disponible en el puerto 3000.

Sería desde el servicio de `Grupos` desde el que se conectaría al servicio de `Etcd` para obtener el puerto establecido en el que se debería desplegar la aplicación.

Sin embargo, esto presenta un problema, el cual hace que esta composición no sea muy útil en este caso. El problema se debe a que al utilizar Docker compose, debemos establecer de forma estática los puertos en los que el servicio de `Grupos` debe escuchar, por tanto, no tiene sentido usar Etcd, para establecer otro puerto distinto ya que en ese caso el servicio `Grupos` no sería capaz de responder peticiones, y por supuesto tampoco, tendría sentido establecer el mismo puerto que el que se ha establecido por defecto.

Según lo anterior, se decidió eliminar el servicio `Etcd` de la composición.


### Estructura final

Seguidamente, se pensó en realizar un clúster en el que se ejecutase el servicio junto a un servicio de nginx que hiciese de proxy inverso y de balanceador de carga, por lo que además se añadió un tercer servicio, igual al primero, que sirviera de respaldo.

Esta versión de la composición, se puede comprobar en el estado del repositorio del siguiente [commit](https://github.com/AngelValera/LyricsHunter/blob/e31be71ac80cd200393aabd38a838cd3b82f7c3f/docker-compose.yml):
    - [e31be71](https://github.com/AngelValera/LyricsHunter/commit/e31be71ac80cd200393aabd38a838cd3b82f7c3f)

Después de comprobar que la estructura funcionaba, se pensó en ir un poco más lejos. En lugar de ejecutar un solo servidor que permitiese acceder a los recursos `Grupo`, `Canción` y `Usuario`, se pensó en desarrollar un servicio a parte para cada uno de los recursos anteriores.

Según lo anterior, una vez que tenemos los tres microservicios, los duplicamos para tener respaldo y agregamos el servicio de nginx. La estructura por tanto, quedaría de la siguiente forma:

![Estructura del cluster](../Img/Img_EstructuraCluster/estructuraCluster.png "Estructura del cluster")

Como se puede ver, tendríamos el servicio de Nginx escuchando las peticiones de los tres recursos en el puerto 8080 y se encargaría de enviarlos al microservicio pertinente, el cual estaría duplicado, de manera que se utilizaría uno u otro en función de la carga.

Nginx envía la petición del recurso de cada microservicio a los siguientes puertos:

- **Canciones_service00**: 3000
- **Canciones_service01**: 3000
- **grupos_service00**: 3002
- **grupos_service01**: 3002
- **usuarios_service00**: 3004
- **usuarios_service01**: 3004

Asimismo, cada uno de estos microservicios puede ser accedido sin pasar por nginx directamente usando el puerto correspondiente:

- **Canciones_service00**: 3000
- **Canciones_service01**: 3001
- **grupos_service00**: 3002
- **grupos_service01**: 3003
- **usuarios_service00**: 3004
- **usuarios_service01**: 3005

La manera en que nginx reparte la carga, se ha establecido en el correspondiente fichero de configuración, el cual se pasa al contenedor mediante un volumen. De igual manera, los logs que usa nginx se recogen para poder ser consultados usando el mismo volumen.

Finalmente, se ha establecido una red común a todos los microservicios.

La justificación de cómo se ha generado el fichero de composición se puede ver en el siguiente [documento](./Doc_ficheroComposicion.md).

La configuración de cada uno de los servicios dentro del clúster se puede consultar en el siguiente [documento](./ConfContenedoresCluster.md).


---
### Referencias:

[DockerHub: bitnami/etcd](https://hub.docker.com/r/bitnami/etcd)

[compose-grandtour/node](https://github.com/compose-grandtour/node/tree/master/example-etcd3)

[JJ/node-app-cc](https://github.com/JJ/node-app-cc)

