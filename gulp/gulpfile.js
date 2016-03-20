// Gulpfile

// Load module
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    coffee = require('gulp-coffee'),
    minify = require('gulp-minify-css'),
    coffeelint = require('gulp-coffeelint'),
    autoprefixer = require('gulp-autoprefixer');

/*
 * Variables for all directory
 */
var app = '../',
    sass_dir = app + '_sass/',
    css_dir = app + 'css/',
    js_dir = app + 'js/',
    coffee_dir = js_dir + 'src/';
/**
 * Javascript and CSS tasks
 * All type of files (librairies and personnal)
 */
gulp.task('default', ['css', 'js']);

/**
 * Javascript, CSS and images tasks
 * All type of files (librairies and personnal)
 */
gulp.task('css', ['sass']);

/**
 * Javascript, CSS and images tasks
 * All type of files (librairies and personnal)
 */
gulp.task('js', ['coffeescript']);

/**
 * Javascript, CSS and images tasks
 * All type of files (librairies and personnal)
 */
gulp.task('server', ['jekyll-serve']);

/*******************************************************************************
  CSS Files
 *******************************************************************************/

/**
 * Sass compilation, Autoprefixer CSS and Minification
 * Personnal files
 * Output: style.css
 */
gulp.task('sass', function() {
  return gulp.src(sass_dir + 'style.scss')
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions', '> 5%', 'ie 10'))
    .pipe(minify())
    .pipe(gulp.dest(css_dir));
});

/*******************************************************************************
  JS Files
 *******************************************************************************/

/**
 * Coffeescript Linting, compilation, Minification and remane them with suffix .min.js
 * Personnal files
 * Output: js/*.min.js
 */
gulp.task('coffeescript', function() { // Main src -- see if use coffeescript
  return gulp.src(coffee_dir + '*.coffee')
    .pipe(coffeelint())
    .pipe(coffeelint.reporter())
    .pipe(coffee())
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
  .pipe(gulp.dest(js_dir));
});
