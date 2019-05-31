var events = require('events')
var eventEmitter = new events.EventEmitter();

var myEventEmitter = function(){
  console.log('Sum of 2 + 2 is =' + ' ' + (2+2));
}

eventEmitter.on('sum', myEventEmitter);
eventEmitter.emit('sum');