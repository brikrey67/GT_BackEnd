const mongoose = require("mongoose");

//We also need to link Mongoose to the Mongo database.

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL);
} else {
  mongoose.connect("mongodb://localhost/todo", {
    useMongoClient: true
  });
}

mongoose.Promise = Promise;

// when this file (connection.js) is required in other files, it will evaluate to
// this connected version of mongoose.

module.exports = mongoose;
