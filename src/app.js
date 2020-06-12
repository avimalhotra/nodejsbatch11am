var m=require('./module');              // custom
const color=require('colors');          // downloaded from npm
const os=require('os');                 // nodejs own module

//console.log( m.user.name, m.user.id, m.user.pass);
console.log(` Name is ${m.user.name}, id is ${m.user.id} and password is ${m.user.pass }`);
//console.log(os.cpus().length)
console.log("RED".red, "GREEN".green, "BLUE".blue);