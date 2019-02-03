/*global angular*/
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
// var nodemailer = require('nodemailer');
var app = express();
var cors = require('cors');
var router = express.Router();
var serveStatic = require('serve-static');
// var transporter = nodemailer.createTransport();
// var sgTransport = require('nodemailer-sendgrid-transport');
// var Mailchimp = require('mailchimp-api-v3')
// var mailchimpApi = new Mailchimp('');
// var mailer = nodemailer.createTransport(sgTransport(options));



app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:8081'
}));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(serveStatic(require("path").join(__dirname, "/views"))); // Serves everything in the views directory
// Example: url.com/css/style.css serves views/css/style.css


// app.post('/postEmail', function(req, res) {

//     var data = req.body;
//     //console.log('req: ', req.body);

//     var email = {
//         from: data.email, // sender address
//         to: '', // list of receivers
//         subject: 'From Contact form in Taqueria Chavez: ' + data.subject, // Subject line
//         text: data.text, // plaintext body
//         html: data.text // html body
//     };

//     mailer.sendMail(email, function(err, res) {
//         if (err) {
//             console.log(err)
//         }
//         console.log(res);
//     });
//   res.json(data);
// });


var server = app.listen(8081, function() {
    console.log("Running")
});

var gracefulShutdown = function() {
    console.log('Shutting down');
    server.close(function() {
        console.log('Closed out remaining connections');
    });
}
process.on('SIGTERM', gracefulShutdown); // Server is killed
process.on('SIGINT', gracefulShutdown); // Ctrl-C is pressed in the terminal
