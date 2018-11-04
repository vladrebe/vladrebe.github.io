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
541,
109,
756,
47,
299,
961,
54,
890,
1501,
1302,

        

]

var last_index = 0

function getTrueRandomInteger(min,max){

document.getElementById("true-random-integer-generator-result").innerHTML='<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />';

setTimeout(function(){

document.getElementById("true-random-integer-generator-result").innerHTML=numbers[last_index];

last_index += 1;

}, 700); 

}
