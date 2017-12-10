const context = require('rabbit.js').createContext('amqp://localhost');
const sub = context.socket('SUB');

context.on('ready', function() {
//   sub.pipe(process.stdout);
  sub.connect('events', function() {
    
  });
  sub.on('data', function(note) { console.log("Alarum! %s", note); });
  
});