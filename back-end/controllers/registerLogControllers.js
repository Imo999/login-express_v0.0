const fsPromises = require('fs/promises')


// ##### Manage LOG pour les registers #####
const LOG_FILE = './logs/register-log.txt'

// timer middleware
const timerRegister = (req, res, next) => {
  const date = new Date()
  req.requestDate = date.toUTCString()
  next()
}

const loggerRegister = async (req) => {
  try {
    const date = new Date()
    const log = `${date.toUTCString()} ${req.method} "${req.originalUrl
      }" from ${req.ip} ${req.headers['user-agent']}\n`
    await fsPromises.appendFile(LOG_FILE, log, 'utf-8')
  } catch (e) {
    console.error(`Error: can't write in ${LOG_FILE}`)
  }
}

const showerRegister = async (req) => {
  const date = new Date()
  const log = `${date.toUTCString()} ${req.method} "${req.originalUrl}" from ${req.ip
    } ${req.headers['user-agent']}`
  console.log(log)
}

const cb_loggerRegister = async (req, res, next) => {
  await loggerRegister(req)
  next()
}
const cb_showerRegister = async (req, res, next) => {
  await showerRegister(req)
  next()
}

module.exports = { cb_showerRegister, cb_loggerRegister, timerRegister };
