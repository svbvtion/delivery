module.exports = () => {
	$.gulp.task('mozjpeg', () => {
		return $.imagemin(['src/static/img/**/*.{jpg,jpeg}'], 'build/static/img', {
        use: [
            $.mozjpeg({quality: 85, progressive: true})
        ],
      
    });
	});

};

