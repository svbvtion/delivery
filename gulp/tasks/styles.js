module.exports = () => {
	$.gulp.task('styles', () => {
		return $.gulp.src('src/static/sass/styles.sass')
			.pipe($.sass({}))
			.pipe($.csso({}))
			.pipe($.gulp.dest('build/static/css'))
			.pipe($.browserSync.reload({
				stream:true
			}));
	});
};