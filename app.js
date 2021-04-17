//* npm - global command, comes with node
//* npm --version

//* local dependencies - use it only in this particular project
//* npm i <packageName>

//* global dependencies - use it in Any project
//* npm -g <packageName>
//* sudo npm install <packageName> (mac)

//* package.json - manifest file (stores important info about the project/package)
//* manual approach (create, package.json in the root, create properties etc)
//* npm init (step by step, enter to skip)
//* npm init -y (everything default)


const _ = require('lodash');

 const items = [1,[2,[3,[4,5]]]];

 const newItems = _.flattenDeep(items);

 console.log(newItems)