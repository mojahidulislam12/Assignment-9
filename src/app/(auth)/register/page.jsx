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
        <div className="">
          <Form onSubmit={onSubmit} className="flex  flex-col gap-4">
            <TextField isRequired name="name" type="text">
              <Label className="text-xl">Name</Label>
              <Input placeholder="Your name ..." />
              <FieldError />
            </TextField>

            <TextField isRequired name="image" type="url">
              <Label className="text-xl">Image</Label>
              <Input placeholder="Your image ..." />
              <FieldError />
            </TextField>
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
              <button className="btn w-full bg-primary  text-white">
                Register
              </button>
            </div>
          </Form>
        </div>

        <div className="divider">OR</div>
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
        <div className="text-center -mt-2  mx-auto">
          <p className="font-semibold">
            Have An Account?
            <Link href={"/login"}>
              <span className="text-red-500 font-bold">Login</span>
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default SignUpPage;
