var express = require('express');
var app = express();

//heroku
//如果沒有heroku的PORT就先設定為3000
var PORT = process.env.PORT || 3000;

var todos = [{
    id: 1,
    description: 'Meet mom for lunch',
    completed: false
}, {
    id: 2,
    description: 'Go to market',
    completed: false
}, {
    id: 3,
    description: 'watch TV',
    completed: true
}];


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



app.listen(PORT, function () {
    console.log('Express listening on port:' + PORT + '!');
});
