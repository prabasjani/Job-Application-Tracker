import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import api from "../Utils/api";
import { toast } from "sonner";

const EachApply = () => {
  const { capitalized, applicationData } = useContext(AppContext);
  const { id } = useParams();
  const currentApplication = applicationData?.find((data) => data._id == id);

  const navigate = useNavigate();

  const handleUpdate = async (id) => {
    try {
      const response = await api.put(`/application/update-status/${id}`);
      toast.success(response?.data?.message);
      navigate("/applies");
    } catch (error) {
      toast.success(error?.response?.data?.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await api.delete(
        `/application/delete-application/${id}`
      );
      toast.success(response?.data?.message);
      navigate("/applies");
    } catch (error) {
      toast.success(error?.response?.data?.message);
    }
  };
  return (
    <div className="page flex items-center justify-center">
      <div className="grid grid-cols-2 gap-x-10 p-10 rounded-lg border  border-slate-800 w-[90%]">
        <div className="col space-y-3">
          <h2 className="text-gray-400!">Position</h2>
          <h4 className="text-gray-400!">Company</h4>
          <h5 className="text-gray-400!">Email Address</h5>
          <h5 className="text-gray-400!">Mobile</h5>
          <h5 className="text-gray-400!">Applied Date</h5>
          <h5 className="text-gray-400!">From</h5>
          <h5 className="text-gray-400!">Status</h5>
          <button
            className="btn bg-pink-400 hover:bg-pink-500 w-full"
            onClick={() => handleUpdate(currentApplication?._id)}
          >
            Update to{" "}
            {currentApplication?.status == "applied"
              ? "Pending"
              : currentApplication?.status == "pending"
              ? "Responsed"
              : "Up-to date"}
          </button>
        </div>
        <div className="col space-y-3">
          <h2>{capitalized(currentApplication?.role)}</h2>
          <h4>{capitalized(currentApplication?.company)}</h4>
          <h5>{currentApplication?.email}</h5>
          <h5>
            {currentApplication?.mobile || (
              <span className="text-red-500">No Contact</span>
            )}
          </h5>
          <h5>{new Date(currentApplication?.appliedDate).toDateString()}</h5>
          <h5>{currentApplication?.from}</h5>
          <h5
            className={`${
              currentApplication?.status == "applied"
                ? "text-pink-300!"
                : currentApplication?.status == "pending"
                ? "text-red-300!"
                : "text-green-300!"
            }`}
          >
            {capitalized(currentApplication?.status)}
          </h5>
          <button
            className="btn bg-red-500 hover:bg-red-600 w-full"
            onClick={() => handleDelete(currentApplication?._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EachApply;
