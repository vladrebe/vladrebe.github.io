
var numbers = 
    [ 
2059,
16,
1856,
751,
1323,
13,
605,
1921,
3052,
3177,
104,
251,
3202,
2795,
2903,
    ]

var last_index = 0

function getTrueRandomInteger(min,max){

document.getElementById("true-random-integer-generator-result").innerHTML='<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />';

setTimeout(function(){

document.getElementById("true-random-integer-generator-result").innerHTML=numbers[last_index];

last_index += 1;

}, 700); 

}
