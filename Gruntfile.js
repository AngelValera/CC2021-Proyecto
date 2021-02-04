module.exports = function (grunt) {
  // Configuración del proyecto
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    mochaTest: {
      test: {
        options: {
          reporter: "spec",
          quiet: false,
          ui: "bdd",
        },
        src: ["test/**/*.js"],
      },
    },
    run: {
      install: {
        cmd: "npm",
        args: ["ci"],
      },
      build: {
        cmd: "echo",
        args: ["true"],
      },
      start: {
        cmd: "node",
        args: ["src/index.js"],
      },      
      start_Grupos: {
        cmd: "node",
        args: ["src/Grupos/server.js"],
      },
      start_Canciones: {
        cmd: "node",
        args: ["src/Canciones/server.js"],
      },
      start_Usuarios: {
        cmd: "node",
        args: ["src/Usuarios/server.js"],
      },
    },
    jshint: {
      all: ["Gruntfile.js", "src/**/*.js", "test/**/*.js"],
      options: {
        jshintrc: ".jshintrc",
      },
    },
    nodemon: {
      dev: {
        script: "src/index.js",
      },
    },
  });

  // Carga los plugins de grunt
  grunt.loadNpmTasks("grunt-mocha-test");
  grunt.loadNpmTasks("grunt-run");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-nodemon");

  // Tarea para pasar los test
  grunt.registerTask("test", ["mochaTest", "jshint"]);
  // Tarea para instalar las dependencias
  grunt.registerTask("install", ["run:install"]);
  grunt.registerTask("build", ["run:build"]);
  // Tarea para ejecutar Nodemon
  grunt.registerTask("dev", ["nodemon"]);
  // Tarea para ejecutar el servidor con todos los servicios juntos
  grunt.registerTask("start", ["run:start"]);
  // Tarea para desplegar solamente el microservicio de Grupos
  grunt.registerTask("start_grupos", ["run:start_Grupos"]);
  // Tarea para desplegar solamente el microservicio de Canciones
  grunt.registerTask("start_canciones", ["run:start_Canciones"]);
  // Tarea para desplegar solamente el microservicio de Usuarios
  grunt.registerTask("start_usuarios", ["run:start_Usuarios"]);
};
