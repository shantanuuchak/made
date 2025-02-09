"use client";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { HeroUIProvider } from "@heroui/react";
import { Chat, Inputs, SignUp } from "@/components";

const socket = io("http://madeapp.koyeb.app");

export default function Home() {
  const [user, setUser] = useState("");
  const [messages, setMessages] = useState([]);
  const [newUsers, setNewUser] = useState([]);

  useEffect(() => {
    socket.on("recieve_message", (data) => {
      setMessages((prevState) => [...prevState, data]);
    });
  }, []);

  useEffect(() => {
    socket.on("new_user", (data) => {
      setNewUser((prevState) => [...prevState, data]);
    });
  }, []);

  return (
    <HeroUIProvider>
      {user ? (
        <div className="min-h-screen max-h-screen max-w-screen mx-auto md:p-20 md:pt-2 p-1 relative">
          <Chat messages={messages} socket={socket} newUsers={newUsers} />
          <Inputs user={user} socket={socket} setMessages={setMessages} />
        </div>
      ) : (
        <SignUp onSubmit={setUser} socket={socket} />
      )}
    </HeroUIProvider>
  );
}
