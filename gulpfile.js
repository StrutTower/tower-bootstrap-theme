/// <binding ProjectOpened='watch-sass' />
var gulp = require('gulp')
    sass = require('gulp-dart-sass')
    cleancss = require('gulp-clean-css')
    concat = require('gulp-concat')
    rename = require('gulp-rename');

var options = {
    css: {
        sassMainFile: 'src/tower-bootstrap-theme.scss',
        sassMainFile2: 'src/tower-bootstrap-theme-media-query.scss',
        output: 'tower-bootstrap-theme.css',
        output2: 'tower-bootstrap-theme-media-query.css',
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
});

gulp.task('build-css-media-query', function () {
    return gulp.src(options.css.sassMainFile2)
        .pipe(sass({ errLogToConsole: true }).on('error', sass.logError))
        .pipe(concat(options.css.output2))
        .pipe(gulp.dest(options.css.dest))
        .pipe(cleancss({ level: { 1: { specialComments: 0 } } }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(options.css.dest));
});

gulp.task('watch-sass', function () {
    return gulp.watch(options.css.sassFiles, gulp.parallel(['build-css']));
});

gulp.task('default', gulp.parallel(['build-css', 'build-css-media-query']));