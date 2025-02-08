import {
  Form,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@heroui/react";
import { useEffect } from "react";

export default function SignUp({ onSubmit }) {
  useEffect(() => {
    const session = sessionStorage.getItem("user");
    if (session) {
      onSubmit(session);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));
    sessionStorage.setItem("user", data.name);

    onSubmit(data.name);
  };

  return (
    <div className="min-h-screen max-h-screen w-full flex items-center justify-center">
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="madeapp logo"
            height={40}
            radius="sm"
            src="./favicon.ico"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">MADE Room</p>
            <p className="text-small text-default-500">made.phleebs.com</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <Form
            className="w-full max-w-xs"
            validationBehavior="native"
            onSubmit={handleSubmit}
          >
            <Input
              isRequired
              errorMessage="Please enter your name"
              label="Name"
              labelPlacement="outside"
              name="name"
              autoComplete="off"
              placeholder="Enter your name"
              type="text"
            />
            <Button type="submit" variant="bordered">
              Submit
            </Button>
          </Form>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/shantanuuchak/made"
          >
            Visit GitHub.
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
