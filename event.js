var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function(){
  console.log("My name is Shubham");
}

eventEmitter.on('name', myEventHandler);
eventEmitter.emit('name')
