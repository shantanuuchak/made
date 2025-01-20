import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

socket.on("connect", () => {
  console.log("Connected to server");
});

export default function Home() {
  return <h1>Hello from Next.js</h1>;
}
