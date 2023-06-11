const temp = require("./people");
const lodash = require("lodash");

temp.num += 1;

console.log(temp.player);
console.log(temp.num);
temp.sharif();

const last = lodash.last(temp.player);
console.log(last);

