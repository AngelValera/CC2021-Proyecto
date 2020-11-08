## Elección y justificación del gestor de tareas

A la hora de decidir el gestor de tareas más adecuado para mi proyecto, lo primero que he hecho ha sido investigar un poco y he podido comprobar que para un proyecto en Node.js como es mi caso la mejor solución sería bien usar [Grunt](https://gruntjs.com/) o [Gulp](https://gulpjs.com/), aunque también vi otra herramienta llamada [Webpack](https://webpack.js.org/).

En cuanto a webpack, la he descartado debido a que si bien, usando determinados pluggins puede realizar las mismas funciones que Grunt o Gulp, no se trata de un gestor de tareas en si, si no que es un bundler.

En cuanto a Grunt y Gulp, por lo que he podido comprobar, no hay mucha diferencia entre usar uno u otro, salvo porque, Gulp resulta un poco más rápido debido a que realiza todos sus procesos directamente en memoria, mientras que Grunt trabaja con ficheros temporales, lo que hace que sea un poco más lento. Por otro lado, he podido ver que Grunt tiene una mayor comunidad y cuenta con más de 6000 plugins, mientras que Gulp cuenta con más de 3000. Además, Grunt resulta más asequible para los que están comenzando y su aprendizaje requiere un menor esfuerzo.

Finalmente, como no me decantaba por uno u otro, lo que hice fue realizar una pequeña prueba que se puede ver en este [repositorio](https://github.com/AngelValera/Gestion_Porras) usando [uno](https://github.com/AngelValera/Gestion_Porras/blob/main/Gruntfile.js) y [otro](https://github.com/AngelValera/Gestion_Porras/blob/main/gulpfile.js) y finalmente, me he decantado por usar **Grunt**, ya que me sentí más cómodo y pude solucionar los fallos de manera un poco más rápida que usando Gulp.

#### Referencias

[Grunt, Gulp, Npm, Webpack and when to use what](https://www.youtube.com/watch?v=Mn6aj4kY-j8)
[Gulp vs. Grunt: dos task runners y sus características](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/gulp-vs-grunt-que-diferencia-a-estos-task-runners/)
[Grunt o Gulp: ¿qué uso?](https://blog.koalite.com/2015/06/grunt-o-gulp-que-uso/)