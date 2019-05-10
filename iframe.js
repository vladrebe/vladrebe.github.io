var numbers = 
    [
        
41,
51,
145,
163,
13,
237,
14,
131,
130,
218,
134,
74,
97,
73,
136,
183,
168,
137,
200,
86,       

        

]

var last_index = 0

function getTrueRandomInteger(min,max)

document.getElementById("true-random-integer-generator-result").innerHTML='<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />';

setTimeout(function(){

document.getElementById("true-random-integer-generator-result").innerHTML=numbers[last_index];

last_index += 1;

}, 700); 

}
