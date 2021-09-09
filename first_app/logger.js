// function log(message) {
//     console.log(message + " lol")
// }
// // module.exports.log= log
// module.exports = log;

const EventEmitter = require('events');
const emitter = new EventEmitter();

var url="http://thrish.com";
class Logger extends EventEmitter{
log(message){
    console.log(message)
    // this.emit('messageLogged',{id:1,url:"http://"});
    this.emit('messageLogged',{id:1,url});
}
}
module.exports=Logger;
