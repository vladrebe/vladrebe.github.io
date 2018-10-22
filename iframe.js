var numbers = 
    [
3,
619,
274,
142,
701,
411,
45,
89,
211,
71,
382,
425,
113,
314,
421,
116,
414,
197,
397,
51,
131,
]

var last_index = 0

function getTrueRandomInteger(min,max){

document.getElementById("true-random-integer-generator-result").innerHTML='<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />';

setTimeout(function(){

document.getElementById("true-random-integer-generator-result").innerHTML=numbers[last_index];

last_index += 1;

}, 700); 

}
