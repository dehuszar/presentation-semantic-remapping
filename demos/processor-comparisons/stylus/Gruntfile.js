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
                    paths: ['css/src/pure'],
                    sourceMap: true
                },
                files: {
                    'css/app.css': 'css/app.styl',
                    'css/nested.css': 'css/nested.styl'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');

    // Default task(s).
    grunt.registerTask('default', ['stylus']);
}
