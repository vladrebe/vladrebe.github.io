
var numbers = 
    [ 
324,
43,
        45,
        45,
        44444,
        5645,
45,
    ]

var last_index = 0

function getTrueRandomInteger(min,max){

document.getElementById("true-random-integer-generator-result").innerHTML='<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />';

setTimeout(function(){

document.getElementById("true-random-integer-generator-result").innerHTML=numbers[last_index];

last_index += 1;

}, 700); 

}
