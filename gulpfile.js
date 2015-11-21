/* load gulp */

var gulp = require('gulp');
var config = require('./gulp.config')();
var del = require('del');

/* Load gulp plugins */

var $ = require('gulp-load-plugins')({lazy: true});

/* Compile SCSS */

gulp.task('clean-style', function(){
    var files = config.css;
    del(files);
});

gulp.task('style', ['clean-style'], function(){
    return gulp
        .src(config.sass)
        .pipe($.plumber())
        .pipe($.sass())
        .pipe($.autoprefixer())
        .pipe($.csso())
        .pipe(gulp.dest(config.css))
});

gulp.task('watch', function() {
    gulp.watch([config.sass], ['style']);
});

/* Inject Files */

gulp.task('wiredep', function(){
    var options = config.wiredepOptions();
    var wiredep = require('wiredep').stream;
    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.js), {ignorePath: '/public/', addRootSlash: false}))
        .pipe(gulp.dest(config.public));
});

gulp.task('inject', ['wiredep', 'style'], function(){
    return gulp
        .src(config.index)
        .pipe($.inject(gulp.src(config.css + '*.css'), {ignorePath: '/public/', addRootSlash: false}))
        .pipe(gulp.dest(config.public));
});

/* Server and Live Reload */

gulp.task('connect', function() {
    $.connect.server({
        livereload: true,
        root: config.public
    });
});

gulp.task('livereload', function() {
    return gulp
        .src(config.public)
        .pipe($.watch([config.css + '*.css', config.js, config.index]))
        .pipe($.connect.reload());
});

gulp.task('server', ['connect', 'livereload', 'watch']);
