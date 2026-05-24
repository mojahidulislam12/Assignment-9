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
import { redirect } from "next/navigation";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user);
    const { data, error } = await authClient.signUp.email({
      name: user.name, // required
      email: user.email, // required
      password: user.password, // required
      image: user.image,
      callbackURL: "",
    });
    console.log({ data, error });
    alert("Registration Successful");
    if (data) {
      redirect("/login");
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Card className="border">
        <Form onSubmit={onSubmit} className="flex w-130 mx-auto flex-col gap-4">
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Your name ..." />
            <FieldError />
          </TextField>

          <TextField isRequired name="image" type="url">
            <Label>Image</Label>
            <Input placeholder="Your image ..." />
            <FieldError />
          </TextField>
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
            <button className="btn w-full bg-primary  text-white">
              Register
            </button>
          </div>
          <div className="flex gap-2">
            <button className="btn flex-1  hover:bg-primary hover:text-white  text-black  ">
              <FaGoogle />
              Signin with Google
            </button>
            <button className="btn flex-1 hover:bg-primary hover:text-white  text-black  ">
              <FaGithub /> Signin with GitHub
            </button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default SignUpPage;
