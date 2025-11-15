import React from "react";

const HomeCard = ({ count, title, icon }) => {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg shadow-sm hover:bg-slate-900/90 transform hover:scale-[1.02] transition-transform flex items-center justify-between">
      <div className="">
        <h2>{count}</h2>
        <p className="mt-1 text-[12px]">{title}</p>
      </div>
      <div className="">{icon}</div>
    </div>
  );
};

export default HomeCard;
