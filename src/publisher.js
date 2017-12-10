var q = 'tasks';

var open = require('amqplib').connect('amqp://localhost');

// Publisher
open.
    then(conn => conn.createChannel())
    .then(ch => ch.assertQueue(q)
        .then(ok => {

            setInterval(()=>{
                ch.sendToQueue(q, new Buffer('something to do'))
            }, 500)
            
        }
        )
    ).catch(console.warn);