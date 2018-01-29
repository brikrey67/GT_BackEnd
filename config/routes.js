var express = require("express");
var router = express.Router();
// Parses information from POST
var bodyParser = require("body-parser");
// Used to manipulate POST methods
var methodOverride = require("method-override");

var todoController = require("../controllers/todo");

// TODO ROUTES ******************************
router.route("/todo").get(todoController.todoGetAll);
// list all todos

router.route("/todo/:id").get(todoController.todoGetOne);
// show selected todo detail

router.route("/todo").post(todoController.todoPost);
// add new todo

router.route("/todo/:id").delete(todoController.todoDelete);
// delete selected todo

router.route("/todo/:id").put(todoController.todoPut);

module.exports = router;
