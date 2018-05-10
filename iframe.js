var numbers = [ 
98, 572, 409, 91, 704, 608, 412, 117, 1003, 987, 30, 802, 890, 1071, 891, 318, 691, 217, 60, 198, 473, 917, 
] 
var last_index = 0 

function getTrueRandomInteger(min,max){ 
document.getElementById("true-random-integer-generator-result").innerHTML='<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />'; 
setTimeout(function(){ 
document.getElementById("true-random-integer-generator-result").innerHTML=numbers[last_index]; 
last_index += 1; 
}, 700); 
}
