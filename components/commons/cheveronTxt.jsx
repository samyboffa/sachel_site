import React from "react";

const CheveronTxt = ({ item }) => {
  return (
    <div className="d-flex align-items-center ">
      <span className="text-yellow f20 me-3 ">&gt;</span>
      <p className="manrope f18 lh-24 fw-600 my-2">{item}</p>
    </div>
  );
};

export default CheveronTxt;
