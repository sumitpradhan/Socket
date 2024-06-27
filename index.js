
//intitalize express server
const express = require('express')
const {createServer}= require('node:http') //for socke Io we need http
const {join}=require('path')
const{Server}=require('socket.io')//Socket


const app =express();
const port =9000;
const server = createServer(app);
//Socket
const io = new Server(server)
//Check if connection is made to IO. Socket here is the client. To send messgae to all clients includeing the sender useIO.emit or else use Broadcast
io.on('connection',(socket)=>{
    console.log('A user connected');
    socket.on('chat-msg', (msg) => {
        socket.broadcast.emit('message',msg);
      });
})
//


//Send a basic Html
app.get("/",(req,resp)=>{
    resp.sendFile(join(__dirname,'index.html'))
})
server.listen(port,()=>{
    console.log("Listening on port 9000!!!")
});