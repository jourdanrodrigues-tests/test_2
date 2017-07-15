const path = require('path')
const gulp = require('gulp')
const sass = require('gulp-sass')

const sassFiles = path.resolve(__dirname, 'src', '**', '*.scss')

gulp.task('compile:css', () =>
  gulp.src(sassFiles)
    .pipe(sass())
    .pipe(gulp.dest('src'))
)

gulp.task('compile:css:watch', ['compile:css'], () => {
  gulp.watch(sassFiles, ['compile:css'])
})
