const port = process.env.PORT || 3000

const express = require('express')
const bodyParser = require('body-parser')
const server = express()

server.use(bodyParser.json())

const AllowCors = require('./config/cors')
const TestRoutes = require('./routes/TestRoutes')

server.use(AllowCors.cors)
server.use('/test', TestRoutes)


server.listen(port, () => {
    console.log(` -=-=-=-=- Running on port 3000 -=-=-=-=-`)
})