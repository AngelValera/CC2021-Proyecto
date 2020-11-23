## Subida del contenedor a Docker Hub y actualización automática del mismo
Lo primero que debemos hacer es crear una cuenta en Docker hub y conectarla con nuestro perfil de Github. Para ello, una vez identificados dentro de Docker Hub, debemos acceder a `Account Settings` y una vez dentro, accedemos a `Linked Accounts`. Una vez dentro, tal y como podemos ver en la siguiente imagen, hacemos click en connect en el apartado de Github.

![Primer paso para conectar Github con Docker hub](Img/Img_DockerHub/Autorizacion.png "Primer paso para conectar Github con Docker hub")

Nos aparerecerá una imagen como la siguiente, donde deberemos de hacer click en `Authorize docker`:

![Segundo paso para conectar Github con Docker hub](Img/Img_DockerHub/Autorizacion2.png "Primer paso para conectar Github con Docker hub")

Después, indicaremos nuestra contraseña de Github y quedará conectada tal y como muestra la siguiente imagen:

![Tercer paso para conectar Github con Docker hub](Img/Img_DockerHub/Autorizacion3.png "Primer paso para conectar Github con Docker hub")

Llegados a este punto vamos a crear un nuevo repositorio en Docker Hub para almacenar nuestro contenedor. Para ello desde la pestaña de `Repositories`, hacemos click en `create Repository`. 

Hecho esto, no aparecerá una ventana como la de la imagen siguiente. En esta ventana deberemos indicar un nombre para el repositorio y una descripción aunque no es obligatorio. En mi caso le he indicado el nombre del repositorio de Github:

![Creacion del repositorio en Docker Hub](Img/Img_DockerHub/CreacionRepositorio.png "Creacion del repositorio en Docker Hub")

Como se puede ver, este repositorio ya está conectado con Github, pero debemos indicarle el repositorio de Github desde el que construir el contenedor, para ello hacemos click en `Connected`:

![Configuracion del repositorio en Docker Hub](Img/Img_DockerHub/Configuracion.png "Creacion del repositorio en Docker Hub")

En la configuración debemos indicarle la rama, el tag y la localización del Dockerfile. Hay que tener en cuenta que para muchos repositorios la rama principal ha dejado de llamarse **"master"** y ahora se llama **"main"**.

Hecho lo anterior, hará que se vaya actualizando con cada push que hagamos de manera automática.

El repositorio creado está accesible desde este [enlace](https://hub.docker.com/r/angelvalera/lyricshunter).

![Repositorio en Docker Hub](Img/Img_DockerHub/Repositorio.png "Repositorio en Docker Hub")

---
#### Referencias:

[Create a Docker Hub repository and push your image](https://docs.docker.com/get-started/part3/)