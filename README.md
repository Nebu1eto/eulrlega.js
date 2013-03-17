# eulrlega.js

Simple Korean Stemming Module for find appropriate Particle.
Javascript에서 문자열 뒤에 붙을 말이 을(이/은)인지 를(가/는)인지 알려줍니다.

Original(Java, C++) by [synchrok](http://github.com/synchrok), Javascript by [Azur3Sky](http://github.com/Azur3Sky)

## Installation

    $ npm install eulrlega
    
## Usage & Examples

First, Declare this module to use this module. (if this is not uploaded on npm repository, use eulrlega.js's path.)
    var eulrlega = require('eulrlega');

Second, Just Use! :D

eulrlega(word) : return true if it use '을', '이', '는'.
    eulrlega.eulrlega("밥");

getEulrl(word), getEga(word), getEunnn(word) : return appropriate Particle
    eulrlega.getEulrl("떡");

getSentence(sentence) : return full sentence.
'#a' find which is appropriate from '을', '를'.
'#b' find which is appropriate from '이', '가'.
'#c' find which is appropriate from '은', '는'.
    eulrlega.getSentence("나#c 치킨#b 먹고싶어서 치킨#a 먹었는데 맛#b 좋았다.");

## License

WTFPL(Do What the Fuck You Want to Public License)

DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
Version 2, December 2004

Copyright (C) 2004 Azur3Sky <admin@steelheartdev.me>

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document, and changing it is allowed as long
as the name is changed.

DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

0. You just DO WHAT THE FUCK YOU WANT TO.

