"use client";
import { io } from "socket.io-client";
import { useState } from "react";
import { HeroUIProvider } from "@heroui/react";
import { Chat, Inputs, SignUp } from "@/components";

const socket = io("https://localhost:8000");

export default function Home() {
  const [user, setUser] = useState("");
  const [messages, setMessages] = useState([]);

  return (
    <HeroUIProvider>
      {user ?
        <div className="min-h-screen max-h-screen max-w-screen mx-auto md:container md:p-20 md:pt-4 p-1 relative">
          <Chat messages={messages} socket={socket} />
          <Inputs user={user} socket={socket} setMessages={setMessages} />
        </div>
        :
        <SignUp onSubmit={setUser} />
      }
    </HeroUIProvider>
  );
}
