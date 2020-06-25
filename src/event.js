// const fs=require('fs');

const { emit } = require("process");

// fs.ReadStream("./src/data.txt").on("open",()=>{
//     console.log("file open");
// });

const event=require("events").EventEmitter;
let emitter=new event();

module.exports=emitter;


emitter.on("senddata",(x,y)=>{
    console.log(`form submitted ${x}`);
    y.isHandled=true;

});
emitter.on("senddata",(y,z)=>{
    if(z.isHandled){
        console.log(`form already submitted ${y}`);
    }
});



emitter.once("loguser",(name)=>{
    console.log(`${name} login`);
});



function removeEvent(){
    console.log("removed");
    //emitter.removeListener("done",removeEvent);
}

emitter.on("done",removeEvent);



//emitter.emit("done",removeEvent);



//emitter.emit("error",()=>{new Error("error found");})

//emitter.emit('login','avi');

//emitter.emit('senddata',"application",{isHandled:false});




// module 

var login=require('./login');
var account=require('./account');

emitter.emit('login',10);
emitter.emit('account',11);