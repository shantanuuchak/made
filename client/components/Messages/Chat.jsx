import { Avatar, Card, CardBody, Image } from "@heroui/react";
import NewUser from "./NewUser";

function Message({ messages, socket, newUsers }) {
  return (
    <div className="grid gap-2">
      {messages.map((message, idx) => (
        <Chat
          key={idx}
          type={message.type}
          content={message.content}
          name={message.user.name.toUpperCase().split(" ")[0]}
          self={socket.id === message.user.id}
        />
      ))}
      {newUsers.map((user, idx) => (
        <NewUser key={idx} name={user} />
      ))}
    </div>
  );
}

function Chat({ type, content, self, name }) {
  console.log(content);
  return (
    <Card className={`w-fit bg-transparent ${self && "bg-blue-100 ml-auto"}`}>
      <CardBody className="flex items-center flex-row gap-2">
        {!self && <Avatar name={name} className="inline-block" />}
        {type === "text" ? (
          <p>{content}</p>
        ) : (
          <Image alt="Image message" src={content} width={300} />
        )}
      </CardBody>
    </Card>
  );
}

export default Message;
