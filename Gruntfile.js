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
        args: ["install"],
      },
    },
    jshint: {
      all: [
        // Todos los archivos que pasaran a través del jsHint
        "Gruntfile.js", // Pasaremos también el propio  Gruntfile
        "src/**/*.js",
        "test/**/*.js", // Y los archivos de test.
      ],
      options: {
        jshintrc: ".jshintrc", // Indicamos donde se encuentra el archivo de opciones de jsHint.
      },
    },
  });

  // Carga los plugins de grunt 
  grunt.loadNpmTasks("grunt-mocha-test");
  grunt.loadNpmTasks("grunt-run");
  grunt.loadNpmTasks("grunt-contrib-jshint");

  // Tarea para pasar los test
  grunt.registerTask("default", ["mochaTest", "jshint"]);
  // Tarea para instalar las dependencias
  grunt.registerTask("install", ["run:install"]);
};
