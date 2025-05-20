import { useState } from "react";

interface loginProps {}

function LoginPage({}: loginProps) {
  return (

    // MAIN WRAPPER

    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-gradient-to-r from-gradient-start to-gradient-end p-8 rounded-lg shadow-2xl bg-opacity-80 backdrop-blur-md max-w-xs w-full ">
  {/* USERNAME       */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block mb-4 text-white font-semibold uppercase"
          >
            usuername
          </label>
          <input
            type="text"
            id="username"
            className="p-2 rounded-full border border-gray-300 w-full"
          ></input>
        </div>

{/* PASSWORD */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-4 text-white font-semibold uppercase"
          >
            password
          </label>
          <input
            type="password"
            id="password"
            className="p-2 rounded-full border border-gray-300 w-full"
          ></input>
        </div>

{/* BUTTON */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="box-border px-4 py-1 bg-poolgoods-button-blue text-white rounded-full font-semibold shadow-xl hover:outline hover:outline-white hover:outline-solid hover:outline-1"
          >
            Login
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default LoginPage;
