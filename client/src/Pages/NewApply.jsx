import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const NewApply = () => {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [from, setFrom] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/applications/new-apply",
        {
          role,
          company,
          email,
          mobile,
          from,
        }
      );
      toast.success(response?.data?.message);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="page">
      <h2 className="uppercase mb-5">Apply New Job Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="company_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Company name
            </label>
            <input
              type="text"
              id="company_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Infosys"
              required
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div>
            <label
              for="job_role"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Job Role
            </label>
            <input
              type="text"
              id="job_role"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Front-End Developer"
              required
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div>
            <label
              for="email_address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email_Address
            </label>
            <input
              type="text"
              id="email_address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="infosys@gmail.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              for="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-456-7890"
              maxLength={10}
              required
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div>
            <label
              for="from"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Job From
            </label>
            <select
              id="from"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none"
              onChange={(e) => setFrom(e.target.value)}
            >
              <option selected>Refered From</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Naukri">Naukri</option>
              <option value="Friend">Friend</option>
            </select>
          </div>
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            />
          </div>
          <label
            for="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>
        <button type="submit" className="btn">
          Apply
        </button>
      </form>
    </div>
  );
};

export default NewApply;
