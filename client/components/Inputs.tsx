import { useState } from "react";
import { Button, Input } from "@heroui/react";
import { SendHorizonalIcon, UploadIcon } from "lucide-react";

function Inputs() {
  const [input, setInput] = useState<string>();

  return (
    <div className="flex gap-1">
      <Input
        label="Enter your message"
        type="text"
        value={input}
        autoComplete="off"
        size="md"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
      />
      <Button className="h-auto bg-blue-300">
        {!input ? <UploadIcon /> : <SendHorizonalIcon />}
      </Button>
    </div>
  );
}

export default Inputs;
