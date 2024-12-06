var http = require("http"),
  httpProxy = require("http-proxy");
fs = require("node:fs");
var proxy = httpProxy.createProxyServer({});

var server = http.createServer(function (req, res) {
  proxy.web(req, res, { target: "http://localhost:3000" });
});

console.log("http://localhost:5050");
server.listen(5050);
