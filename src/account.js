var t=require('./event');

t.once("account",(res)=>{
    console.log("account process done at ",res )
});