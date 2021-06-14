/// <binding ProjectOpened='watch-sass' />
var gulp = require('gulp')
    sass = require('gulp-dart-sass')
    cleancss = require('gulp-clean-css')
    concat = require('gulp-concat')
    rename = require('gulp-rename');

var options = {
    css: {
        light: {
            sassFile: 'src/light-theme.scss',
            output: 'tower-light-theme.css'
        },
        dark: {
            sassFile: 'src/dark-theme.scss',
            output: 'tower-dark-theme.css'
        },
        sassFiles: 'src/**/*.scss',
        dest: 'dist'
    }
};

gulp.task('light-theme-css', function () {
    return gulp.src(options.css.light.sassFile)
        .pipe(sass({ errLogToConsole: true }).on('error', sass.logError))
        .pipe(concat(options.css.light.output))
        .pipe(gulp.dest(options.css.dest))
        .pipe(cleancss({ level: { 1: { specialComments: 0 } } }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(options.css.dest));
});

gulp.task('dark-theme-css', function () {
    return gulp.src(options.css.dark.sassFile)
        .pipe(sass({ errLogToConsole: true }).on('error', sass.logError))
        .pipe(concat(options.css.dark.output))
        .pipe(gulp.dest(options.css.dest))
        .pipe(cleancss({ level: { 1: { specialComments: 0 } } }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(options.css.dest));
});

gulp.task('watch-sass', function () {
    return gulp.watch(options.css.sassFiles, gulp.parallel(['light-theme-css', 'dark-theme-css']));
});

gulp.task('default', gulp.parallel(['light-theme-css', 'dark-theme-css']));