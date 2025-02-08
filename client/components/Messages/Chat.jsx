import { Avatar, Card, CardBody } from "@heroui/react";
import NewUser from "./NewUser";

function Chat({ messages, socket }) {
  return (
    <div className="grid gap-2">
      <Message>
        Make beautiful websites regardless of your design experience.
      </Message>
      <Message self>
        Make beautiful websites regardless of your design experience.
      </Message>
      <Message self>Please go and find yourself a job.</Message>
      <Message>Whatever you tell me I'm not into such business.</Message>
      <Message>Whatever you tell me I'm not into such business.</Message>
      <NewUser name="Ben 10" />
      <Message>Whatever you tell me I'm not into such business.</Message>
      <Message self>Please go and find yourself a job.</Message>
      <Message self>Please go and find yourself a job.</Message>
    </div>
  );
}

function Message({ children, self }) {
  return (
    <Card className={`w-fit bg-transparent ${self && "bg-blue-100 ml-auto"}`}>
      <CardBody className="flex items-center flex-row gap-2">
        {!self && <Avatar name="June Rishab" className="inline-block" />}{" "}
        <p>{children}</p>
      </CardBody>
    </Card>
  );
}

export default Chat;
