var https = require('https');

var options = {
  host: "www.example.com",
  path: '/'
};

// called by https when the request is made.
var callbackFunction = function(){
  console.log("In response handler callback method.");
};

console.log("I'm about to make the request.");

https.request(options, callbackFunction).end();

console.log("I've made the request.");