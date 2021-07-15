const express = require('express');
const app = express();

// process.env.PORT pour la production // 4000 pour le DEV
const PORT = process.env.PORT || 4000;

// DOUTE TODOOOOO 
app.set("view engine", 'react');

// Route vers les pages 
app.get('/', (req, res) => {
  res.render('Home')
});

app.get('/users/register', (req, res) => {
  res.render('Register')
})

app.get('/users/login', (req, res) => {
  res.render('Login')
})

app.get('/users/dashboard', (req, res) => {
  res.render('Dashboard')
})


app.listen(PORT, () => {
  console.log(`Server running onn port ${PORT}`)
});