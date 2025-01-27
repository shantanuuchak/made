import { Avatar, Card, CardBody } from "@heroui/react";

function Chat() {
  return <div className="grid gap-2">
    <Message>Make beautiful websites regardless of your design experience.</Message>
    <Message self>Make beautiful websites regardless of your design experience.</Message>
    <Message self>I think I've already told ya!</Message>
    <Message self>Please go and find yourself a job.</Message>
    <Message self>Please go and find yourself a job.</Message>
    <Message self>Please go and find yourself a job.</Message>
    <Message>Whatever you tell me I'm not into such business.</Message>
  </div>;
}

interface MessageProps {
  self?: boolean;
  children: React.ReactNode
}

function Message({ children, self }: MessageProps) {
  return <Card className={`w-fit bg-transparent ${self && "bg-blue-100 ml-auto"}`} >
    <CardBody className="flex items-center flex-row gap-2">
      {!self && <Avatar name="June Rishab" className="inline-block" />} <p>{children}</p>
    </CardBody>
  </Card >
}

export default Chat;
