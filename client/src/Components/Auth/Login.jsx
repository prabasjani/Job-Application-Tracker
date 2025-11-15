import React from "react";

const Login = ({ setActiveTab }) => {
  return (
    <div>
      <div className="pb-3 border-b border-slate-800">
        <h5 className="text-xl font-bold mb-1">
          Welcome to <span className="text-pink-500">PS</span> Jobs
        </h5>
        <p className="text-xs! text-gray-400">
          Login to use our Job Application Tracker
        </p>
      </div>

      <form className="mt-4">
        <div className="flex flex-col mb-3">
          <label htmlFor="email" className="label-style">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            className="input-style"
          />
        </div>

        <div className="flex flex-col mb-3">
          <label htmlFor="password" className="label-style">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*************"
            className="input-style"
          />
        </div>

        <button
          type="submit"
          className="btn bg-pink-400 hover:bg-pink-500 w-full mt-2"
        >
          Login
        </button>
      </form>

      <p className="mt-3 text-xs! text-gray-600">
        If you don't have an account?{" "}
        <span
          className="text-pink-400 hover:text-pink-500 underline cursor-pointer"
          onClick={() => setActiveTab("signup")}
        >
          Create Account
        </span>
      </p>
    </div>
  );
};

export default Login;
