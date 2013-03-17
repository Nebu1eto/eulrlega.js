/**
 * Created with IntelliJ IDEA.
 * eulrlega.js
 * User: Azu3Sky
 */

function eulrlega(word){
	var last = word.charAt(word.length-1).charCodeAt(0);
	if(last < 0xAC00) return true;
	last -= 0xAC00;
	var jong = (last % 28) + 0x11a7;	
	if(jong != 4519) return true;
	else return false;
}

exports.eulrlega = function(word){
    return eulrlega(word);
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

exports.getSentence = function(sentence){
    for (var i = 0; i < sentence.length; i++) {

        if (sentence[i] != '#') continue;
        switch(sentence[i+1]) {
            case 'a':
                sentence = sentence.replace('#a', eulrlega(sentence[i-1])? "을" : "를");
                break;
            case 'b':
                sentence = sentence.replace('#b', eulrlega(sentence[i-1])? "이" : "가");
                break;
            case 'c':
                sentence = sentence.replace('#c', eulrlega(sentence[i-1])? "은" : "는");
                break;
        }
    }

    return sentence;
}