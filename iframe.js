var numbers = 
    [
        
32,
66,
60,
5,
38,
14,
9,
12,
51,
17,
42,
19,
20,
28,
36,
47,
7,
8,
74,
24,
26,
75,
6,
13,
65,
2,
18,
27,
67,
33,
37,
25,
29,
68,
21,
69,
40,
45,
50,
64,
46,
35,
48,
71,
22,
1,
30,
55,
62,
72,

        

]

var last_index = 0

function getTrueRandomInteger(min,max){

document.getElementById("true-random-integer-generator-result").innerHTML='<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />';

setTimeout(function(){

document.getElementById("true-random-integer-generator-result").innerHTML=numbers[last_index];

last_index += 1;

}, 700); 

}
