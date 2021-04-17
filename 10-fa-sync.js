const {readFileSync,writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt','utf-8'); 
const second = readFileSync('./content/second.txt','utf-8'); 

//console.log(first,second);

writeFileSync(
    './content/result.txt',
    `here is the result : ${first} , ${second}`,
    {flag: 'a'}
    
);

const result = readFileSync('./content/result.txt','utf-8');
console.log(`done with this task\nstarting the next one`);

