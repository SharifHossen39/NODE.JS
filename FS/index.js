// const fs = require("fs");

// fs.writeFileSync("./myFile.txt", "Brain Staion 421");
// fs.appendFileSync("./myFile.txt", ", Mohakhali 5, Dhaka, Bangladesh");

// fs.readFile("./myFile.txt", (err, data)=>{
//     console.log(data.toString());
// });

// fs.dele

// console.log("Hello");

// ...................................................................................

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('./demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
