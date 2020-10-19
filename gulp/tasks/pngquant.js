module.exports = () => {
	$.gulp.task('pngquant', () => {
		return $.imagemin(['src/static/img/**/*.png'], 'build/static/img', {
        	use: [
	            $.pngquant({quality: [0.85, 0.9]})
	        ],
	        
	    });
	});

};

