var numbers = [ 
2, 7, 19, 1, 20, 8, 14, 21, 13, 8, 3, 8, 90, 1, 91, 18, 61, 27, 60, 19, 43, 91, 
] 
var last_index = 0 

function getTrueRandomInteger(min,max){ 
document.getElementById("true-random-integer-generator-result").innerHTML='<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />'; 
setTimeout(function(){ 
document.getElementById("true-random-integer-generator-result").innerHTML=numbers[last_index]; 
last_index += 1; 
}, 700); 
}
