var gulp = require('gulp');

// == Clean Tasks == //
gulp.task(
  'fonts', function () {
    return gulp.src([
        'assets/fonts/*'
      ])
      .pipe(gulp.dest('./dist/fonts/'));
  }
);
