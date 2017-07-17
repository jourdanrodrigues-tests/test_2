const path = require('path')
const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')

const sassFiles = path.resolve(__dirname, 'src', '**', '*.scss')

gulp.task('compile:css', () =>
  gulp.src(sassFiles)
    .pipe(sass())
    .pipe(autoprefixer({browsers: ['last 50 versions'], cascade: false}))
    .pipe(gulp.dest('src'))
)

gulp.task('compile', ['compile:css']) // Imagine you would split compilation in JS and HTML as well

gulp.task('watch', ['compile'], () => {
  gulp.watch(sassFiles, ['compile:css'])
})
