module.exports = function(grunt) {
  require('load-grunt-config')(grunt, {
  });

  grunt.loadTasks('tasks');

  grunt.registerTask('scripts', ['jshint']);
  grunt.registerTask('default', ['scripts', 'angular-yaml']);
  grunt.registerTask('dev', ['default', 'watch']);
};