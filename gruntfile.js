module.exports = function(grunt) {
 
    grunt.initConfig({
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
                files: 'content/css/*.css',
                tasks: 'css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('live', ['connect', 'watch']);

};