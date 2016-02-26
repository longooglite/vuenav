var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var browserify = require('gulp-browserify');

gulp.task('default', function() {
    console.log("Hello world KJ!");
    return gulp.src('public/style/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('public/style'));
});

gulp.task('brify', function(){
    return gulp.src('public/script/components/*.vue')
        .pipe(watch('public/script/components/*.vue'))
        .pipe(plumber())
        .pipe(browserify({
            transform: 'vueify'
        }))
        .pipe(gulp.dest('public/script/components'));
});