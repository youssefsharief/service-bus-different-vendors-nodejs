var bus = require('servicebus').bus();

function send() {
    setInterval(function () {
        bus.send('my.event', { my: 'event' });
    }, 1000);
}

module.exports = { send }