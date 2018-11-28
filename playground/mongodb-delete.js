const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {

  if(err) {
    return console.log('Couldnt connect to MongoDb server');
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');
  db.collection('Users').deleteMany({name: 'Sailaja Vedula'});
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5bfe65cfc8e60fa6d95792b2')
  }).then((result) => {
    console.log(JSON.stringify(result,undefined,2))

  });
  //client.close();
});
