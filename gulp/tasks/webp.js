module.exports = () => {
	$.gulp.task('webp', () => {
		return $.imagemin(['src/static/img/**/*.*', '!src/static/img/**/*.svg'], 'build/static/img', {
			
    		use: [
				$.imageminWebp({quality: 50})
			]
        
    });
	});

};


