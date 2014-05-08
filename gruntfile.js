module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell-spawn');
    grunt.loadNpmTasks('grunt-express-server');

    grunt.initConfig({

        watch: {
            source: {
                files: ['sass/**/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            },
            express: {
                files: ['**/*.js'],
                tasks: ['express:dev'],
                options: {
                    spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
                }
            }
        },

        shell: {
            mongodb: {
                command: 'mongod',
                options: {
                    async: true,
                    stdout: false,
                    stderr: true,
                    failOnError: true,
                    execOptions: {
                        cwd: '.'
                    }
                }
            }
        },
        express: {
            options: {
                port: 8080
            },
            dev: {
                options: {
                    script: 'server.js'
                }
            },
            prod: {
                options: {
                    script: 'server.js',
                    node_env: 'production'
                }
            },
            test: {
                options: {
                    script: 'server.js'
                }
            }
        }

    });

    //when using watch, all the watch tasks must preceed watch in the registerTask statement
    grunt.registerTask('default', ['shell:mongodb', 'express:dev', 'watch']);
    grunt.registerTask('server', ['express:dev', 'watch']);
};
