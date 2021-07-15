const express = require('express');
const app = express();

// process.env.PORT pour la production // 4000 pour le DEV
const PORT = process.env.PORT || 4000;


app.get('/', (req, res) => {
  res.send('Hello')
});


app.listen(PORT, () => {
  console.log(`Server running onn port ${PORT}`)
});