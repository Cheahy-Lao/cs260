module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            target: {
                files: {
                    'assets/js/app.min.js': ['assets/js/*.js', '!assets/js/*.min.js']
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
                    'assets/css/styles.min.css': ['assets/css/*.css', 'assets/css/animate css/animate.min.css', '!assets/css/*.min.css'],
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'assets/css/style.css': 'assets/sass/style.scss'
                }
            }
        },
        watch: {
            scss: {
                files: '**/*.scss',
                tasks: ['sass', 'cssmin'],
                options: {
                    livereload: true,
                },
            },
        },
    });


    // Load the plugin that provides tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'watch']);
};