var http = require("http"),
  httpProxy = require("http-proxy");
fs = require("node:fs");

//
// Create a proxy server with custom application logic
//
var proxy = httpProxy.createProxyServer({});

//
// Create your custom server and just call `proxy.web()` to proxy
// a web request to the target passed in the options
// also you can use `proxy.ws()` to proxy a websockets request
//
var server = http.createServer(function (req, res) {
  // You can define here your custom logic to handle the request
  // and then proxy the request.
  //   proxy.web(req, res, { target: "http://127.0.0.1:3000" });
//   proxy.web(req, res, { 
//     target: "http://www.baidu.com",
//   });
    proxy.web(req, res, { target: "http://artdraw.cafa.edu.cn/" });
});

console.log("listening on port 5050");
server.listen(5050);

// ssl: {
//   key: fs.readFileSync("valid-ssl-key.pem", "utf8"),
//   cert: fs.readFileSync("valid-ssl-cert.pem", "utf8"),
// },
