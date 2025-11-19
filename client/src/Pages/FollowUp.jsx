import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import NoApplicationAlert from "../Components/NoApplicationAlert";

const FollowUp = () => {
  const { applicationData } = useContext(AppContext);
  const pathname = window.location.pathname;
  // Days Diffrent
  const daysDiff = (date) => {
    const today = new Date();
    const endDate = new Date(date);

    today.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);

    const diffTime = endDate - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };
  // Today
  const followUpPosts = applicationData?.filter((app) => {
    return daysDiff(app?.appliedDate) === 2 && app?.status === "applied";
  });
  return (
    <div className="page">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
        <h3 className="uppercase ">Follow Up </h3>
        <Link to="/applies" className="btn bg-pink-400 hover:bg-pink-500">
          Applies
        </Link>
      </div>

      <div className="relative overflow-y-scroll max-h-[675px] sm:max-h-[375px] shadow-md border border-slate-800 rounded-lg">
        {followUpPosts.length > 0 ? (
          <table className="w-full text-sm text-left rtl:text-right text-gray-400">
            <thead className="text-xs text-neutral-300 uppercase ">
              <tr className="sticky top-0 bg-slate-950">
                <th scope="col" className="px-6 py-3">
                  JOB_ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Applied Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Job Role
                </th>
                <th scope="col" className="px-6 py-3">
                  Company
                </th>
                <th scope="col" className="px-6 py-3">
                  Email_ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Mobile
                </th>
                <th scope="col" className="px-6 py-3">
                  From
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {followUpPosts
                .map((data) => {
                  return (
                    <tr
                      className="bg-slate-900 border-b border-slate-800 hover:bg-slate-800/60"
                      key={data._id}
                    >
                      <td className="px-6 py-3.5">
                        #1{String(data.applicationID).padStart(5, 0)}
                      </td>
                      <td className="px-6 py-3.5">
                        {new Date(data?.appliedDate).toDateString()}
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-3.5 font-medium text-neutral-200 whitespace-nowrap"
                      >
                        <Link to={`/applied/${data._id}`}>
                          {capitalized(data.role)}
                        </Link>
                      </th>

                      <td className="px-6 py-3.5">
                        {capitalized(data.company)}
                      </td>
                      <td className="px-6 py-3.5">{data.email}</td>
                      <td className="px-6 py-3.5">
                        {data.mobile ? (
                          data.mobile
                        ) : (
                          <span className="text-red-500">No Contact</span>
                        )}
                      </td>
                      <td className="px-6 py-3.5">{data.from}</td>
                      <td className="px-6 py-3.5">
                        {data.status == "applied" ? (
                          <span className="bg-pink-200 text-pink-500 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                            Applied
                          </span>
                        ) : data.status == "pending" ? (
                          <span className="bg-red-300 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                            Pending
                          </span>
                        ) : (
                          <span className="bg-green-300 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                            Replied
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })
                .reverse()}
            </tbody>
          </table>
        ) : (
          <div
            className={` ${
              pathname == "/follow-ups"
                ? "h-[674px] sm:h-[370px]"
                : "min-h-[280px]"
            } flex items-center justify-center`}
          >
            <NoApplicationAlert />
          </div>
        )}
      </div>
    </div>
  );
};

export default FollowUp;
