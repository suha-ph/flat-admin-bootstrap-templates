'use strict';

import gulp from "gulp";
import concat from "gulp-concat";

const jsLibs = [
  'bower_components/jquery/dist/jquery.js',
  'bower_components/bootstrap/dist/js/bootstrap.js',
  'bower_components/select2/dist/js/select2.full.js',
  'bower_components/datatables.net/js/jquery.dataTables.js',
  'bower_components/datatables.net-bs/js/dataTables.bootstrap.js',
  'bower_components/chartist/dist/chartist.js',
  'bower_components/chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.js',
  'bower_components/highlightjs/highlight.pack.js',
  'bower_components/highlightjs-line-numbers.js/dist/highlightjs-line-numbers.min.js',
  'bower_components/devbridge-autocomplete/dist/jquery.autocomplete.js',
  'node_modules/chart.js/dist/Chart.bundle.min.js',
  'bower_components/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js'
]

const cssLibs = [
  'bower_components/bootstrap/dist/css/bootstrap.css',
  'bower_components/font-awesome/css/font-awesome.css',
  'bower_components/datatables.net-bs/css/dataTables.bootstrap.css',
  'bower_components/chartist/dist/chartist.css',
  'bower_components/highlightjs/styles/androidstudio.css',
  'bower_components/select2/dist/css/select2.css',
  'bower_components/perfect-scrollbar/css/perfect-scrollbar.min.css'
]

gulp.task('vendor', ['vendor:js', 'vendor:css']);

gulp.task('vendor:js', function () {
  return gulp.src(jsLibs)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('temp/html/assets/js'))
});

gulp.task('vendor:css', function () {
  return gulp.src(cssLibs)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('temp/html/assets/css'))
});

gulp.task('build:vendor', ['build:vendor:js', 'build:vendor:css']);

gulp.task('build:vendor:js', function () {
  return gulp.src(jsLibs)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dist/html/assets/js'))
});

gulp.task('build:vendor:css', function () {
  return gulp.src(cssLibs)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('dist/html/assets/css'))
});
