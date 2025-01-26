"use client";
import { Button, HeroUIProvider } from "@heroui/react";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

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
      <div className="min-h-screen flex items-center justify-center flex-col gap-2">
        <h1 className="text-4xl">{animal}</h1>
        <Button onPress={handleButtonClick}>
          Click me to send event to the server
        </Button>
      </div>
    </HeroUIProvider>
  );
}
