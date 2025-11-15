import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiBowman } from "react-icons/gi";
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { AppContext } from "../Context/AppContext";

const Profile = () => {
  return (
    <div className="p-4 border border-slate-800 bg-slate-950/75 backdrop-blur-xl rounded-lg shadow shadow-slate-800 z-40 absolute top-24 right-20">
      <div className="pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <FaUser className="text-neutral-200" size={15} />
          <h5>Prabanjan</h5>
        </div>
        <div className="flex items-center gap-2.5 mt-2">
          <MdEmail className="text-neutral-400" size={15} />
          <p>praba@gmail.com</p>
        </div>
      </div>
      <div className="flex flex-col space-y-4 mt-4">
        <button className="btn w-full bg-pink-400 hover:bg-pink-500">
          Logout
        </button>
        <button className="btn w-full bg-red-500 hover:bg-red-600">
          Delete Account
        </button>
      </div>
    </div>
  );
};

const Navbar = () => {
  const { isAuth } = useContext(AppContext);
  const [showProfile, setShowProfile] = useState(false);
  return (
    isAuth && (
      <nav className="flex items-center justify-between px-20 py-4 border-b border-slate-800 backdrop-blur-xl absolute top-0 left-0 w-full z-50">
        <div className="">
          <Link to="/" className="flex items-center gap-2.5">
            <GiBowman className="text-pink-500" size={28} />
            <h3>PS Jobs</h3>
          </Link>
        </div>

        <div className="flex items-center gap-x-10">
          <NavLink
            to="/"
            className="text-neutral-300 font-semibold py-2"
            onClick={() => setShowProfile(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/applies"
            className="text-neutral-300 font-semibold py-2"
            onClick={() => setShowProfile(false)}
          >
            Applies
          </NavLink>
          <NavLink
            to="/new-apply"
            className="text-neutral-300 font-semibold py-2"
            onClick={() => setShowProfile(false)}
          >
            Apply
          </NavLink>
          <NavLink
            to="/follow-ups"
            className="text-neutral-300 font-semibold py-2"
            onClick={() => setShowProfile(false)}
          >
            Follow Up
          </NavLink>
          <div
            className={`h-8 w-8 rounded-full flex items-center justify-center border border-pink-900 text-neutral-200 text-base cursor-pointer ${
              showProfile && "bg-pink-500"
            } relative`}
            onClick={() => setShowProfile((prev) => !prev)}
          >
            P
          </div>

          {showProfile && <Profile />}
        </div>
      </nav>
    )
  );
};

export default Navbar;
