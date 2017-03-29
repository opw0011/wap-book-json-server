var express = require('express')
var app = express()
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)
const SERVER_PORT_NUMBER = 3000;

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(SERVER_PORT_NUMBER, () => {
  console.log('JSON Server is running at port %s', SERVER_PORT_NUMBER)
})

