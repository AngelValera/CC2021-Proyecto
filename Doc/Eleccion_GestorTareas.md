## Elección del gestor de tareas

A la hora de decidir el gestor de tareas más adecuado para mi proyecto, lo primero que he hecho ha sido investigar un poco y he podido comprobar que para un proyecto en Node.js como es mi caso la mejor solución sería bien usar [Grunt](https://gruntjs.com/) o [Gulp](https://gulpjs.com/), aunque también vi otra herramienta llamada [Webpack](https://webpack.js.org/).

En cuanto a webpack, la he descartado debido a que si bien, usando determinados plugins puede realizar las mismas funciones que Grunt o Gulp, no se trata de un gestor de tareas en si, si no que es un bundler.

En cuanto a Grunt y Gulp, por lo que he podido comprobar, no hay mucha diferencia entre usar uno u otro, salvo porque, Gulp resulta un poco más rápido debido a que realiza todos sus procesos directamente en memoria, mientras que Grunt trabaja con ficheros temporales, lo que hace que sea un poco más lento. Por otro lado, he podido ver que Grunt tiene una mayor comunidad y cuenta con más de 6000 plugins, mientras que Gulp cuenta con más de 3000. Además, Grunt resulta más asequible para los que están comenzando y su aprendizaje requiere un menor esfuerzo.

Finalmente, como no me decantaba por uno u otro, lo que hice fue realizar una pequeña prueba que se puede ver en este [repositorio](https://github.com/AngelValera/Gestion_Porras) usando [uno](https://github.com/AngelValera/Gestion_Porras/blob/main/Gruntfile.js) y [otro](https://github.com/AngelValera/Gestion_Porras/blob/main/gulpfile.js) y finalmente, me he decantado por usar **Grunt**, ya que me sentí más cómodo y pude solucionar los fallos de manera un poco más rápida que usando Gulp.

### Justificación de uso del gestor de tareas

Una vez elegido como gestor de tareas Grunt, y siguiendo con lo indicado en la página oficial de [Grunt](https://gruntjs.com/getting-started), se ha creado el fihero [Gruntfile.js](../Gruntfile.js) que se encargará de guardar las distintas tareas que necesitemos para nuestro proyecto.

En este fichero, se han definido 3 tareas principales.

* **mochaTest:** Esta tarea se encargará de ejecutar los test que decidamos usar en nuestro proyecto. Aprovechando que como marco de pruebas decidimos usar mocha, he decidido usar el plugin que Grunt tiene para tal efecto, llamado [grunt-mocha-test](https://www.npmjs.com/package/grunt-mocha-test).
* **install:** Esta tarea se encargará de descargar y de instalar las distintas dependencias del proyecto.
* **jshint:** Esta tarea se encargará de comprobar si el código que hemos escrito en nuestro proyecto es correcto. Para ello se usará el plugin que Grunt tiene para tal efecto denominado [grunt-contrib-jshint](https://www.npmjs.com/package/grunt-contrib-jshint).

Cabe destacar que para usar la tarea **mochaTest**, también se incluyen algunas opciones de mocha, la cuales hemos indicado en el fichero Gruntfile.js y cuyos valores hemos dejado por defecto. Estas opciones son:
* *reporter: "spec"*: Indicamos como queremos ver los reportes que nos proporciona mocha en los test.         
* *quiet: false*: Indicamos que queremos que nos muestre información por la salida estándar.
* *ui: "bdd"* Indicamos el tipo de configuración de los test que vamos a utilizar.

En cuanto a la tarea **jshint**, siguiendo con lo que se indica en este [ejemplo](https://www.adictosaltrabajo.com/2013/09/26/grunt-taskrunner-javascript/), he usado un fichero adicional llamado [.jshintrc](../.jshintrc) que sirve para indicar las opciones con las que se debe ejecutar. En este fichero debido a que en un principio recibía muchos warnings, decidí indicarle de esta [manera](https://jshint.com/docs/options/#esversion) que estoy usando la sintaxis de ECMAScript 6.

Finalmente, después de indicarle en el Gruntfile los plugins que vamos a utilizar,indicamos también cómo ejecutar las distintas tereas. Para ello, se ha definido una tarea por defecto que se encarga de ejecutar los test y comprobar la sintáxis y otra tarea que se encarga de descargar e instalar las dependencias.


#### Referencias

[Grunt, Gulp, Npm, Webpack and when to use what](https://www.youtube.com/watch?v=Mn6aj4kY-j8)

[Gulp vs. Grunt: dos task runners y sus características](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/gulp-vs-grunt-que-diferencia-a-estos-task-runners/)

[Grunt o Gulp: ¿qué uso?](https://blog.koalite.com/2015/06/grunt-o-gulp-que-uso/)
