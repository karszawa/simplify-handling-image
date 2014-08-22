module.exports = (grunt) ->
  grunt.initConfig
    watch:
      coffee:
        tasks: 'coffee'
        files: ['src/**/*.coffee']
      sass:
        tasks: 'sass'
        files: ['src/**/*.scss']

    coffee:
      compile:
        options:
          bare: true
        files: [
          expand: true
          cwd: 'src/'
          src: ['**/*.coffee']
          dest: 'howtouse/'
          rename: (dest, src) -> dest + src.replace('.coffee', '.js')
        ]

    sass:
      dist:
        files: [
          expand: true
          cwd: 'src/'
          src: ['**/*.scss']
          dest: 'howtouse/'
          rename: (dest, src) -> dest + src.replace('.scss', '.css')
        ]

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-contrib-watch'
