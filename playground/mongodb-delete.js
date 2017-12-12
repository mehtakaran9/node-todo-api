//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    return console.log(err + " Unable to Connect to the database");
  }
  console.log("Connected to MongoDB server");
  db.collection('Todos').findOneAndDelete({text: "Slap Tanmay"}).then((result) => {
    console.log(result);
  },(err) => {
    console.log(err);
  });


});
