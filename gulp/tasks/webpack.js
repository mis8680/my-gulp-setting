var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var webpackConfig = require("../webpack.config.js");
var stream = require('webpack-stream');

var path = {
    ALL: ['assets/**/*.js'],
    MINIFIED_OUT: 'bundle.min.js',
    DEST_SRC: 'dist/src',
    DEST_BUILD: 'dist/js',
    DEST: 'dist'
};

gulp.task("webpack", function () {
    return gulp.src(path.ALL)
        .pipe(sourcemaps.init())
        .pipe(stream(webpackConfig))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.DEST_BUILD));
});