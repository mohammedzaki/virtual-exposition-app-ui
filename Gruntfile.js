module.exports = function(grunt) {

  grunt.registerTask('heroku', ['build']);
  
  grunt.registerTask('heroku', function (target) {
  // use the target to do whatever, for example:
  grunt.task.run('build:' + target);
});

};