import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface loginProps {}

function LoginPage({}: loginProps) {
  const {
    register, // Used to "register" the input elements
    handleSubmit, // A wrapper function for the form's submission handler
    formState: { errors }, // Contains information about the form's state, including validation errors
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form submitted successfully! Data:", data);
  };

  return (
    // MAIN WRAPPER

    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-gradient-to-r from-gradient-start to-gradient-end p-8 rounded-lg shadow-2xl bg-opacity-80 backdrop-blur-md max-w-xs w-full ">

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* USERNAME       */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block mb-4 text-white font-semibold uppercase"
            >
              usuername
            </label>
            <Input
              type="text"
              id="username"
              className="p-2 rounded-full border border-gray-300 w-full"
              {...register("username", { required: "Username is required." })}
            ></Input>
            {errors.username && (
              <p className="text-red-500 text-sm mt-0.5">{errors.username.message as string}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-4 text-white font-semibold uppercase"
            >
              password
            </label>
            <Input
              type="password"
              id="password"
              className="p-2 rounded-full border border-gray-300 w-full"
               {...register("password", { required: "Password is required." })}
            ></Input>
              {errors.password && (
              <p className="text-red-500 text-sm mt-0.5">{errors.password.message as string}</p>
            )}
          </div>

          {/* BUTTON */}
          <div className="flex justify-end">
            <Button
              type="submit"
              className="box-border px-4 py-1 bg-poolgoods-button-blue text-white rounded-full font-semibold shadow-xl hover:outline hover:outline-white hover:outline-solid hover:outline-1"
            >
              Login
            </Button>
          </div>

        </form>
        
      </div>
    </div>
  );
}

export default LoginPage;
