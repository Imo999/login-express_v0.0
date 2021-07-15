const express = require('express')

const login = express.Router()

// ##### Route : Login #####
login
  .route('/')
  .get((req, res) => {
    res.send(`Welcome your are connected at LOGIN with ip : ${req.ip} `)
  })
  .post((req, res) => {
    res.send("Sorry we don't post requests yet.")
  })
  .put((req, res) => {
    res.send("Sorry we don't post requests yet.")
  })
  .delete((req, res) => {
    res.send("Sorry we don't post requests yet.")
  })

module.exports = { login };
