import React from "react";

const RacerCard = ({ imgUrl, name, role }) => {
  return (
    <div className="d-flex flex-column p-0 ">
      <img src={imgUrl} alt="racer_phto" className="img-fluid" />
      <p className="termina600 f16 mt-3 w-75 mb-2 text-uppercase">{name}</p>
      <p className="manrope f14 fw-500 w-75">{role}</p>
    </div>
  );
};

export default RacerCard;
