var numbers = [
193,
90,
178,
281,
311,
329,
217,
585,
91,
301,
601,
420,
83,
187,
1048,
859,
184,
900,
120
]
var last_index = 0

function getTrueRandomInteger(min,max){
	document.getElementById("true-random-integer-generator-result").innerHTML='<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />';
	setTimeout(function(){
		document.getElementById("true-random-integer-generator-result").innerHTML=numbers[last_index];
		last_index += 1;
	}, 700); 
}
