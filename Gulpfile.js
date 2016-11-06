var gulp = require('gulp');
var sass = require('gulp-sass');
var fs = require('fs');
var debug = require('gulp-debug');
var sassLint = require('gulp-sass-lint');


gulp.task('styles', function() {
  return gulp.src('sass/*.scss')
        .pipe(debug({title: 'sass'}))
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./static/css/'));
});


//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});
