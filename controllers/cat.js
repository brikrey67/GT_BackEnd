const express = require('express')
var passport = require('passport')

const { Todo, Cat } = require('../models/schema')

function catGetAll (request, response) {
  Cat.find({})
    .sort('order')
    .then(cats => {
      response.status(200).json(cats)
    })
    .catch(err => {
      response.status(500).send({ error: 'Nope!' })
    })
}

function catGetOne (request, response) {
  let id = request.params.id
  Cat.findOne({
    _id: id
  })
    .then(cat => {
      response.status(200).json(cat)
    })
    .catch(err => {
      response.status(500).send({ error: 'Nope!' })
    })
}

function catPost (request, response) {
  Cat.create(request.body)
    .then(cat => {
      response.status(200).json(cat)
    })
    .catch(err => {
      console.log(err)
    })
}

function catDelete (request, response) {
  Cat.findOneAndRemove({ _id: request.params.id })
    .then(cat => {
      response.status(200).json(cat)
    })
    .catch(err => {
      response.status(500).send({ error: 'Nope!' })
    })
}

function catPut (request, response) {
  Cat.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true
  })
    .then(cat => {
      response.status(200).json(cat)
    })
    .catch(err => {
      response.status(500).send({ error: 'Nope!' })
    })
}

module.exports = {
  catGetAll,
  catGetOne,
  catPost,
  catDelete,
  catPut
}
