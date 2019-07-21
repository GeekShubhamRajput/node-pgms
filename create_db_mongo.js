var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/mydb1";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db){
 if (err) throw err;
 console.log("Database created");
 db.close();
});
