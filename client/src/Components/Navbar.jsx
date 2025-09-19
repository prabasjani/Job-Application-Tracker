import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { MdHomeFilled } from "react-icons/md";
import { FaFileCirclePlus } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="py-3 px-5 sm:px-20 flex items-center justify-between border-b border-gray-300 shadow">
      <h2 className="!text-blue-600">PS-JOBS</h2>
      <div className="hidden sm:flex items-center gap-10">
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

      <button className="sm:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <MdClose size={25} className="text-red-600" />
        ) : (
          <RiMenu3Fill size={25} />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open
            ? "flex flex-col items-end pr-5 pt-10 absolute top-14 left-0 w-full h-full z-50 bg-gray-50 gap-10"
            : "hidden"
        }`}
      >
        <NavLink
          to="/"
          className="text-sm font-semibold uppercase text-gray-600"
          onClick={() => setOpen(false)}
        >
          <span className="flex flex-row-reverse items-center gap-1">
            <MdHomeFilled /> Home
          </span>
        </NavLink>
        <NavLink
          to="/new-apply"
          className="text-sm font-semibold uppercase text-gray-600"
          onClick={() => setOpen(false)}
        >
          <span className="flex flex-row-reverse items-center gap-1">
            <FaFileCirclePlus /> Apply
          </span>
        </NavLink>
        <NavLink
          to="/all-applies"
          className="text-sm font-semibold uppercase text-gray-600"
          onClick={() => setOpen(false)}
        >
          <span className="flex flex-row-reverse items-center gap-1">
            <FaClipboardList /> Applications
          </span>
        </NavLink>
        <button className="text-sm font-semibold uppercase text-red-600 cursor-pointer">
          <span className="flex flex-row-reverse items-center gap-1">
            <FaPowerOff /> Logout
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
