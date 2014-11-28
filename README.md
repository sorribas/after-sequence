after-sequence
==============

[![build status](https://secure.travis-ci.org/sorribas/after-sequence.png)](http://travis-ci.org/sorribas/after-sequence)

Run several async functions and run a callback when they are gone.

Install
-------

```
npm install after-sequence
```

Example
-------

```js
var afterSequence = require('after-sequence');

var next = afterSequence(function(err) {
  console.log('Done!');
});

next(function(cb) {
  setTimeout(function() {
    console.log('Hello');
    cb();
  }, 400);
});

next(function(cb) {
  setTimeout(function() {
    console.log('there');
    cb();
  }, 400);
});

next(function(cb) {
  setTimeout(function() {
    console.log('what\'s');
    cb();
  }, 400);
});

next(function(cb) {
  setTimeout(function() {
    console.log('up?');
    cb();
  }, 400);
});
```

License
-------

MIT
