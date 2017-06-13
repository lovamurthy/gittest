
//let myFuncs=[];

// var myFuncs=[];
// for(var i=0; i<2; i++) {
//     myFuncs.push((function(i) { 
//         return function() {return i; }
//     })(i));
// }

// console.log(myFuncs[0]());
// console.log(myFuncs[1]());

var result = [];
for (var i=0; i < 5; i++) {
 result.push(function () {
//     console.log("in inner"+i)
catchPush(i)
      return i 
   }); // (1)
}
//console.log(result[1]()); // 5 (not 1)
//console.log(result[3]()); // 5 (not 3)

function catchPush(nu) {
console.log("what i caught is:::"+nu);
result.push(nu);
}