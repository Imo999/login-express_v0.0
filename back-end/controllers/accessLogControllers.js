const fsPromises = require('fs/promises')


// ##### Manage LOG pour les requetes d'accès #####
const LOG_FILE = './logs/access-log.txt'

// timer middleware
const timerAccess = (req, res, next) => {
  const date = new Date()
  req.requestDate = date.toUTCString()
  next()
}

const loggerAccess = async (req) => {
  try {
    const date = new Date()
    const log = `${date.toUTCString()} ${req.method} "${req.originalUrl
      }" from ${req.ip} ${req.headers['user-agent']}\n`
    await fsPromises.appendFile(LOG_FILE, log, 'utf-8')
  } catch (e) {
    console.error(`Error: can't write in ${LOG_FILE}`)
  }
}

const showerAccess = async (req) => {
  const date = new Date()
  const log = `${date.toUTCString()} ${req.method} "${req.originalUrl}" from ${req.ip
    } ${req.headers['user-agent']}`
  console.log(log)
}

const cb_loggerAccess = async (req, res, next) => {
  await loggerAccess(req)
  next()
}
const cb_showerAccess = async (req, res, next) => {
  await showerAccess(req)
  next()
}

module.exports = { cb_showerAccess, cb_loggerAccess, timerAccess };
