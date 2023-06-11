const http = require("http");
const url = require('url');

http
  .createServer((req, res) => {
    // res.write("Brain Station 23");
    res.write(req.url);
    var q = url.parse(req.url, true).query;
    res.end(q.a);
  })
  .listen(3000, () => {
    console.log("listening to port number 8080");
  });
// ----------------------------------------------------------------

// const http = require("http");

// const app = {};

// app.config = {
//   port: 3000,
// };

// app.createServer = () => {
//   const server = http.createServer(app.handleReqRes);
//   server.listen(app.config.port, () => {
//     console.log(`server created on port ${app.config.port}`);
//   });
// };

// app.handleReqRes = (req, res) => {
//   res.write(req.url);
//   console.log("Hello");
//   res.end("Brain Station 23");
// };

// app.createServer();
