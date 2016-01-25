module.exports = function(grunt) {

     require('load-grunt-tasks')(grunt);

     grunt.initConfig({
        jshint: {
            all: ['web/assets/js/*.js']
        },

        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {
                    'web/assets/js/all.min.js': ['web/assets/js/libs/*.js', 'web/assets/js/app.js']
                }
            }
        },

        cssmin: {
            combine: {
                files: {
                    'web/assets/css/all.min.css': 'web/assets/css/main.css'
                }
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'web/assets/img/',
                    src: ['*.{png, jpg, gif}'],
                    dest: 'web/assets/img/dist/'
                }]
            }
        },

        watch: {
            dist: {
                files: ['web/assets/js/**/*.js', 'web/assets/css/**/*.css', 'web/assets/img/*', '!web/assets/css/all.min.css', '!web/assets/js/all.min.js', '!web/assets/css/all.min.css', '!web/assets/img/dist/*'],
                tasks: ['default'],
                options: {
                    spawn: false
                }
            }
        },


    });

    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'imagemin']);

}
