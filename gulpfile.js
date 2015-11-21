/* load gulp */

var gulp = require('gulp');
var config = require('./gulp.config')();

/* Load gulp plugins */

var $ = require('gulp-load-plugins')({lazy: true});

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
