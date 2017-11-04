'use strict';

module.exports = function() {
  $.gulp.task('pug', function() {
    let content = require('./../../source/json/content.json');

    return $.gulp.src('./source/template/pages/*.pug')
      .pipe($.gp.pug({
        locals: content,
        pretty: true
      }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root));
  });
};