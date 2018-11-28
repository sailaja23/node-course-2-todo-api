const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {

  if(err) {
    return console.log('Couldnt connect to MongoDb server');
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bfe6862e0969aa813d640df')
  },{
    $set: {name: 'Sailaja'},
    $inc:{age:-1}
  },{returnOriginal:false}).then((result) => {
    console.log(JSON.stringify(result,undefined,2))

  });
  //client.close();
});
