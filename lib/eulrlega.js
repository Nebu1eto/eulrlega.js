// eulrlega.js : Javascript에서 문자열 뒤에 붙을 말이 을(이/은)인지 를(가/는)인지 알려줍니다.
// C++ / Java by. synchrok
// Javascript by. Azur3Sky

function eulrlega(word){
	var last = word.charAt(word.length-1).charCodeAt(0);
	if(last < 0xAC00) return true;
	last -= 0xAC00;
	var jong = (last % 28) + 0x11a7;	
	if(jong != 4519) return true;
	else return false;
}

exports.getEulrl = function(word){
	return eulrlega(word)? "을" : "를";
}

exports.getEga = function(word) {
	return eulrlega(word)? "이" : "가";
}
	
exports.getEunnn = function(word) {
	return eulrlega(word)? "은" : "는";		
}
