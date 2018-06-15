var numbers = [
37,
498,
205,
306,
168,
199,
706,
655,
501,
331,
61,
429,
893,
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
