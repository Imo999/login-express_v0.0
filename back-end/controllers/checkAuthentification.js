const dbLocal = require('../config/dbLocal');

// Middleware pour check si le username est correct
const checkerUser = (req, res, next) => {
  try {
    const username = req.body.username;
    if (dbLocal.hasOwnProperty(username)) {
      next();
    } else {
      res.send("Username or Password invalid.");
    }
  } catch (e) {
    console.error(e)
  }
};

// Middleware pour check si le password est correct
const checkerPassword = (req, res, next) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    if (dbLocal[username] === password) {
      next();
    } else {
      res.send("Username or password invalid.");
    }
  } catch (e) {
    console.error(e)
  }
};

module.exports = { checkerUser, checkerPassword };