import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const ApplicationTable = ({ slice }) => {
  const { applicationData, capitalized } = useContext(AppContext);
  const sliced = slice ? slice : applicationData.length;

  return (
    <div className="relative overflow-y-auto max-h-[400px] shadow-md border border-gray-200 sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
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
          {applicationData
            ?.map((application) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={application?._id}
                >
                  <td className="px-6 py-4">{application._id?.slice(0, 9)}</td>
                  <td className="px-6 py-4">
                    {new Date(application?.appliedDate)?.toLocaleDateString()}
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Link to={`/application/${application?._id}`}>
                      {capitalized(application?.role)}
                    </Link>
                  </th>

                  <td className="px-6 py-4">
                    {capitalized(application?.company)}
                  </td>
                  <td className="px-6 py-4">{application?.email}</td>
                  <td className="px-6 py-4">{application?.mobile}</td>
                  <td className="px-6 py-4">{application?.from}</td>
                  <td className="px-6 py-4">
                    {application?.status == "Pending" ? (
                      <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                        Pending
                      </span>
                    ) : (
                      <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                        Replied
                      </span>
                    )}
                  </td>
                </tr>
              );
            })
            .reverse()
            .slice(0, sliced)}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationTable;
