var each = require('each-series');

module.exports = function(cb) {
  cb = cb || function() {};
  var fns = [];
  var doneAdding = false;

  process.nextTick(function() {
    doneAdding = true;
    each(fns, function(fn, i, done) {
      fn(done);
    }, cb);
  });

  return function(fn) {
    if (doneAdding) throw new Error('All calls to next must be on the same tick.');
    fns.push(fn);
  };
};
