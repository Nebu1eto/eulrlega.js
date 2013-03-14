// eulrlega.js
// by Azur3Sky

function eulrlega(word){
	var last = word.charAt(word.length-1).charCodeAt(0);
	if(last < 0xAC00) return true;
	last -= 0xAC00;
	var jong = (last % 28) + 0x11a7;	
	if(jong != 4519) return true;
	else return false;
}

exports.type = eulrlega(word);

exports.getEulrl = function(word){
    return eulrlega(word)? "을" : "를";
}

exports.getEga = function(word) {
    return eulrlega(word)? "이" : "가";
}

exports.getEunnn = function(word) {
    return eulrlega(word)? "은" : "는";
}

exports.getSentence = function(type, head_sentence, end_sentence) {
    switch (type) {
        case 1:
            return head_sentence + eulrlega(head_sentence) ? "을" : "를" + end_sentence;
            break;
        case 2:
            return head_sentence + eulrlega(head_sentence) ? "이" : "가" + end_sentence;
            break;
        case 3:
            return head_sentence + eulrlega(head_sentence) ? "은" : "는" + end_sentence;
            break;
        default:
            return "Type Error. Please put valid type. T__T";
            break;
    }
};