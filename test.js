var test = require('tape');
var afterSequence = require('./');

test('basic test', function(t) {
  var i = 0;
  var next = afterSequence(function() {
    t.equal(i, 4);
    t.end();
  });

  next(function(cb) {
    setTimeout(function() {
      i++;
      cb();
    }, 400);
  });

  next(function(cb) {
    setTimeout(function() {
      i++
      cb();
    }, 400);
  });

  next(function(cb) {
    setTimeout(function() {
      i++;
      cb();
    }, 400);
  });

  next(function(cb) {
    setTimeout(function() {
      i++;
      cb();
    }, 400);
  });

  setTimeout(function() {t.equal(i, 1)}, 550);
  setTimeout(function() {t.equal(i, 2)}, 950);
  setTimeout(function() {t.equal(i, 3)}, 1350);
});


test('error handling', function(t) {
  var i = 0;
  var next = afterSequence(function(err) {
    t.ok(err);
    t.equal(i,3);
    t.end();
  });

  next(function(cb) {
    setTimeout(function() {
      i++;
      cb();
    }, 400);
  });

  next(function(cb) {
    setTimeout(function() {
      i++
      cb();
    }, 400);
  });

  next(function(cb) {
    setTimeout(function() {
      i++;
      cb(new Error('oops!'));
    }, 400);
  });

  next(function(cb) {
    setTimeout(function() {
      i++;
      cb();
    }, 400);
  });

  setTimeout(function() {t.equal(i, 1)}, 550);
  setTimeout(function() {t.equal(i, 2)}, 950);
});
