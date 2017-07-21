var express = require('express');
var http = require('http');
var app = express();

app.set('port', 8080);
app.set('views', '.');
app.set('view engine', 'hbs');

var sendJSONResponse = function(res, status, content){
    res.status = status;
    res.send(content);
};

app.get('/', (req, res,next) => {
    res.render('index');
});

var server = http.createServer(app);
server.listen(app.get('port'), function() {
    console.log('API Server listening on ',app.get('port'))
});