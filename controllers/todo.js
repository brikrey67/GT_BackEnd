const express = require("express");
var passport = require("passport");

const { Todo } = require("../models/schema");

function todoGetAll(request, response) {
  Todo.find({})
    .sort("order")
    .then(todos => {
      response.status(200).json(todos);
    })
    .catch(err => {
      response.status(500).send({ error: "Nope!" });
    });
}

function todoGetOne(request, response) {
  let id = request.params.id;
  Todo.findOne({
    _id: id
  })
    .then(todo => {
      response.status(200).json(todo);
    })
    .catch(err => {
      response.status(500).send({ error: "Nope!" });
    });
}

function todoPost(request, response) {
  Todo.create(request.body)
    .then(todo => {
      response.status(200).json(todo);
    })
    .catch(err => {
      console.log(err);
    });
}

function todoDelete(request, response) {
  Todo.findOneAndRemove({ _id: request.params.id })
    .then(todo => {
      response.status(200).json(todo);
    })
    .catch(err => {
      response.status(500).send({ error: "Nope!" });
    });
}

function todoPut(request, response) {
  Todo.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true
  })
    .then(todo => {
      response.status(200).json(todo);
    })
    .catch(err => {
      response.status(500).send({ error: "Nope!" });
    });
}

module.exports = {
  todoGetAll,
  todoGetOne,
  todoPost,
  todoDelete,
  todoPut
};
