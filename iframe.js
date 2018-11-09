var numbers = 
    [
        
37,
159,
171,
56,
68,
16,
49,
107,
401,
328,
451,
109,
356,
47,
299,
261,
54,
90,
150,
137,
311,
97,
        

]

var last_index = 0

function getTrueRandomInteger(min,max){

document.getElementById("true-random-integer-generator-result").innerHTML='<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />';

setTimeout(function(){

document.getElementById("true-random-integer-generator-result").innerHTML=numbers[last_index];

last_index += 1;

}, 700); 

}
