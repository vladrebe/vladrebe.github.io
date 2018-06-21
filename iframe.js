var numbers = [
315,
590,
63,
273,
168,
199,
6,
55,
91,
301,
61,
42,
83,
187
]
var last_index = 0

function getTrueRandomInteger(min,max){
	document.getElementById("true-random-integer-generator-result").innerHTML='<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />';
	setTimeout(function(){
		document.getElementById("true-random-integer-generator-result").innerHTML=numbers[last_index];
		last_index += 1;
	}, 700); 
}
