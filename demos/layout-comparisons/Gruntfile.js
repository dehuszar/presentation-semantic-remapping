module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            css: {
                files: '**/*.less',
                tasks: ['less'],
                options: {
                    livereload: true
                }
            }
        }, 

        less: {
            development: {
                options: {
                    paths: ['css/src/pure']
                },
                files: {
                    'css/processed.css': 'css/processed.less'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['less']);
}
