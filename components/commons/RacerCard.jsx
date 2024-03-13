import React from "react";

const RacerCard = ({ imgUrl, name, role }) => {
  return (
    <div className="col-xs-12 col-md-3 px-xs-4 d-flex flex-column p-0 ">
      <img src={imgUrl} alt="racer_phto" className="img-fluid" />
      <p className="termina600 f16 mt-3 w-75 mb-2">{name}</p>
      <p className="manrope fw-500 w-75">{role}</p>
    </div>
  );
};

export default RacerCard;
