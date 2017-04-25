var gulp = require('gulp');
var webpack = require('gulp-webpack');

gulp.task(
  'scripts', function() {
    return gulp.src('assets/js/app.js')
      .pipe(webpack( require('../../gulp/webpack.config.js')))
      .pipe(gulp.dest('dist/'));
  }
);

