var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use('/css', express.static(__dirname + '/HomePage/css'));
app.use('/images', express.static(__dirname + '/HomePage/images'));
app.use('/js', express.static(__dirname + '/HomePage/js'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/HomePage/compil.html');
});

app.get('/form', function (req, res) {
    res.sendFile(__dirname + '/HomePage/form.html');
});

app.get('/box', function (req, res) {
    res.sendFile(__dirname + '/HomePage/compile_box.html');
});

app.get('/activite', function (req, res) {
    res.sendFile(__dirname + '/HomePage/compile_activite.html');
});

http.listen(6001, function () {
    console.log('listening on *:6001');
});