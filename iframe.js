
var numbers = 
    [
  
      
500,
21,
66,
224,
553,
407,
16,
542,
105,
10,
46,
321,
216,
444,
116,
7,
 
       
]

var last_index = 0

function getTrueRandomInteger(min,max){

document.getElementById("true-random-integer-generator-result").innerHTML='<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />';

setTimeout(function(){

document.getElementById("true-random-integer-generator-result").innerHTML=numbers[last_index];

last_index += 1;

}, 700); 

}
