const express = require('express')
const dbLocal = require('../config/dbLocal')

const register = express.Router()

// ##### Route : Register #####
register
  .route('/')
  .get((req, res) => {
    res.send(`Welcome your are connected at REGISTER with ip : ${req.ip} `)
  })
  .post((req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    dbLocal[username] = password;
    res.send("Registration success !");
  })
  .put((req, res) => {
    res.send("Sorry we don't post requests yet.")
  })
  .delete((req, res) => {
    res.send("Sorry we don't post requests yet.")
  })

module.exports = { register };

