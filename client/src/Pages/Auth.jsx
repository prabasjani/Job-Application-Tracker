import React, { useState } from "react";
import Login from "../Components/Auth/Login";
import Signup from "../Components/Auth/Signup";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");
  return (
    <div className="p-5 h-screen w-full flex items-center justify-center">
      <div className="w-1/3 p-5 rounded-md bg-slate-950 border border-slate-800 shadow shadow-slate-900">
        {activeTab === "login" && <Login setActiveTab={setActiveTab} />}
        {activeTab === "signup" && <Signup setActiveTab={setActiveTab} />}
      </div>
    </div>
  );
};

export default Auth;
