const express = require('express');
const fs = require('fs');
const path = require('path');

const login = express.Router();


// TEST #1
/*
let rawdata = fs.readFileSync(path.resolve(__dirname, '../config/dbLocal.json'));
let dbLocal = JSON.parse(rawdata);
*/


// ##### Route : Login #####
login
  .route('/')
  .get((req, res) => {
    res.send(`Welcome your are connected at LOGIN with ip : ${req.ip}`)

    // TEST #1
    /*
    res.send(`${dbLocal}`)
    console.log(dbLocal)
    */
  })
  .post((req, res) => {
    let username = req.body.username;
    res.send({ user: username, logged: true });
  })
  .put((req, res) => {
    res.send("Sorry we don't post requests yet.")
  })
  .delete((req, res) => {
    res.send("Sorry we don't post requests yet.")
  })

module.exports = { login };
