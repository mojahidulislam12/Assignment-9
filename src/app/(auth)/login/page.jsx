"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user);
    const { data, error } = await authClient.signIn.email({
      email: user.email, // required
      password: user.password, // required
      rememberMe: true,
    });
    console.log({ data, error });
    if (data) {
      redirect("/");
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Card className="border">
        <Form onSubmit={onSubmit} className="flex w-130 mx-auto flex-col gap-4">
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="Your email ..." />
            <FieldError />
          </TextField>
          <TextField isRequired minLength={8} name="password" type="password">
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button type="submit">Submit</Button>
          </div>
          <p>
            Do not have an account ? <Link href={"/register"}>Register</Link>
          </p>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
