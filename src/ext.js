
var x=3;
var y=5;
var area=x*y;

var r=10;
var area2=Math.PI*r*r;

function getCirc(){
    return 2*3.14*r;
}


//module.exports=area;
// module.exports={ 
//     x:x,
//     y:y,
//     area:area
// }

module.exports.rect={x:x,     y:y,     area:area }
module.exports.circ={r:r, area:area2, circ:getCirc() };
