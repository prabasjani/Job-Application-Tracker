import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiBowman } from "react-icons/gi";
import { FaUser } from "react-icons/fa6";
import { MdClose, MdEmail } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { AppContext } from "../Context/AppContext";
import api from "../Utils/api";
import { toast } from "sonner";

const Profile = ({ setShowProfile }) => {
  const { capitalized, setIsAuth, currUser } = useContext(AppContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await api.post("/user/logout");
      setIsAuth(false);
      navigate("/auth");
      toast.success(response?.data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handleDeleteUser = async () => {
    try {
      const response = await api.delete("/user/delete-user");
      setIsAuth(false);
      toast.success(response?.data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="p-4 border border-slate-800 bg-slate-950/75 backdrop-blur-xl rounded-lg shadow shadow-slate-800 z-40 absolute top-96 sm:top-24 sm:right-20">
      <div className="pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <FaUser className="text-neutral-200" size={15} />
          <h5>{capitalized(currUser?.username)}</h5>
        </div>
        <div className="flex items-center gap-2.5 mt-2">
          <MdEmail className="text-neutral-400" size={15} />
          <p>{currUser?.email}</p>
        </div>
      </div>
      <div className="flex flex-col space-y-4 mt-4">
        <button
          className="btn w-full bg-pink-400 hover:bg-pink-500"
          onClick={() => {
            setShowProfile(false);
            handleLogout();
          }}
        >
          Logout
        </button>
        <button
          className="btn w-full bg-red-500 hover:bg-red-600"
          onClick={() => {
            setShowProfile(false);
            handleDeleteUser();
          }}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

const Navbar = () => {
  const { isAuth, capitalized, currUser } = useContext(AppContext);
  const [showProfile, setShowProfile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    isAuth && (
      <nav className="flex items-center justify-between px-5 sm:px-20 py-4 border-b border-slate-800 backdrop-blur-xl absolute top-0 left-0 w-full z-50">
        <div className="">
          <Link to="/" className="flex items-center gap-2.5">
            <GiBowman className="text-pink-500" size={28} />
            <h3>PS Jobs</h3>
          </Link>
        </div>

        <div className="hidden sm:flex items-center gap-x-10">
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
            <span className="text-base font-bold">
              {capitalized(currUser?.username?.slice(0, 1))}
            </span>
          </div>

          {showProfile && <Profile setShowProfile={setShowProfile} />}
        </div>

        <button className="sm:hidden" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? (
            <MdClose size={25} className="text-pink-500" />
          ) : (
            <RiMenu3Fill size={25} className="text-neutral-200" />
          )}
        </button>

        {/* Mobile Navbar */}
        <div
          className={`${
            openMenu
              ? "flex sm:hidden flex-col items-end gap-y-6 w-full h-screen absolute top-14 left-0 pt-20 pr-6 bg-slate-950/80 backdrop-blur-xl"
              : "hidden"
          } `}
        >
          <NavLink
            to="/"
            className="text-neutral-300 font-semibold py-2"
            onClick={() => {
              setShowProfile(false);
              setOpenMenu(false);
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/applies"
            className="text-neutral-300 font-semibold py-2"
            onClick={() => {
              setShowProfile(false);
              setOpenMenu(false);
            }}
          >
            Applies
          </NavLink>
          <NavLink
            to="/new-apply"
            className="text-neutral-300 font-semibold py-2"
            onClick={() => {
              setShowProfile(false);
              setOpenMenu(false);
            }}
          >
            Apply
          </NavLink>
          <NavLink
            to="/follow-ups"
            className="text-neutral-300 font-semibold py-2"
            onClick={() => {
              setShowProfile(false);
              setOpenMenu(false);
            }}
          >
            Follow Up
          </NavLink>
          <div
            className={`h-8 w-8 rounded-full flex items-center justify-center border border-pink-900 text-neutral-200 text-base cursor-pointer ${
              showProfile && "bg-pink-500"
            } relative`}
            onClick={() => setShowProfile((prev) => !prev)}
          >
            <span className="text-base font-bold">
              {capitalized(currUser?.username?.slice(0, 1))}
            </span>
          </div>

          {showProfile && (
            <Profile
              setShowProfile={setShowProfile}
              setOpenMenu={setOpenMenu}
            />
          )}
        </div>
      </nav>
    )
  );
};

export default Navbar;
