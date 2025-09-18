import React from "react";
import { NavLink } from "react-router-dom";

import { MdHomeFilled } from "react-icons/md";
import { FaFileCirclePlus } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="py-3 px-20 flex items-center justify-between border-b border-gray-300 shadow">
      <h2 className="!text-blue-600">PS-JOBS</h2>
      <div className="flex items-center gap-10">
        <NavLink
          to="/"
          className="text-sm font-semibold uppercase text-gray-600"
        >
          <span className="flex items-center gap-1">
            <MdHomeFilled /> Home
          </span>
        </NavLink>
        <NavLink
          to="/new-apply"
          className="text-sm font-semibold uppercase text-gray-600"
        >
          <span className="flex items-center gap-1">
            <FaFileCirclePlus /> Apply
          </span>
        </NavLink>
        <NavLink
          to="/all-applies"
          className="text-sm font-semibold uppercase text-gray-600"
        >
          <span className="flex items-center gap-1">
            <FaClipboardList /> Applications
          </span>
        </NavLink>
        <button className="text-sm font-semibold uppercase text-red-600 cursor-pointer">
          <span className="flex items-center gap-1">
            <FaPowerOff /> Logout
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
