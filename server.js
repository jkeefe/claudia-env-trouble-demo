var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var answerbot = require('./answerbot');
var app = express();

module.exports = function(){

    // this is needed to read the body!
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: true
    }));

    // this is needed to read cookies!
    app.use(cookieParser());

    var port = 443;
    app.set('port', port);

    // Require botkit bot handler (goes after port)
    // Handler makes route: /twilio/receive
    answerbot(app);

};
