import React from "react";

const NewApply = () => {
  return (
    <div className="page">
      <h3 className="uppercase pb-4 mb-4 border-b border-slate-800">
        Apply New Job Post
      </h3>
      <form>
        <div className="grid gap-6 mb-6 grid-cols-2">
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
            />
          </div>
          <div>
            <label htmlFor="from" className="label-style">
              Job From
            </label>
            <select id="from" className="input-style appearance-none">
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
            <a href="#" className="text-pink-500 hover:underline">
              terms and conditions
            </a>
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
