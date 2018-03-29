var numbers = [ 
8890, 888, 1673, 62, 8453, 7593, 7171, 8910, 7812, 8918, 8981, 7891, 5632, 8901
] 
var last_index = 0 

function getTrueRandomInteger(min,max){ 
document.getElementById("true-random-integer-generator-result").innerHTML='<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />'; 
setTimeout(function(){ 
document.getElementById("true-random-integer-generator-result").innerHTML=numbers[last_index]; 
last_index += 1; 
}, 700); 
}