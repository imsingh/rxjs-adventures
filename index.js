var workshopper = require('workshopper-adventure');
var path  = require('path');
var rxjsing  = workshopper({
  title: 'RxJS Workshop',
  exerciseDir: path.join(__dirname, 'exercises'),
  appDir: __dirname,
  languages: ['en'],
});

rxjsing.addAll([
    'No For Loop'
]);

console.log(rxjsing);

module.exports = rxjsing;