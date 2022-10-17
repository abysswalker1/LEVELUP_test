const gulp = require('gulp');
const path = require('path');
const { reload } = require('browser-sync');

const config = require('../config');


gulp.task('media', () =>
  gulp
    .src(path.join(config.root.dev, config.media.dev, config.media.extensions))
    .pipe(gulp.dest(path.join(config.root.dist, config.media.dist)))
    .pipe(reload({ stream: true })))


