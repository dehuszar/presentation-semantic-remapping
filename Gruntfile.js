module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            css: {
                files: '**/*.styl',
                tasks: ['stylus'],
                options: {
                    livereload: true
                }
            }
        }, 

        stylus: {
            compile: {
                options: {
                    paths: ['css/src/pure']
                },
                files: {
                    'css/app.css': 'css/src/app.styl'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');

    // Default task(s).
    grunt.registerTask('default', ['stylus']);
}
