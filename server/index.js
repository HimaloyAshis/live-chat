const express = require('express')
const app = express()
const cors = require('cors')
const http = require('http')
const { Server } = require('socket.io')


app.use(cors())
const server = http.createServer(app)

const io = new Server(server, {
    cors:{
        origin:"http://localhost:3000",
        methods:['GET', 'POST']
    }
})

io.on('connection', (socket)=>{
    console.log(` user connected ${socket.id}`)

    socket.on('disconnection', ()=>{
        console.log("user disconnect", socket.id)
    })
})

server.listen(3001, ()=>{
    console.log('server running')
})