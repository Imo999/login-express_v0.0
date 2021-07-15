const express = require('express');
const { cb_loggerAccess, timerAccess } = require('./controllers/accessLogControllers');
const { cb_loggerRegister } = require('./controllers/registerLogControllers');
const { cb_loggerLogin } = require('./controllers/loginLogControllers');
const { cb_loggerDashboard } = require('./controllers/dashboardLogControllers');
const { home } = require('./routes/home');
const { register } = require('./routes/Register');
const { login } = require('./routes/login');
const { dashboard } = require('./routes/dashboard');

const app = express();

// ##### Middleware #####
app.use(timerAccess, cb_loggerAccess); // Log sauvegardé -> "access-log.txt"
app.use('/users/register', cb_loggerRegister); // Log sauvegardé -> "register-log.txt"
app.use('/users/login', cb_loggerLogin); // Log sauvegardé -> "login-log.txt"
app.use('/users/dashboard', cb_loggerDashboard); // Log sauvegardé -> "dashboard-log.txt"

// ##### Routing #####
app.use('/', home);
app.use('/users/register', register);
app.use('/users/login', login);
app.use('/users/dashboard', dashboard);

// start the server
const IP = '192.168.1.13' // my local ip on my network
const PORT = 4000

app.listen(PORT, IP, () => {
  console.log(`Server running at http://${IP}:${PORT}`)
})