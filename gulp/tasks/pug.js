module.exports = () => {
	$.gulp.task('pug', () => {
		return $.gulp.src(['src/pug/*.pug', '!src/pug/mixins/*'])
			.pipe($.pug({
				pretty:true
			}))
			.pipe($.gulp.dest('build'))
			.on('end', $.browserSync.reload);
	});
};