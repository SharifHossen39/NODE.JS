/*

title: uptime monitoring Application
Description: A RESTful API to monitor up or down time of user defined links.

*/

// dependencies
const http = require('http');

// app object = module scaffolding
const app = {};

//configuration
app.config = {
    port: 3000
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleResReq);
    server.listen(app.config.port, ()=>{
        console.log(`listneing to port number: ${app.config.port}`);
    });
}

//handle request and response
app.handleResReq = (req, res) => {
    res.end('hello World');
}

//start the server
app.createServer();