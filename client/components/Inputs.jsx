import { useRef, useState } from "react";
import { Button, Input } from "@heroui/react";
import { ImageUpIcon, UploadIcon } from "lucide-react";

function Inputs({ user, socket, setMessages }) {
  const inputUpload = useRef(null);

  const [input, setInput] = useState("");

  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64 = reader.result; // Base64 string

        const msg = {
          type: "image",
          user: {
            id: socket.id,
            name: user,
          },
          content: base64,
        };

        socket.emit("message", msg);
        setMessages((prevState) => [...prevState, msg]);
      };

      reader.readAsDataURL(file); // Converts file to Base64
    }
  };

  const handleSubmit = () => {
    if (!input.trim()) {
      inputUpload.current.click();
    } else {
      const msg = {
        type: "text",
        user: {
          id: socket.id,
          name: user,
        },
        content: input,
      };

      setMessages((prev) => [...prev, msg]);
      socket.emit("message", msg);

      // Empty input
      setInput("");
    }
  };

  return (
    <form
      className="flex gap-0 sm:gap-2 bottom-0 w-full absolute mb-0 sm:mb-5 max-w-5xl left-1/2 -translate-x-1/2 "
      onSubmit={(e) => e.preventDefault()}
    >
      <Input
        label="Enter your message..."
        type="text"
        value={input}
        autoComplete="off"
        size="md"
        radius="none"
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Hidden type upload */}
      <input
        type="file"
        name="file"
        accept="image/png, image/gif, image/jpeg"
        ref={inputUpload}
        onChange={handleUpload}
        hidden
      />

      <Button
        className="h-auto bg-blue-300 rounded-none sm:rounded-lg"
        onPress={handleSubmit}
        type="submit"
      >
        {!input ? <UploadIcon /> : <ImageUpIcon />}
      </Button>
    </form>
  );
}

export default Inputs;
