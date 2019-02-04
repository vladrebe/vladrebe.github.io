var numbers = 
    [
        
       
415,
289,
401,
364,
410,
177,
196,
476,
225,
480,
257,
446,
311,
226,
54,
441,
218,       
294,
197,
369,
76,       
261,
142,       
]

var last_index = 0

function getTrueRandomInteger(min,max){

document.getElementById("true-random-integer-generator-result").innerHTML='<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />';

setTimeout(function(){

document.getElementById("true-random-integer-generator-result").innerHTML=numbers[last_index];

last_index += 1;

}, 700); 

}
