import { useRef, useState } from "react";
import { Button, Input } from "@heroui/react";
import { ImageUpIcon, UploadIcon } from "lucide-react";

function Inputs() {
  const inputUpload = useRef(null);

  const [input, setInput] = useState();

  const handleSubmit = () => {
    if (!input?.trim()) {
      inputUpload.current.click();
    } else {
      console.log(input);
      setInput("");
    }
  };

  return (
    <form
      className="flex gap-1 bottom-0 w-full absolute mb-10 max-w-5xl left-1/2 -translate-x-1/2 "
      onSubmit={(e) => e.preventDefault()}
    >
      <Input
        label="Enter your message"
        type="text"
        value={input}
        autoComplete="off"
        size="md"
        onChange={(e) => setInput(e.target.value)}
      />
      <input type="file" name="file-upload" ref={inputUpload} hidden />
      <Button
        className="h-auto bg-blue-300"
        onPress={handleSubmit}
        type="submit"
      >
        {!input ? <UploadIcon /> : <ImageUpIcon />}
      </Button>
    </form>
  );
}

export default Inputs;
