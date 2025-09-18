import React from "react";

const HomeCard = ({ count, title, icon }) => {
  return (
    <div className="p-5 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 flex items-center justify-between">
      <div className="">
        <h2>{count}</h2>
        <p className="mt-1.5 !text-xs">{title}</p>
      </div>
      <div className="">{icon}</div>
    </div>
  );
};

export default HomeCard;
