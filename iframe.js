var numbers = 
    [
        
1537,
859,
371,
656,
868,
238,
1876,
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
