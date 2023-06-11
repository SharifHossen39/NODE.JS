// const url = require('url');

// const addr = 'http://localhost:8080/default.htm?year=2017&month=february';

// const parsed = url.parse(addr, true);

// const host = parsed.host;
// const pathname = parsed.pathname;
// const search = parsed.search;

// console.log(`host: ${host}`);
// console.log(`pathname: ${pathname}`);
// console.log(`search: ${search}`);

// const data = parsed.query;

// console.log(data.year);
// console.log(data.month);

// ----------------------------------------------------------------------------

// const http = require("http");
// const url = require("url");

// http
//   .createServer((req, res) => {
//     const addr = req.url;
//     console.log(addr);
//     const parsed = url.parse(addr, true);

//     const pathname = parsed.pathname;
//     const search = parsed.search;

//     res.write(pathname);
//     res.write(search);

//     const data = parsed.query;

//     res.write(data.year);
//     res.write(data.month);

//     res.end();
//   })
//   .listen(8080, () => {
//     console.log("server run on port 8080");
//   });

//   -------------------------------------------------------------------

// const http = require("http");
// const url = require("url");
// const fs = require("fs");

// http
//   .createServer((req, res) => {
//     const parsed = url.parse(req.url, true);
//     const fileName = './URL' + parsed.pathname;
//     console.log(fileName);

//     fs.readFile(fileName, (err, data) => {
//       if (err) {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         return res.end("404 Not Found");
//       }
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(8080, () => {
//     console.log("server listening on port 8080");
//   });
//   ---------------------------------------------------------------------------------------------

// const http = require("http");
// const url = require("url");
// const fs = require("fs");

// http
//   .createServer((req, res) => {
//     const parsed = url.parse(req.url, true);
//     const fileName = "./URL" + parsed.pathname;
//     console.log(fileName);

//     const streamData = fs.createReadStream(fileName);

//     streamData.on("data", (chunk) => {
//       res.write(chunk.toString());
//       res.end();
//     });
//   })
//   .listen(8080, () => {
//     console.log("server listening on port 8080");
//   });
// -------------------------------------------------------------------------------------

const lodash = require('lodash');

const arr = [1,2,3,4,5];

console.log(lodash.last(arr));
