'use strict';

let gulp = require('gulp');
let connect = require('gulp-connect');
let htmlmin = require('gulp-htmlmin');
let concat = require('gulp-concat');
let react = require('gulp-react');

gulp.task('html', () => {
    gulp.src('./app/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/'))
        .pipe(connect.reload());
});

gulp.task('jsx', () => {
    gulp.src('./app/js/*.jsx')
        .pipe(concat('index.jsx'))
        .pipe(react())
        .pipe(gulp.dest('./dist/'))
        .pipe(connect.reload());
});

gulp.task('vendor', () => {
    gulp.src([
        './bower_components/react/react.min.js',
        './bower_components/react/react-dom.min.js'
    ])
     .pipe(concat('vendor.js'))
     .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', () => {
    gulp.watch('./app/*.html', ['html']);
    gulp.watch('./app/js/*.jsx', ['jsx']);
});

gulp.task('connect', () => {
    connect.server({
        root: 'dist',
        livereload: true
    });
});

gulp.task('default', ['html', 'jsx', 'vendor', 'watch', 'connect']);
