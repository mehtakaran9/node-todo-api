//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    return console.log(err + " Unable to Connect to the database");
  }
  console.log("Connected to MongoDB server");
  // db.collection('Todos').insertOne({
  //   text: "Something to do",
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log("Error in inserting the data", err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //
  // })

  // db.collection('Users').insertOne({
  //   name: "  Karan Mehta",
  //   age: 20,
  //   location: "Tamil Nadu"
  // }, (err, result) => {
  //   if (err){
  //     return console.log(err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // })
  db.close();
});
