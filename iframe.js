var numbers = [ 
6061, 887, 1673, 62, 8453, 13790, 7912, 7103, 9004, 1002, 113, 10560, 11383, 8901, 11, 5762, 4079, 1367, 9041, 754, 6080, 4912, 1170, 10983, 987, 11030, 1080, 7890, 12071, 8941, 3178, 6791,
] 
var last_index = 0 

function getTrueRandomInteger(min,max){ 
document.getElementById("true-random-integer-generator-result").innerHTML='<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />'; 
setTimeout(function(){ 
document.getElementById("true-random-integer-generator-result").innerHTML=numbers[last_index]; 
last_index += 1; 
}, 700); 
}
