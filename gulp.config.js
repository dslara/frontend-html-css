module.exports = function() {

    /* Path Variables */

    var public = './public/';

    var config = {

        /* Files Paths */

        /* SASS Compiler */

        css: public + 'content/style/css/',
        sass: public + 'content/style/scss/*.scss',

        /* Inject Files */

        public: public,
        index: public + 'index.html',
        js: [
            public + 'app/**/*.js',
            public + 'content/script/**/*.js'
        ],

        jsReload: public + '**/**/**/*.js',

        bower: {
            json: require('./bower.json'),
            directory: './bower_components/'
        },

    };

    config.wiredepOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory
        };
        return options;
    };

    return config;

};
