module.exports = function(grunt) {
 
    grunt.initConfig({

        config: {
            dev: 'app/',
            cont: 'content/'

        },
        jshint: {
			all: ['<%= config.prod %>/controllers/*.js']
        },  
        custom_csslint: {
            options: {},
            files:'<%= config.cont %>/css/*.css',
        },
        htmllint: {
            options: {
                force: true
            },
            src: [
                '<%= config.cont %>/views/*.html'
            ],
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                'content/css/style.min.css': ['<%= config.cont %>/css/style.css']
                }
            }
        },       
        //Server
        connect: {
            server: {
                options: {
                    port: 9001,
                    base:'.',
                    hostname: 'localhost',
                    livereload: true
                }
            }
        },
        //Watch
        watch: {
            options:{
                livereload: true
            },
            cssmin: {
                files: '<%= config.cont %>/css/*.css',
                tasks: 'css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-htmllint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-custom-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint'); 
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    

    grunt.registerTask('mini', ['cssmin']);
    grunt.registerTask('build', ['jshint', 'custom_csslint','htmllint']);
    grunt.registerTask('alive', ['connect', 'watch']);

};