var numbers = 
    [
        
1405,
1811,
475,
97,        
102,        
301,
456,
101,
209,
476,
221,
567,
257,
446,
310,
878,
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
