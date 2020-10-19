module.exports = () => {
	$.gulp.task('serv', () => {
		$.browserSync.init({
			server: {
				baseDir: './build'
			}
		});
	});

};