var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('dev/scss/styles.scss')
             .pipe(sass())
             .pipe(gulp.dest('dev/css'))
  //console.log('hey ho !!!');  
});