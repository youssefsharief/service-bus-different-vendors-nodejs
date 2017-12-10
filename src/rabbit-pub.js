const context = require('rabbit.js').createContext('amqp://localhost');
const pub = context.socket('PUB')

pub.connect('events',  () => {
    pub.write(JSON.stringify({ welcome: 'rabbit.js' }), 'utf8');
});