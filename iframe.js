var numbers = [
673, 29, 174, 67, 184, 562, 612, 100, 311, 489, 333, 253
]
var last_index = 0

function getTrueRandomInteger(min,max){
	document.getElementById("true-random-integer-generator-result").innerHTML='<img src="/util/cp/images/ajax-loader.gif" alt="Loading..." />';
	setTimeout(function(){
		document.getElementById("true-random-integer-generator-result").innerHTML=numbers[last_index];
		last_index += 1;
	}, 700); 
}