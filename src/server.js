const  ext=require('./ext');

const admin=require('./admin');

const os=require('os');
//console.log(ext.rect);
//console.log(ext.circ.circ);

//console.log(os.arch());
//console.log(os.cpus());
//console.log(os.cpus().length);

//console.log(os.totalmem()/(1024*1024*1024));
//console.log(os.freemem()/(1024*1024*1024));

//console.log(os.networkInterfaces());
//console.log(os.platform());
//console.log(os.type());

//console.log(os.uptime()/(60*60));

//console.log(os.userInfo());

//console.log(os.release());

console.log(`Admin name is ${admin.name} and password is ${admin.pass}.`);