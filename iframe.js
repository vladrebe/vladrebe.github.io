
var numbers = 
    [ 
        324,
        433,
        35,
        35,
        3535353,
33247,
12340,
42345,       
72347, 
32454,
62346,
52346,   
46234446,
]

var last_index = 0

function getTrueRandomInteger(min,max){

document.getElementById("true-random-integer-generator-result").innerHTML='<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />';

setTimeout(function(){

document.getElementById("true-random-integer-generator-result").innerHTML=numbers[last_index];

last_index += 1;

}, 700); 

}
