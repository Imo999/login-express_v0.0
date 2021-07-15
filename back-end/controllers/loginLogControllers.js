const fsPromises = require('fs/promises')


// ##### Manage LOG pour les logins #####
const LOG_FILE = './logs/login-log.txt'

// timer middleware
const timerLogin = (req, res, next) => {
  const date = new Date()
  req.requestDate = date.toUTCString()
  next()
}

const loggerLogin = async (req) => {
  try {
    const date = new Date()
    const log = `${date.toUTCString()} ${req.method} "${req.originalUrl
      }" from ${req.ip} ${req.headers['user-agent']}\n`
    await fsPromises.appendFile(LOG_FILE, log, 'utf-8')
  } catch (e) {
    console.error(`Error: can't write in ${LOG_FILE}`)
  }
}

const showerLogin = async (req) => {
  const date = new Date()
  const log = `${date.toUTCString()} ${req.method} "${req.originalUrl}" from ${req.ip
    } ${req.headers['user-agent']}`
  console.log(log)
}

const cb_loggerLogin = async (req, res, next) => {
  await loggerLogin(req)
  next()
}
const cb_showerLogin = async (req, res, next) => {
  await showerLogin(req)
  next()
}

module.exports = { cb_showerLogin, cb_loggerLogin, timerLogin };
