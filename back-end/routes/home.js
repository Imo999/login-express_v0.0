const express = require('express')

const home = express.Router()

// ##### Route : Home #####
home
  .route('/')
  .get((req, res) => {
    res.send(`Welcome your are connected at HOME with ip : ${req.ip}`)
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

module.exports = { home };


