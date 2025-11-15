import React from "react";
import { useParams } from "react-router-dom";
import { dummyData } from "../data";

const EachApply = () => {
  const { id } = useParams();
  const currentApplication = dummyData?.find((data) => data.id == id);
  return (
    <div className="page">
      <h1>{currentApplication.id}</h1>
    </div>
  );
};

export default EachApply;
