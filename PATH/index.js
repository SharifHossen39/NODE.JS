const { log } = require("console");
const path = require("path");

const myPath = "C:/Users/BS-1039/Desktop/SHARIF/NODE_JS/PATH/index.js";

const fileName = path.basename(myPath);
console.log(fileName);

const dirName = path.dirname(myPath);
console.log(dirName);

const extensionName = path.extname(myPath);
console.log(extensionName);

const parse = path.parse(myPath);
console.log(parse);
console.log(parse.root);
console.log(parse.name);


