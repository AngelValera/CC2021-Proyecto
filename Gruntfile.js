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
      all: ["Gruntfile.js", "src/**/*.js", "test/**/*.js"],
      options: {
        jshintrc: ".jshintrc",
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
