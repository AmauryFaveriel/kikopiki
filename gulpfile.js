const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const cleancss = require('gulp-clean-css');

gulp.task('scss', () => {
	return gulp.src('src/scss/master.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(cleancss({ compatibility: 'ie8' }))
		.pipe(rename('master.min.css'))
		.pipe(gulp.dest('./src/css'))
		.pipe(browserSync.stream());
});

gulp.task('build', ['scss']);

gulp.task('default', () => {
    gulp.watch('src/scss/**/*.scss', ['scss']);
});