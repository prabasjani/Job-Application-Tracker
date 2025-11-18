import React, { useContext, useState } from "react";
import { toast } from "sonner";
import api from "../../Utils/api";
import { AppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";

const Login = ({ setActiveTab }) => {
  const { setIsAuth, fetchCurrUser } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!email) {
        toast.error("Please Enter Email Address!");
      } else if (!password) {
        toast.error("Please Enter Password!");
      } else if (password.length < 8) {
        toast.error("Password must be 8 Characters!");
      } else {
        const response = await api.post("/user/login", { email, password });
        fetchCurrUser();
        setIsAuth(true);
        navigate("/");
        toast.success(response?.data?.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
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

      <form className="mt-4" onSubmit={handleLogin}>
        <div className="flex flex-col mb-3">
          <label htmlFor="email" className="label-style">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            className="input-style"
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
