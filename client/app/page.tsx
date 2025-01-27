"use client";
import { io } from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import { HeroUIProvider } from "@heroui/react";
import { Chat, Inputs, SignUp } from "@/components";

const server = io(
  "https://madeapp.koyeb.app/"
);

export default function Home() {
  const [user, setUser] = useState("");
  const [animal, setAnimal] = useState("Click on button first");

  useEffect(() => {
    server.on("server_event", (data) => {
      setAnimal(data);
    });
  }, []);

  const handleButtonClick = () => {
    server.emit("btn_clicked", "Yes i am from client");
  };

  return (
    <HeroUIProvider>
      {user ?
        <div className="min-h-screen max-h-screen max-w-screen mx-auto md:container md:p-20 md:pt-4 p-1 relative">
          <Chat />
          <Inputs />
        </div>
        :
        <SignUp onSubmit={setUser} />
      }
    </HeroUIProvider>
  );
}
