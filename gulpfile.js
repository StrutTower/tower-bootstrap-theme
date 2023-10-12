/// <binding ProjectOpened='watch-sass' />
var gulp = require('gulp')
    sass = require('gulp-dart-sass')
    cleancss = require('gulp-clean-css')
    concat = require('gulp-concat')
    rename = require('gulp-rename');

var options = {
    css: {
        sassMainFile: 'src/bootstrap.scss',
        output: 'tower-bootstrap-theme.css',
        sassFiles: 'src/**/*.scss',
        dest: 'dist'
    }
};

gulp.task('build-css', function () {
    return gulp.src(options.css.sassMainFile)
        .pipe(sass({ errLogToConsole: true }).on('error', sass.logError))
        .pipe(concat(options.css.output))
        .pipe(gulp.dest(options.css.dest))
        .pipe(cleancss({ level: { 1: { specialComments: 0 } } }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(options.css.dest));
})

gulp.task('watch-sass', function () {
    return gulp.watch(options.css.sassFiles, gulp.parallel(['build-css']));
});

gulp.task('default', gulp.parallel(['build-css']));