var express = require('express');
var app = express();

//heroku
//如果沒有heroku的PORT就先設定為3000
var PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Todo API Root');
});

app.listen(PORT, function () {
    console.log('Express listening on port:' + PORT + '!');
});
