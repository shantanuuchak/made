const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  socket.on("send_message", (message) => {
    socket.broadcast.emit("recieve_message", message)
  });

  socket.on('user_typing', (data) => {
    socket.broadcast.emit("user_typing", data)
  })

  socket.on('new_user', (data) => {
    socket.broadcast.emit('new_user', data)
  })
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
