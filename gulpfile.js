'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-ruby-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const streamify = require('gulp-streamify');
const uglify = require('gulp-uglify');

const PATH = './app/';
const DIST = './dist/';

gulp.task('html', () => {
    gulp.src(PATH + '*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(DIST))
        .pipe(connect.reload());
});

gulp.task('css', () => {
    sass(PATH + 'sass/*.scss', {style: 'compressed'})
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(DIST + 'css/'));
});

gulp.task('js', () => {
    browserify(PATH + 'js/Start.js', {debug: true})
        .transform(babelify, {
            presets: ['es2015', 'react']
        }).bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest(DIST + 'js/'))
        .pipe(connect.reload());
});

gulp.task('js-build', () => {
    browserify(PATH + 'js/Start.js', {debug: false})
        .transform(babelify, {
            presets: ['es2015', 'react']
        }).bundle()
        .pipe(source('index.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest(DIST + 'js/'));
});

gulp.task('watch', () => {
    gulp.watch(PATH +'*.html', ['html']);
    gulp.watch(PATH +'js/**/*.js', ['js']);
});

gulp.task('connect', () => {
    connect.server({
        root: DIST,
        livereload: true
    });
});

gulp.task('default', ['html', 'css', 'js', 'watch', 'connect']);
gulp.task('build', ['html', 'css', 'js-build']);