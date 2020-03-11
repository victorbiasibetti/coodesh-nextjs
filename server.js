const { createServer } = require('http')
const next = require('next')
const routes = require('./routes')
const cors = require('micro-cors')()


const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  createServer(cors(handler)).listen(9045)
})