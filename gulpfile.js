const gulp = require('gulp');
const webpack2 = require('webpack');
const webpackConfig = require('./webpack.config.js');
const gulpWebpack = require('webpack-stream');

gulp.task('compile:client', function(){
    gulp.src('./public/js/app.js')
        .pipe(gulpWebpack(webpackConfig, webpack2))
        .pipe(gulp.dest('./public/dist/js/'))
});

gulp.task('dev:client', function(){
    gulp.src('./public/js/app.js')
        .pipe(gulpWebpack(Object.assign(webpackConfig, {watch: true}), webpack2))
        .pipe(gulp.dest('./public/dist/js/'))
});