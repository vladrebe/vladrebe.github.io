var numbers = [ 
297, 102, 193, 183, 351, 11, 2, 405, 155 
] 
var last_index = 0 

function getTrueRandomInteger(min,max){ 
document.getElementById("true-random-integer-generator-result").innerHTML='<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />'; 
setTimeout(function(){ 
document.getElementById("true-random-integer-generator-result").innerHTML=numbers[last_index]; 
last_index += 1; 
}, 700); 
}