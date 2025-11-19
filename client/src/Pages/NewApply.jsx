import React, { useContext, useState } from "react";
import { toast } from "sonner";
import api from "../Utils/api";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const NewApply = () => {
  const { fetchAllApplications } = useContext(AppContext);
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [from, setFrom] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/application/new-application", {
        role,
        company,
        email,
        mobile,
        from,
      });
      toast.success(response?.data?.message);
      if (response?.data?.success) {
        fetchAllApplications();
      }
      navigate("/applies");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="page">
      <h3 className="uppercase pb-4 mb-4 border-b border-slate-800">
        Apply New Job Post
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 sm:grid-cols-2">
          <div>
            <label htmlFor="company_name" className="label-style">
              Company name
            </label>
            <input
              type="text"
              id="company_name"
              className="input-style"
              placeholder="Infosys"
              required
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="job_role" className="label-style">
              Job Role
            </label>
            <input
              type="text"
              id="job_role"
              className="input-style"
              placeholder="Front-End Developer"
              required
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email_address" className="label-style">
              Email_Address
            </label>
            <input
              type="text"
              id="email_address"
              className="input-style"
              placeholder="infosys@gmail.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone" className="label-style">
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="input-style"
              placeholder="123-456-7890"
              maxLength={10}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="from" className="label-style">
              Job From
            </label>
            <select
              id="from"
              className="input-style appearance-none"
              onChange={(e) => setFrom(e.target.value)}
            >
              <option defaultValue={""}>Refered From</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Naukri">Naukri</option>
              <option value="Friend">Friend</option>
            </select>
          </div>
        </div>

        <div className="flex items-start gap-2 mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 accent-pink-500"
              required
            />
          </div>
          <label htmlFor="remember" className="label-style">
            I agree with the{" "}
            <Link
              to="/terms&conditions"
              className="text-pink-500 hover:underline"
            >
              terms and conditions
            </Link>
            .
          </label>
        </div>
        <button
          type="submit"
          className="btn w-full bg-pink-400 hover:bg-pink-500"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default NewApply;
