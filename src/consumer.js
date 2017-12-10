var q = 'tasks';

var open = require('amqplib').connect('amqp://localhost');
// Consumer
open
    .then(conn => conn.createChannel())
    .then(ch => ch.assertQueue(q)
        .then(ok => ch.consume(q, msg => {
            if (msg !== null) {
                console.log(msg.content.toString());
                ch.ack(msg);
            }
        })))
    .catch(console.warn);