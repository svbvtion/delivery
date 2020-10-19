module.exports = () => {
	$.gulp.task('terser', () => {
		return $.gulp.src('src/static/js/**/*.js')
			.pipe($.terser())
			.pipe($.gulp.dest("build/static/js/"))
			.on('end', $.browserSync.reload);
	});

};