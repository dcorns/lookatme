module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell-spawn');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-casper');
    grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');

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
                    //set to false to keep from failing if mongodb already running as can happen when a test fails and stops grunt without stoping the database
                    failOnError: false,
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
        },

        casper: {
            acceptance: {
                options: {
                    test: true,
                },
                files: {
                    'test/acceptance/casper-results.xml': ['test/acceptance/*_test.js']
                }
            }
        },

      simplemocha: {
        options: {
          globals: ['should'],
          timeout: 3000,
          ignoreLeaks: false,
          ui: 'bdd',
          reporter: 'tap'
        },

        all: { src: ['test/unit/*.js', 'test/api/*.js'] }
      }

    });

    //when using watch, all the watch tasks must preceed watch in the registerTask statement
    grunt.registerTask('default', ['shell:mongodb', 'express:dev', 'watch']);
    grunt.registerTask('server', ['shell:mongodb', 'express:dev', 'watch']);
    grunt.registerTask('test', ['shell:mongodb', 'express:dev', 'casper','simplemocha', 'watch']);
};
