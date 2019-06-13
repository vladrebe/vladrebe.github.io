var numbers = 
    [
  
        

74,
193,
215,
48,
247,
93,
70,        
105,     
172,     
69,
54,
151,
222,
25,
24,
41,
7,        
312,     
410,     
96,
372,
46,
278,
418,
249,
175,
78,        
283,     
17,     
402,
92,
47,
29,
82,
256,
90,
66,        
164,     
238,     
51,
38,
1,
367,
40,
201,
39,
206,        
109,     
13,     
89,
123,
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
