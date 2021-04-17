//modules - encapsulated code only shaRe minumum
//CommonJs - every file is module (by default)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative');
require('./7-mind-grenade');


console.log(data);
 sayHi(names.john); 