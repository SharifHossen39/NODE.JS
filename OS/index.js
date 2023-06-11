
const os = require('os');

const platform = os.platform();
console.log(platform);

const type = os.type();
console.log(type);

const homeDirectory = os.homedir();
console.log(homeDirectory);

const totalMemory = os.totalmem();
console.log(totalMemory);

const freeMemory = os.freemem();
console.log(freeMemory);

const hostName = os.hostname();
console.log(hostName);