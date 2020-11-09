"use strict";

module.exports = function (grunt) {
  // Configuración del proyecto
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    run: {
      test: {
        cmd: "npm",
        args: ["run", "test", "--silent"],
      },
    },
  });

  // Carga el plugin de grunt para hacer esto
  grunt.loadNpmTasks("grunt-run");

  // Tarea para pasar los test
  grunt.registerTask("test", ["run:test"]);
};
