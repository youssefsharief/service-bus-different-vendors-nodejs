var bus = require('servicebus').bus();
bus.listen('my.event', function (event) {
  console.log(event);
});

module.exports = {}