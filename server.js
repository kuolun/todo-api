var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());


//heroku
//如果沒有heroku的PORT就先設定為3000
var PORT = process.env.PORT || 3000;



app.get('/', function (req, res) {
    res.send('Todo API Root');
});


//GET /todos
app.get('/todos', function (req, res) {
    res.json(todos);
});

//GET /todos/:id
app.get('/todos/:id', function (req, res) {
    var todoId = parseInt(req.params.id, 10);
    var todoMatched;

    //Iterate of todos array.Find the match
    todos.forEach(function (todo) {
        if (todoId === todo.id) {
            todoMatched = todo;
        }
    });

    if (todoMatched) {
        res.json(todoMatched);
    } else {
        res.status(404).send();
    }
});

//POST /todos
app.post('/todos', function (req, res) {
    var body = req.body;

    //add id field
    body.id = todoNextId++;

    //push body into array
    todos.push(body);


    res.json(body);
});



app.listen(PORT, function () {
    console.log('Express listening on port:' + PORT + '!');
});
