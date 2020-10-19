global.$ = {
	gulp: require('gulp'),
	pug: require('gulp-pug'),
	sass: require('gulp-sass'),
	csso: require('gulp-csso'),
	browserSync: require('browser-sync').create(),
	cheerio: require('gulp-cheerio'),
	gulpReplace: require('gulp-replace'),
	svgSprite: require('gulp-svg-sprite'),
	svgmin: require('gulp-svgmin'),
	imagemin: require('imagemin-keep-folder'),
	imageminWebp: require('imagemin-webp'),
	mozjpeg: require('imagemin-mozjpeg'),
	pngquant: require('imagemin-pngquant'),
	terser: require('gulp-terser'),

	path: {
		tasks: require('./gulp/config/tasks.js')
	}
};


$.path.tasks.forEach(function (tasksPath) {
	require(tasksPath)();
});

$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('pug', 'styles'),
	$.gulp.parallel('watch', 'serv'),
	$.gulp.parallel('svg', 'webp'),
	$.gulp.parallel('mozjpeg', 'pngquant'),
	'terser'
	));