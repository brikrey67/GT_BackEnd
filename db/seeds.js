// Because we defined our model in schema.js and
// set its module.exports to be equal to the News model,
// we can reference it like so.
const { Todo, Cat } = require('../models/schema')
const seedTodoData = require('./todoSeeds.json')
const seedCatData = require('./catSeeds.json')

// This clears out the entire candidates collection. We're not
// passing in any parameters, so Mongoose interprets this command
// as delete all documents in that collection!

// Create a collection using the JSON contained in our seed file
// Note that this is ideal for bulk insertion but skips schema
// validation. In our controller, where we will want validation,
// we will use Candidate.create().

Todo.remove({})
  .then(() => {
    return Todo.collection.insert(seedTodoData)
  })
  .then(() => {
    process.exit()
  })

Cat.remove({})
  .then(() => {
    return Cat.collection.insert(seedCatData)
  })
  .then(() => {
    process.exit()
  })

// to run, type:
// $ node db/seeds.js
// $ mongo
// use whenpresident
// db.candidate.find().pretty()
