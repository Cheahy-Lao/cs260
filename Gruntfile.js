module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                    'dist/index.html': 'index.html',     // 'destination': 'source'
                }
            },
        },
        sass: {
            dist: {
                files: {
                    'assets/css/style.css': 'assets/sass/style.scss'
                }
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/css/styles.min.css': ['assets/css/modern-normalize.css', 'assets/css/style.css', 'assets/css/animate css/animate.min.css'],
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/js/app.min.js': ['assets/js/*.js', '!assets/js/*.min.js']
                }
            }
        },
        watch: {
            scss: {
                files: '**/*.scss',
                tasks: ['sass', 'cssmin'],
            },
        },
    });


    // Load the plugin that provides tasks.
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['htmlmin', 'uglify', 'cssmin', 'watch']);
};