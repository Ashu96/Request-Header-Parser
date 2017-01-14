/* 
* Request header parser microservice
* server.js
* Ashutosh
* 1/13/2017
*/

var http = require('http');

http.createServer( (req, res) => {
    // preparing the JSON reponse
    var JSON_response = {
        "IP address" : req.headers['x-forwarded-for'],
        "Language" : req.headers['accept-language'].split(',')[0],
        "Software" : req.headers['user-agent'].split(' ').slice(1,6).join(' ').replace('(','').replace(')','')
    }; 
    
    res.end(JSON.stringify(JSON_response));
}).listen(8080);