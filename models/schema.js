// db/schema.js

const mongoose = require('../db/connection')

// Schema

const TodoSchema = new mongoose.Schema({
  title: String,
  desc: String,
  imp: String,
  cat: String,
  dueDate: String,
  status: String
})

const Todo = mongoose.model('Todo', TodoSchema)

const CatSchema = new mongoose.Schema({
  catTitle: {
    type: String,
    required: 'Category can not be blank'
  },

  completed: {
    type: Boolean,
    default: false
  },

  createdDate: {
    type: Date,
    default: Date.now
  }
})

const Cat = mongoose.model('Cat', CatSchema)

// When this file (schema.js) is required in other files, it will
// evaluate to the Candidate model defined here through which we will
// be able to query the candidates collection in our Mongo database.

// module.exports = Bucket;

module.exports = {
  Todo,
  Cat
}
