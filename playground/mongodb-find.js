const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {

  if(err) {
    return console.log('Couldnt connect to MongoDb server');
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');
  // db.collection('Todos').find({
  //   _id: new ObjectID('5bfe6d2c7907f00de88eddc0')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) => {
  //   console.log('Unable to fetch todos',err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // },(err) => {
  //   console.log('Unable to fetch todos',err);
  // });

  db.collection('Users').find({name: 'Sailaja Vedula'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs,undefined,2));
  },(err) => {
    console.log('Unable to fetch Users',err);
  });
  //client.close();
});
