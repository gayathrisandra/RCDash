var express = require('express')
var cors = require('cors')
var app = express()
var http = require("http");
http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
  /*  var whitelist = ['http://example1.com', 'http://example2.com']
   var corsOptionsDelegate = function (req, callback) {
     var corsOptions;
     if (whitelist.indexOf(req.header('Origin')) !== -1) {
       corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
     }else{
       corsOptions = { origin: false } // disable CORS for this request
     }
     callback(null, corsOptions) // callback expects two parameters: error and options
   }
   
   app.get('/products/:id', cors(corsOptionsDelegate), function (req, res, next) {
     res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
   })
   response.writeHead(200, {'Content-Type': 'text/plain'}); */
   app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.post('/*', function(req, res, next) {
    // Handle the post for this route
    //alert("insert");
    

    res.send(req.body)

   });
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(4747);

// Console will print the message
console.log('Server running at http://127.0.0.1:4747/');