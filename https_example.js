var https = require('https');

var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};

// called by https when the request is made.
var callbackFunction = function(response){
  console.log("In response handler callback method.");

  response.on('data', function(chunk){
    console.log('[ -- CHUNK OF LENGTH ' + chunk.length + ' -- ]');
    console.log(chunk.toString());
  });
};

console.log("I'm about to make the request.");

https.request(options, callbackFunction).end();

console.log("I've made the request.");