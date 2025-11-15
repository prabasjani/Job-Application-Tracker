import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { dummyData } from "../data";
import { AppContext } from "../Context/AppContext";
import NoApplicationAlert from "./NoApplicationAlert";

const ApplicationTable = ({ slice, filter = "" }) => {
  const { capitalized } = useContext(AppContext);
  const sliced = slice ? slice : dummyData.length;
  return (
    <div className="relative overflow-y-scroll max-h-[375px] shadow-md border border-slate-800 rounded-lg">
      {dummyData.length > 0 ? (
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
            {dummyData
              .filter((data) => {
                return filter ? data.status == filter : true;
              })
              .map((data) => {
                return (
                  <tr
                    className="bg-slate-900 border-b border-slate-800 hover:bg-slate-800/60"
                    key={data.id}
                  >
                    <td className="px-6 py-3.5">
                      #1{String(data.id).padStart(5, 0)}
                    </td>
                    <td className="px-6 py-3.5">
                      {new Date()?.toLocaleDateString()}
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-3.5 font-medium text-neutral-200 whitespace-nowrap"
                    >
                      <Link to={`/applied/${data.id}`}>
                        {capitalized(data.role)}
                      </Link>
                    </th>

                    <td className="px-6 py-3.5">{capitalized(data.company)}</td>
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
              .reverse()
              .slice(0, sliced)}

            {/* <tr className="bg-slate-900 border-b border-slate-800 hover:bg-slate-800/60">
            <td className="px-6 py-4">1001</td>
            <td className="px-6 py-4">{new Date()?.toLocaleDateString()}</td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-neutral-200 whitespace-nowrap"
            >
              <Link to="/application/:id">React Developer</Link>
            </th>

            <td className="px-6 py-4">Q-Techx</td>
            <td className="px-6 py-4">qtechx@mail.com</td>
            <td className="px-6 py-4">9900990099</td>
            <td className="px-6 py-4">Friend</td>
            <td className="px-6 py-4">
              {status == "Pending" ? (
                <span className="bg-red-300 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                  Pending
                </span>
              ) : (
                <span className="bg-green-300 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                  Replied
                </span>
              )}
            </td>
          </tr> */}
          </tbody>
        </table>
      ) : (
        <NoApplicationAlert />
      )}
    </div>
  );
};

export default ApplicationTable;
