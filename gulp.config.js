module.exports = function() {

    /* Path Variables */

    var public = './public/';

    var config = {

        /* Files Paths */

        public: public,
        index: public + 'index.html',
        js: public + 'script/**/*.js',

        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
        },

    };

    config.wiredepOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
        };
        return options;
    };

    return config;

};
