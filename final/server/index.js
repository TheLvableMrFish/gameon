const express = require('express')
const PORT = process.env.PORT || 8000

const cors = require('cors')
const helmet = require('helmet')
const router = require('./routes/router')

const server = express()
server.use(helmet())
server.use(cors())

server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use('/', router)

server.listen(PORT, ()=>{
    return console.log(`Server is running on PORT: ${PORT}`)
})