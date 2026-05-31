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
import { FaGithub, FaGoogle } from "react-icons/fa";

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
  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleGitHubSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Card className="border max-w-130 mx-auto mt-10 md:mt-10">
        <Form onSubmit={onSubmit} className="flex  flex-col gap-4">
          <TextField isRequired name="email" type="email">
            <Label className="text-xl">Email</Label>
            <Input placeholder="Your email ..." />
            <FieldError />
          </TextField>
          <TextField isRequired minLength={8} name="password" type="password">
            <Label className="text-xl">Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2 -mb-3">
            <button className="btn w-full bg-primary  text-white">Login</button>
          </div>
        </Form>
        <div className="divider max-w-130 mx-auto">OR</div>
        <div className="flex gap-2 justify-center items-center -mt-3">
          <button
            onClick={handleGoogleSignin}
            className="btn flex-1  hover:bg-primary hover:text-white  text-black  "
          >
            <FaGoogle />
            Signin with Google
          </button>
          <div className="divider divider-horizontal">OR</div>
          <button
            onClick={handleGitHubSignin}
            className="btn flex-1 hover:bg-primary hover:text-white  text-black  "
          >
            <FaGithub /> Signin with GitHub
          </button>
        </div>
        <div className="text-center -mt-2 ">
          <p className="font-semibold">
            Do Not Have An Account?
            <Link href={"/register"}>
              <span className="text-red-500 font-bold">Register</span>
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
