var express = require('express');
var config = require('config');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//setup express session
app.set('trust proxy',1);
app.use(session({
    secret : config.get('secret_key'),
    resave : false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

//set view
app.set('views', __dirname + '/apps/Views');
app.set('view engine', 'ejs');

//static folder
app.use('/static',express.static(__dirname + '/public'));

//path to controller
var controller = require(__dirname + "/apps/Controllers");
app.use(controller);

//config server
var host = config.get('server.host');
var port = config.get('server.port');
app.listen(port,host,function () {
    console.log('server is running on port',port);
});