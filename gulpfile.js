const path = require('path')
const gulp = require('gulp')
const sass = require('gulp-sass')

const sassFiles = path.resolve(__dirname, 'app', '**', '*.scss')

gulp.task('compile:css', () =>
  gulp.src(sassFiles)
    .pipe(sass())
    .pipe(gulp.dest('app'))
)
