var gulp    = require('gulp'),
    connect = require('gulp-connect');

gulp.task('web', ['webserver']);

gulp.task('webserver', function() {
  connect.server({
    root: '../',
    port: 8888,
  });
});


