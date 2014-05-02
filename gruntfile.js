module.exports = function(grunt) {
    grunt.initConfig({

        watch: {
            source: {
                files: ['sass/**/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', 'watch')
};
