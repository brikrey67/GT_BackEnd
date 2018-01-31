var express = require('express')
var router = express.Router()
// Parses information from POST
var bodyParser = require('body-parser')
// Used to manipulate POST methods
var methodOverride = require('method-override')

var todoController = require('../controllers/todo')

// var catController = require('./controllers/cat')

// TODO ROUTES ******************************
router.route('/todo').get(todoController.todoGetAll)
// list all todos

router.route('/todo/:id').get(todoController.todoGetOne)
// show selected todo detail

router.route('/todo').post(todoController.todoPost)
// add new todo

router.route('/todo/:id').delete(todoController.todoDelete)
// delete selected todo

router.route('/todo/:id').put(todoController.todoPut)

// CATEGORY ROUTES ******************************
// router.route('/cat').get(catController.catGetAll)
// // list all categories

// router.route('/cat/:id').get(catController.catGetOne)
// // show selected category detail

// router.route('/cat').post(catController.catPost)
// // add new category -- May not need as we will include a selector for user --

// router.route('/cat/:id').delete(catController.catDelete)
// // may not need as our app setup would be best without it

// router.route('/cat/:id').put(catController.catPut)
// // may not need as our app setup would be best without it

module.exports = router
