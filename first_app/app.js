// function sayHello(name) {
//     console.log("Hello " + name)
// }

// sayHello("Star lord")
// module = "thrishhh"
// console.log(module)

// var logger = require('./logger')
// // console.log(logger)
// console.log(logger)
// logger.log("thrish");

// const path = require('path')
// var pathObj = path.parse(__filename)
// console.log(pathObj)

// const os = require('os')
// var totalMemory = os.totalmem()
// var freeMemory = os.freemem()
// console.log('Total Memory: ' + totalMemory)
// console.log('Free Memory: ' + freeMemory)

// console.log(`Total Memory: ${totalMemory / Math.pow(1024, 3)}`)
// console.log(`Free Memory: ${freeMemory / Math.pow(1024, 3)}`)

// const fs= require("fs")

// const files = fs.readdirSync('./');
// console.log(files);
// fs.readdir('./',function(err,files){
//     if(err)console.log('Error',err);
//     else console.log('Result',files);
// });

// fs.readdir('$',function(err,files){
//     if(err)console.log('Error',err);
//     else console.log('Result',files);
// });

// Event Emitter 

// const EventEmitter = require('events');
// // const { EventEmitter } = require('stream');
// const emitter = new EventEmitter();

// emitter.on('messageLogged',function()
// {
// console.log('listener called');
// });

// emitter.emit('messageLogged');


// const EventEmitter = require('events');
// const emitter = new EventEmitter();


// // emitter.on('messageLogged',function()
// // {
// // console.log('listener called');
// // });
// // emitter.on('messageLogged',function(arg)
// // {
// // console.log('listener called',arg);
// // });
// emitter.on('messageLogged',(arg)=>
// {
// console.log('listener called',arg);
// });

// // emitter.emit('messageLogged',{id:1,url:"http://"});

// const log = require('./logger')
// log('the message')


// const EventEmitter = require('events');
// const Logger = require('./logger')
// const logger = new Logger()

// logger.on('messageLogged',(arg)=>
// {
// console.log('listener called',arg);
// });

// logger.log('the message')

// const http= require('http');
// const server = http.createServer();
// server.on('connection',(socket)=>{
//     console.log("New connection")
// })
// server.listen(3000);
// console.log('Listening on port 3000...');

const http= require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hello World');
        res.end();
    }
    if(req.url==='/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000);
console.log('Listening on port 3000...');

