var t=require('./event');

t.on("login",(res)=>{
    console.log("Login process starts at",res)
});
t.on("login",(res)=>{
    console.log("login process done");
})