import { FormEvent, useRef, useState } from "react";
import { Button, Input } from "@heroui/react";
import { SendHorizonalIcon, UploadIcon } from "lucide-react";

function Inputs() {
  const inputUpload = useRef(null);
  const [input, setInput] = useState<string>();

  const handleSubmit = () => {
    if(!input?.trim()) {
      inputUpload.current!.click()
    } else {
      console.log(input);
      setInput('')
    }
  }

  return (
    <form className="flex gap-1" onSubmit={(e: FormEvent) => e.preventDefault()}>
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
      <input type="file" name="file-upload" ref={inputUpload} hidden />
      <Button className="h-auto bg-blue-300" onClick={handleSubmit} type="submit">
        {!input ? <UploadIcon /> : <SendHorizonalIcon />}
      </Button>
    </form>
  );
}

export default Inputs;
