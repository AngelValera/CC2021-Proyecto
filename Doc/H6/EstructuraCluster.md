## Documentación y justificación de la estructura del cluster

<!-- ![](../Img/ "") -->

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

---
#### Referencias:

[DockerHub: bitnami/etcd](https://hub.docker.com/r/bitnami/etcd)

[compose-grandtour/node ](https://github.com/compose-grandtour/node/tree/master/example-etcd3)

[]()

[]()

[]()

[]()