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
});

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
