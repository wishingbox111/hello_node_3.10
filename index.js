
# used code from 3.4 : https://github.com/wishingbox111/first-node-app-enchen/blob/main/node.js

// before rum
//npm install express

// to run 
// npm start

'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const OS = require('os');
const ENV = 'DEV';


// App
const app = express();
app.get('/', (req, res) => {
  res.statusCode = 200;
  const msg = 'Hello from Node!';
  res.send(msg);
});

app.get('/test', (req, res) => {
  res.statusCode = 200;
  const msg = 'Hello from /test Node!';
  res.send(msg);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

//this code is added on top of the 3.4 files
module.exports = app;





//////below code can also run and replace the above but it is not defined as "express"


//const http = require("http")
//const hostname = "localhost"
//const port = 3700;
//const server = http.createServer((req, res) => {
// console.log(req.headers);
// res.statusCode = 200;
// res.end("<html><body><h1>Hello, World!</h1></body></html")
//})
//"scripts" (
//    "start"= "node node.js",
//    "test"= "echo \"Error: no test specified\" && exit 1"
//);
//server.listen(port, hostname);


//still has problem with npm start. But npm install express works. Tired delete folder and clone again but didn't work toooo.



// BELOW FILES ARE NOT WORKING WITH NPM INSTALL EXPRESS

//// before rum
////npm install express

//// to run 
//// npm start

////'use strict';

//const express = require('express');

//// Constants
//const PORT = 8080;
//const HOST = '0.0.0.0';
//const OS = require('os');
//const ENV = 'DEV';


//// App
//const app = express();
//app.get('/', (req, res) => {
//  res.statusCode = 200;
//  const msg = 'Hello from Node!';
//  res.send(msg);
//});

//app.get('/test', (req, res) => {
//  res.statusCode = 200;
//  const msg = 'Hello from /test Node!';
//  res.send(msg);
//});

//app.listen(PORT, HOST);
//console.log(`Running on http://${HOST}:${PORT}`);