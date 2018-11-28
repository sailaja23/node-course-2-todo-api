const {MongoClient,ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);
// var user = {name: 'sailaja', age: 41};
//
// var {name} = user;
// console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {

  if(err) {
    return console.log('Couldnt connect to MongoDb server');
  }
  console.log('Connected to MongoDB Server');

  const db = client.db('TodoApp');
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err,result) => {
  //   if(err) {
  //     return console.log('Unable to insert Todo');
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // })

  db.collection('Users').insertOne({
    name: 'Sailaja Vedula',
    age: 41,
    location: 'Mumbai'
  }, (err,result) => {
    if(err) {
      return console.log('Unable to insert Users');
    }
    console.log(JSON.stringify(result.ops,undefined,2));
    console.log(result.ops[0]._id.getTimestamp());
  })
  client.close();
});
