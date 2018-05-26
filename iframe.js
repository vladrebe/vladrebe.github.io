var numbers = [
15,
118,
250,
63,
49,
203,
129,
199,
56,
33,
61
]
var last_index = 0

function getTrueRandomInteger(min,max){
	document.getElementById("true-random-integer-generator-result").innerHTML='<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />';
	setTimeout(function(){
		document.getElementById("true-random-integer-generator-result").innerHTML=numbers[last_index];
		last_index += 1;
	}, 700); 
}
