import React from "react";
import Header from "../layouts/General/Header";
import Footer from "../layouts/General/Footer";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "../components/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../components/EyeFilledIcon";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

export default function Register() {
  const [isVisible, setIsVisible] = React.useState(false);

  const { handleSubmit, register } = useForm();

  function navigate(url) {
    window.location.href = url;
  }

  const onSubmit = (data) => {
    console.log(data);
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <Header />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("Name")}
              type="text"
              variant="bordered"
              label="Name"
              placeholder="Enter your name"
            />
            <Input
              {...register("email")}
              type="email"
              variant="bordered"
              label="Email"
              placeholder="Enter your email"
            />
            <Input
              {...register("password")}
              label="Password"
              variant="bordered"
              placeholder="Enter your password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="max-w"
            />
            <Input
              {...register("confirmPassword")}
              label="Password"
              variant="bordered"
              placeholder="Enter your password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="max-w"
            />
            <Button
              type="submit"
              color="primary"
              className="w-full bg-pink-400 rounded-md text-sm font-semibold text-white shadow-sm hover:bg-pink-400"
              variant="solid"
            >
              Sign in
            </Button>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already register?{" "}
            <Link
              href="/login"
              className="text-pale-brown font-bold"
              size="sm"
            >
              sig in
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
