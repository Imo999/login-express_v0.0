const express = require('express')

const dashboard = express.Router()

// ##### Route : Dashboard #####
dashboard
  .route('/')
  .get((req, res) => {
    res.send(`Welcome your are connected at DASHBOARD with ip : ${req.ip} `)
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

module.exports = { dashboard };

