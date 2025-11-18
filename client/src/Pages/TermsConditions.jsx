import React from "react";
import { privacyPolicies, termsConditions } from "../Utils/terms-conditions";

const TermsConditions = () => {
  return (
    <div className="page">
      <div className="overflow-y-scroll h-[440px]">
        <div className="">
          <h3 className="text-pink-500!">Terms & Conditions</h3>
          <div className="space-y-4 mt-4">
            {termsConditions.map((td, index) => {
              return (
                <div className="space-y-1.5" key={index}>
                  <h5 className="text-base!">
                    {index + 1}. {td.title}
                  </h5>
                  <p>{td.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        <hr className="border border-slate-800 mt-10" />
        <div className="mt-10">
          <h3 className="text-pink-500!">Privacy Policy</h3>
          <div className="space-y-4 mt-4">
            {privacyPolicies.map((td, index) => {
              return (
                <div className="space-y-1.5" key={index}>
                  <h5 className="text-base!">
                    {index + 1}. {td.title}
                  </h5>
                  <p>{td.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
