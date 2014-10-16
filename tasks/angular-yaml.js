/**
 * grunt-angular-yaml
 */

var async = require('async');
var path = require('path');

module.exports = function(grunt) {
  grunt.registerMultiTask('angular-yaml', 'Converts yaml to angular constants', function() {
    var done = this.async();
    var dest = this.data.dest;

    var constants = ["angular.module('yamldata', [])"];

    async.each(this.filesSrc, function(file, next) {
      try {
        var data = grunt.file.readYAML(file);
        constants.push("constant('" + path.basename(file, path.extname(file)) + "', " + JSON.stringify(data) + ")");
        next();
      } catch(e) {
        next(e);
      }
    }, function(err) {
      if (err) {
        return grunt.fail.warn(err);
      }

      grunt.file.write(dest, constants.join('.') + ';');

      done();
    });
  });
};