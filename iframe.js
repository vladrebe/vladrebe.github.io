var numbers = 
    [
        
12,
5,
31,
26,
8,
16,
49,
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
