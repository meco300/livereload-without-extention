'use strict';

module.exports = function(grunt) {
	  grunt.initConfig({
		connect: {
		  options: {
		    port: 9000,
		    hostname: 'localhost'
		  },
		  dev: {
		    options: {
		      middleware: function (connect) {
		        return [
		          require('connect-livereload')(),
		          connect.static(require('path').resolve('./'))
		        ];
		      }
		    }
		  }
		},
	    watch: {
	      livereload: {
	        files: ['index.html'],
	        options: {
	          livereload: 35729,
	          nospawn: true,
	          interrupt: false,
	          debounceDelay: 250
	        }
	      }
	    }
	  });

	  grunt.loadNpmTasks("grunt-contrib-watch");
	  grunt.loadNpmTasks("grunt-contrib-connect");

	  grunt.registerTask("default", ["connect", "watch"]);
};