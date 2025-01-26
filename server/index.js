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

const getAnimal = () => {
  const animals = ["🐎", "🦁", "🫎", "🐕", "🐈", "🐇"];
  return animals[Math.floor(Math.random() * animals.length)];
};

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  socket.on("btn_clicked", (data) => {
    console.log(data);

    socket.emit("server_event", getAnimal());
  });
});

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
