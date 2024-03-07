import React from "react";

const CheveronTxt = ({ item }) => {
  return (
    <div className="d-flex idx aic">
      <span className="text-yellow f32 me-3 d-flex  ">&gt;</span>
      <p className="chev-txt">{item}</p>
    </div>
  );
};

export default CheveronTxt;
