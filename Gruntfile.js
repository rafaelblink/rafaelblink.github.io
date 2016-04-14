module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'assets/css/main.css': 'assets/scss/main.scss'
        }
      }
    },
    watch: {
      css: {
        files: 'assets/scss/main.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'assets/css/components.min.css': ['assets/components/bootstrap/dist/css/bootstrap.min.css', 'assets/components/font-awesome/css/font-awesome.min.css']
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'assets/js/components.min.js': ['assets/components/jquery/dist/jquery.js', 'components/bootstrap/dist/js/bootstrap.js']
        }
      }
    }
  });

  //Grunt default
  grunt.registerTask('default', ['watch']);

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
};
