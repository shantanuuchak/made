"use client";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { HeroUIProvider } from "@heroui/react";
import { Chat, Inputs, SignUp } from "@/components";

const server = io(
  "https://humble-chainsaw-pp49xwx749j26w9w-3001.app.github.dev/"
);

export default function Home() {
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
      <div className="min-h-screen max-h-screen max-w-screen mx-auto md:container md:p-20 md:pt-4 p-1">
        <Inputs />
      </div>
    </HeroUIProvider>
  );
}
