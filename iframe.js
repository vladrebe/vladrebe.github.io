var numbers = 
    [
        
22,
96,
31,
226,
8,
184,
149,
36,
10,
128,
121,
104,
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
