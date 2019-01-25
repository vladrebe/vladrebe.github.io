var numbers = 
    [
        
       
250,
251,
252,
253,
2025,
2180,
1365,
151,
972,
1439,
19,
130,
2244,
2161,
1199,
564,
532,
62,
184,
6,
1738,
1097,
530,
2247,
96,
330,
688,
520,
1826,
1026,
577,
406,
49,
364,
8,

     





]

var last_index = 0

function getTrueRandomInteger(min,max){

document.getElementById("true-random-integer-generator-result").innerHTML='<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />';

setTimeout(function(){

document.getElementById("true-random-integer-generator-result").innerHTML=numbers[last_index];

last_index += 1;

}, 700); 

}
