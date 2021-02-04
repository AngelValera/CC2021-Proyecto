## Documentación del fichero de composición

<!-- ![](../Img/ "") -->

- [Documentación del fichero de composición](#documentación-del-fichero-de-composición)
  - [Visión General](#visión-general)
  - [Paso a Paso](#paso-a-paso)
    - [Servicio Nginx](#servicio-nginx)
    - [Servicio Canciones](#servicio-canciones)
    - [Servicio Grupos y servicio Usuarios](#servicio-grupos-y-servicio-usuarios)
  - [Referencias:](#referencias)

### Visión General

Según lo descrito en el [documento](./EstructuraCluster.md), nuestro clúster se ha definido de la siguiente manera:

![Estructura del cluster](../Img/Img_EstructuraCluster/estructuraCluster.png "Estructura del cluster")

Esta estructura queda definida de la siguiente forma en nuestro fichero [docker-compose.yml](../../docker-compose.yml).


```yml
version: '3'

services:
   # Servicio de nginx
   nginx:
      image: nginx:alpine
      container_name: nginx 
      restart: always
      ports:
         - 8080:8080
      volumes:
         - ./Config/nginx/conf.d/nginx.conf:/etc/nginx/conf.d/default.conf    # dir para archivo configuración de nginx 
         - ./Config/nginx/logs:/var/log/nginx      
      networks:
         - lyricshunter
      depends_on:
         - canciones_service00
         - canciones_service01
         - grupos_service00
         - grupos_service01
         - usuarios_service00
         - usuarios_service01
   #-----------------------
   # Servicios de canciones
   #-----------------------
   canciones_service00:
      container_name: canciones00
      build:
         context: .
         dockerfile: canciones.Dockerfile    
      ports:
         - "3000:3000"
      networks:
         - lyricshunter

   canciones_service01:
      container_name: canciones01
      build:
         context: .
         dockerfile: canciones.Dockerfile    
      ports:
         - "3001:3000"
      networks:
         - lyricshunter
   
   #-----------------------
   # Servicios de grupos
   #-----------------------
   grupos_service00:
      container_name: grupos00
      build:
         context: .
         dockerfile: grupos.Dockerfile    
      ports:
         - "3002:3002"
      networks:
         - lyricshunter
   
   grupos_service01:
      container_name: grupos01
      build:
         context: .
         dockerfile: grupos.Dockerfile    
      ports:
         - "3003:3002"
      networks:
         - lyricshunter
   #-----------------------
   # Servicios de usuarios
   #-----------------------   
   usuarios_service00:
      container_name: usuarios00
      build:
         context: .
         dockerfile: usuarios.Dockerfile    
      ports:
         - "3004:3004"
      networks:
         - lyricshunter
   
   usuarios_service01:
      container_name: usuarios01
      build:
         context: .
         dockerfile: usuarios.Dockerfile    
      ports:
         - "3005:3004"
      networks:
         - lyricshunter           

networks:
  lyricshunter:
      driver: bridge

volumes:
  .:    
   driver: local     
```
### Paso a Paso

Como se puede ver, se han definido 7 servicios una red y un volumen. Vamos a ver cómo se ha creado paso a paso:

En primer lugar, hay que establecer tanto la versión que vamos a usar como la sección de servicios:

```yml
version: '3'

services:
```

#### Servicio Nginx

A continuación, definimos el servicio de nginx:

```yml
# Servicio de nginx
   nginx:
      image: nginx:alpine
      container_name: nginx 
      restart: always
      ports:
         - 8080:8080
      volumes:
         - ./Config/nginx/conf.d/nginx.conf:/etc/nginx/conf.d/default.conf    # dir para archivo configuración de nginx 
         - ./Config/nginx/logs:/var/log/nginx      
      networks:
         - lyricshunter
      depends_on:
         - canciones_service00
         - canciones_service01
         - grupos_service00
         - grupos_service01
         - usuarios_service00
         - usuarios_service01
```
Como se puede ver, una vez definimos el nombre del servicio, debemos indicarle qué imagen vamos a usar y el nombre que vamos a dar al contenedor. lo siguiente que se ha definido ha sido el mapeo de puertos, que en este caso usará el puerto 8080. 

Para poder configurar correctamente ngonx como proxy y como balanceador ha sido necesario pasarle un fichero de configuración. Para ello, lo primero que debemos hacer es definir un volumen:

```yml
volumes:
  .:    
   driver: local 
```
Como se puede ver, hemos indicado que el directorio raíz sea un volumen. 
Una vez definifdo el volumen, indicamos que el fichero `./Config/nginx/conf.d/nginx.conf` sustituya al fichero de configuración por defecto del contenedor de nginx. De igual forma, como quería poder ver los ficheros de log de nginx, he indicado que lo que nginx genere como logs los guarde en el siguiente directorio `./Config/nginx/logs`.

Lo siguiente, corresponde a la red definida para unir a todos los servicios, la cual hemos debido definir previamente tal y como se puede ver:

```yml
networks:
  lyricshunter:
      driver: bridge
```

Como se puede ver, indicamos que el driver que utiliza es de tipo bridge, de manera que todos los servicios de esa red estén en una red diferente a la del host.

finalmente, indicamos que este servicio de nginx se ejecute una vez se hayan ejecutado todos los anteriores.

#### Servicio Canciones

A continuación, explicaremos como se han configurado los servicios de canciones, ya que son prácticamente iguales:

```yml
   #-----------------------
   # Servicios de canciones
   #-----------------------
   canciones_service00:
      container_name: canciones00
      build:
         context: .
         dockerfile: canciones.Dockerfile    
      ports:
         - "3000:3000"
      networks:
         - lyricshunter

   canciones_service01:
      container_name: canciones01
      build:
         context: .
         dockerfile: canciones.Dockerfile    
      ports:
         - "3001:3000"
      networks:
         - lyricshunter
```

Como se puede ver, hemos dado un nombre distinto a cada microservicio, aunque siguen un patrón. Este patrón indica que el servicio acabado en 00 es el microservicio principal y el acabado en 01 es el de respaldo, aunque esto es simplemente a modo de organización. De la misma forma indicamos un nombre de contenedor.

Una vez indicados los nombres, lo que debemos hacer es indicarle el contenedor que debe construir, y como ambos son el mismo servicio, podemos ver que ejecutan el mismo dockerfile. 

A continuacuón, indicamos el mapeo de puertos y en este caso, si debemos variar ya que si el servicio principal es accedido por el puerto 3000, el de respaldo no puede ser accedido por este, por tanto indicamos que el de respaldo sea accedido por el puerto 3001. Sin embargo, internamente como ambos ejecutan el mismo dockerfile, ambos deben usar el puerto 3000.

Finalmente, indicamos que ambos estén en la misma red.

#### Servicio Grupos y servicio Usuarios

Tanto los servicios de grupos como los de usuarios, se han realizado de manera similar a la anteriormente descrita, por tanto, para no hacer esta justificación demasiado extensa, sólamente se mostrarán a continuación:

```yml
   #-----------------------
   # Servicios de grupos
   #-----------------------
   grupos_service00:
      container_name: grupos00
      build:
         context: .
         dockerfile: grupos.Dockerfile    
      ports:
         - "3002:3002"
      networks:
         - lyricshunter
   
   grupos_service01:
      container_name: grupos01
      build:
         context: .
         dockerfile: grupos.Dockerfile    
      ports:
         - "3003:3002"
      networks:
         - lyricshunter
   #-----------------------
   # Servicios de usuarios
   #-----------------------   
   usuarios_service00:
      container_name: usuarios00
      build:
         context: .
         dockerfile: usuarios.Dockerfile    
      ports:
         - "3004:3004"
      networks:
         - lyricshunter
   
   usuarios_service01:
      container_name: usuarios01
      build:
         context: .
         dockerfile: usuarios.Dockerfile    
      ports:
         - "3005:3004"
      networks:
         - lyricshunter
```


---
### Referencias:

[Composición de contenedores](https://jj.github.io/CC/documentos/temas/Composicion_de_contenedores.html)
