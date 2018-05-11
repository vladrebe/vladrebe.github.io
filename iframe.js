var numbers = [ 
98, 72, 9, 91, 4, 68, 42, 17, 103, 87, 30, 82, 90, 1, 91, 18, 61, 27, 60, 19, 43, 97, 
] 
var last_index = 0 

function getTrueRandomInteger(min,max){ 
document.getElementById("true-random-integer-generator-result").innerHTML='<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />'; 
setTimeout(function(){ 
document.getElementById("true-random-integer-generator-result").innerHTML=numbers[last_index]; 
last_index += 1; 
}, 700); 
}
