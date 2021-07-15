const express = require('express')

const register = express.Router()

// ##### Route : Register #####
register
  .route('/')
  .get((req, res) => {
    res.send(`Welcome your are connected at REGISTER with ip : ${req.ip} `)
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

module.exports = { register };

