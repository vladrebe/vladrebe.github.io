var numbers = [ 
817, 901, 1311, 572, 409, 1237, 91, 754, 608, 412, 117, 1003, 987, 30, 802, 890, 1071, 891, 318, 691, 217, 60, 198, 473, 917, 
] 
var last_index = 0 

function getTrueRandomInteger(min,max){ 
document.getElementById("true-random-integer-generator-result").innerHTML='<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />'; 
setTimeout(function(){ 
document.getElementById("true-random-integer-generator-result").innerHTML=numbers[last_index]; 
last_index += 1; 
}, 700); 
}
