var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
    console.log("Hello world KJ!");
    return gulp.src('public/style/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('public/style'));
});
