var numbers = 
    [
        
13,
61,
31,
59,
78,
67,        
6,        
96,        
115,        
38,        
46,         
51,         
163,        
45,
17,
94, 
105,
143,        
160,
138,
14,       
        

]

var last_index = 0

function getTrueRandomInteger(min,max){

document.getElementById("true-random-integer-generator-result").innerHTML='<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />';

setTimeout(function(){

document.getElementById("true-random-integer-generator-result").innerHTML=numbers[last_index];

last_index += 1;

}, 700); 

}
