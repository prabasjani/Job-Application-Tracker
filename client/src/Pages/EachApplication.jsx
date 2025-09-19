import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

import { FaCheckCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { toast } from "sonner";

const EachApplication = () => {
  const { id } = useParams();
  const { applicationData, capitalized } = useContext(AppContext);
  const currentApplication = applicationData?.find((app) => app._id == id);

  const navigate = useNavigate();

  const updateStatus = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/applications/update-status/${id}`,
        { status: "Responsed" }
      );
      toast.success(response?.data?.message);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const deleteStatus = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/v1/applications/delete-application/${id}`
      );
      toast.success(response?.data?.message);
      navigate("/all-applies");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="page">
      <h2>Application Info</h2>
      <div className="p-3 sm:p-6 rounded-lg border border-gray-200 shadow-sm bg-white hover:bg-gray-50 mt-5 flex items-center gap-10 sm:gap-20 h-[95%] sm:h-[78%]">
        <div className="flex flex-col justify-between h-full">
          <div className="space-y-4">
            <h2>Applied Job Role</h2>
            <p>Company Name</p>
            <p>Applied Date</p>
            <p>Email Address</p>
            <p>Mobile Number</p>
            <p>Applied From</p>
            <p>Application Status</p>
          </div>
          <div className="">
            <button
              onClick={() => updateStatus(currentApplication?._id)}
              type="button"
              className={`btn flex items-center gap-2 ${
                currentApplication?.status == "Responsed" && "!bg-blue-400"
              }`}
              disabled={currentApplication?.status == "Responsed"}
            >
              <FaCheckCircle /> Update
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between h-full">
          <div className="space-y-4">
            <h2>{capitalized(currentApplication?.role) || ""}</h2>
            <p className="!text-blue-500">
              {capitalized(currentApplication?.company) || ""}
            </p>
            <p className="!text-blue-500">
              {new Date(currentApplication?.appliedDate).toDateString()}
            </p>
            <p className="!text-blue-500">{currentApplication?.email}</p>
            <p className="!text-blue-500">{currentApplication?.mobile}</p>
            <p className="!text-blue-500">{currentApplication?.from}</p>
            <p className="!text-blue-500">
              {currentApplication?.status == "Pending" ? (
                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                  Pending
                </span>
              ) : (
                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                  Replied
                </span>
              )}
            </p>
          </div>
          <div className="">
            <button
              className="btn !bg-red-600 hover:!bg-red-700 flex items-center gap-2"
              onClick={() => deleteStatus(currentApplication?._id)}
            >
              <FaTrashAlt />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachApplication;
