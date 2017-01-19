'use strict';

import gulp from 'gulp';
import requireDir from 'require-dir';
import runSequence from 'run-sequence';

const tarks = requireDir("./tasks");

gulp.task('dev', () => {
  return runSequence('clean', 'html', 'sass', 'fonts','image', 'assets', 'vendor', 'demo', 'js:watch','browser-sync', 'watch');
});

gulp.task('build', () => {
  return runSequence('build:clean', 'build:html', 'build:sass', 'build:fonts','build:image', 'build:assets', 'build:vendor', 'build:js', 'build:demo');
})