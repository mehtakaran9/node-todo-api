const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos',(req, res) => {
  var todo = new Todo({
    text: req.body.text,
  });
  todo.save().then((doc) => {
    console.log("ToDo Saved: ", doc);
    res.send(doc);
  },(e) => {
    console.log("Unable to save todo",e);
    res.status(400).send(e);
  })
});

app.get('/todos',(req, res) => {
  Todo.find().then((doc) => {
    console.log(doc);
    res.send(doc);
  },(e) => {
    res.send(e);
  });
})

if(!module.parent){
  app.listen(3000, () => {
    console.log("Started on port 3000")
  });

}

module.exports = {app};
