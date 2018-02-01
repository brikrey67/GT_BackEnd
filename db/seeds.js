// Because we defined our model in schema.js and
// set its module.exports to be equal to the News model,
// we can reference it like so.
const { Todo, Cat } = require("../models/schema");
const seedTodoData = require("./todoSeeds.json");
const seedCatData = require("./catSeeds.json");

// This clears out the entire candidates collection. We're not
// passing in any parameters, so Mongoose interprets this command
// as delete all documents in that collection!

Todo.remove({})
  .then(() => {
    return Todo.collection.insert(seedTodoData);
  })
  .then(() => {
    process.exit();
  });

Cat.remove({})
  .then(() => {
    return Cat.collection.insert(seedCatData);
  })
  .then(() => {
    process.exit();
  });

// to run, type:
// $ node db/seeds.js
// $ mongo
// $ show dbs
// $ use todos
// db.todos.find()--  OR -- db.cat.find()
