const fsPromises = require('fs/promises')


// ##### Manage LOG pour les Dashboard #####
const LOG_FILE = './logs/dashboard-log.txt'

// timer middleware
const timerDashboard = (req, res, next) => {
  const date = new Date()
  req.requestDate = date.toUTCString()
  next()
}

const loggerDashboard = async (req) => {
  try {
    const date = new Date()
    const log = `${date.toUTCString()} ${req.method} "${req.originalUrl
      }" from ${req.ip} ${req.headers['user-agent']}\n`
    await fsPromises.appendFile(LOG_FILE, log, 'utf-8')
  } catch (e) {
    console.error(`Error: can't write in ${LOG_FILE}`)
  }
}

const showerDashboard = async (req) => {
  const date = new Date()
  const log = `${date.toUTCString()} ${req.method} "${req.originalUrl}" from ${req.ip
    } ${req.headers['user-agent']}`
  console.log(log)
}

const cb_loggerDashboard = async (req, res, next) => {
  await loggerDashboard(req)
  next()
}
const cb_showerDashboard = async (req, res, next) => {
  await showerDashboard(req)
  next()
}

module.exports = { cb_showerDashboard, cb_loggerDashboard, timerDashboard };
