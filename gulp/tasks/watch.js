module.exports = () => {
	$.gulp.task('watch', () => {
		$.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
		$.gulp.watch('src/static/sass/**/*.{scss,sass}', $.gulp.series('styles'))
		$.gulp.watch('src/static/img/svg/**/*.svg', $.gulp.series('svg'))
		$.gulp.watch('src/static/img/**/*.!(svg)*', $.gulp.series('webp'))
		$.gulp.watch('src/static/img/**/*.{jpg,jpeg}', $.gulp.series('mozjpeg'))
		$.gulp.watch('src/static/img/**/*.png', $.gulp.series('pngquant'))
		$.gulp.watch('src/static/js/**/*.js', $.gulp.series('terser'))
	});
};