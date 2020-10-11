## Configuración inicial del repositorio 

En este documento se va a recoger cómo se ha configurado el entorno de trabajo para empezar a trabajar en este proyecto. 

En primer lugar, se va a realizar una breve descripción de los repositorios que serán utilizados durante el desarrollo de este proyecto. Posteriormente, se describe cómo se han generado el par de claves y la subida de la clave pública a github. A continuación, se recogerá como se ha configurado git y cómo se ha editado el perfil de github y por último, se recoge cómo se ha aumentado la seguridad en la cuenta de github, activando el segundo factor de seguridad.

### Creación de los repositorios

Para el desarrollo de este proyecto a lo largo del curso de la asignatura de Cloud Computing I, será necesario utilizar tres repositorios, los cuales quedan descritos y enlazados a continuación:

* [Repositorio fork de la asignatura](https://github.com/AngelValera/CC-20-21) : En este repositorio se irán subiendo los objetivos semanales además de realizar las entregas pertinentes. 
* [Repositorio del proyecto](https://github.com/AngelValera/CC2021-Proyecto) : En este repositorio se irá desarrollando el proyecto completo que será necesario para superar la asignatura.
* [Repositorio de ejercicios de autoevaluación](https://github.com/AngelValera/CC2021-Ejercicios) : En este repositorio se irán realizando los ejercicios de autoevaluación de cada uno de los temas de la asignatura.

### Creación de par de claves y subida de clave pública a GitHub

Para evitar tener que introducir las credenciales de nuestra cuenta en github, debemos crear un par de claves, una pública y otra privada en nuestro equipo y después agregar la clave pública generada a nuestra cuenta de github. El proceso que se ha seguido para crear estas claves viene descrito en este [enlace](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

En la siguiente imagen podemos comprobar que efectivamente tenemos en nuestro equipo tanto el directorio ssh como el par de claves generadas, así como el fichero con los hots permitidos en nuestro equipo.

![Claves SSH generadas.](https://github.com/AngelValera/CC2021-Proyecto/blob/main/Doc/Img/clavesSSH.png "Claves SSH generadas.")

La clave pública se encuentra en el fichero id_rsa.pub y debemos tenerla agregada también a nuestro agente ssh.

![Clave SSH pública.](https://github.com/AngelValera/CC2021-Proyecto/blob/main/Doc/Img/clavePublica.png "Clave SSH pública.")

Finalmente, agregamos también la clave pública a nuestro perfil de github, tal y como se puede ver en la siguiente imagen. 

![Claves SSH agregada a Github.](https://github.com/AngelValera/CC2021-Proyecto/blob/main/Doc/Img/clavesPublicas_Github.png "Claves SSH agregada a Github.")

En este caso, la clave agregada corresponde a la que tiene por nombre "Ubuntu instalado en portatil".

### Configuración correcta de Git

Para tener correctamente configurada nuestra instalación de Git local, debemos hacer uso del comando `git config --global` e indicarle tanto nuestro nombre como nuestro email por defecto. Otra opción por defecto que se ha configurado ha sido que al hacer uso del comando `git pull` siempre sea con la opción `--rebase`. Finalmente, la configuración quedaría de la siguiente forma:

![Configuración local de git.](https://github.com/AngelValera/CC2021-Proyecto/blob/main/Doc/Img/gitconfig.png "Configuración local de git.")

### Edición del perfil de GitHub 

Por otro lado, había que configurar correctamente nuestro perfil en github para que aparezca una imagen, el nombre completo, la ciudad y la universidad.

![Perfil de github.](https://github.com/AngelValera/CC2021-Proyecto/blob/main/Doc/Img/perfil_Github.png "Perfil de github")

### Incrementar la seguridad de la cuenta de GitHub
