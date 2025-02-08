import http from "http";
import express from "express";
import { Server } from "socket.io";


const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Socket.io service is active!")
})

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("A new user connected", socket.id);

  socket.on("message", (message) => {
    console.log("recieved new message");
    socket.broadcast.emit("recieve_message", message)
  });

  socket.on('typing', (data) => {
    socket.broadcast.emit("user_typing", data)
  })

  socket.on('user', (data) => {
    socket.broadcast.emit('new_user', data)
  })
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
