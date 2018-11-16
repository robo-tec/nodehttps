var https = require('https');
var fs = require('fs');
var express = require('express');

// https://stackoverflow.com/questions/21397809/create-a-trusted-self-signed-ssl-cert-for-localhost-for-use-with-express-node
// https://www.akadia.com/services/ssh_test_certificate.html

// http://gnuwin32.sourceforge.net/packages/openssl.htm
// C:\Users\robo\AppData\Local\VirtualStore\Program Files (x86)\GnuWin32\bin

// run as admin
//openssl genrsa -out server.key 2048
//openssl req -new -x509 -config "C:\Program Files (x86)\GnuWin32\share\openssl.cnf" -key server.key -out server.crt -days 109

var options = {
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt'),
    requestCert: false,
    rejectUnauthorized: false
};


var app = express();

app.get('/', (req, res) => {
    console.log("new reuqest on /");
    res.send('Hello World!');
})

var server = https.createServer(options, app).listen(3000, function(){
    console.log("server started at port 3000");
});