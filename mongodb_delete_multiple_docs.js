var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useNewUrlParser: true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  query = {name: 'William'}
  dbo.collection("customers").find(query, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result.length);
    db.close();
  });
    dbo.collection("customers").deleteMany(query, function(err, result) {
    if (err) throw err;
    console.log("Record deleted");
    db.close();
  });
   dbo.collection("customers").find(query, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result.length);
    db.close();
  });
});
