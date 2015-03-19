module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            }
        }, 

        sass: {
            dist: {
                options: {
                    loadPath: ['css/src/pure']
                },
                files: {
                    'css/app.css': 'css/app.scss',
                    'css/nested.css': 'css/nested.scss'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task(s).
    grunt.registerTask('default', ['sass']);
}
