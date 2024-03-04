import React from "react";

const Endurance = () => {
  return (
    <div className="container my-5 ">
      <div className="text-center col-md-8 mt-5 mx-auto">
        <h2 className="mx-auto text-uppercase mt-5 f48 fw-bold mb-5">
          La team endurance
        </h2>
      </div>
      <div className="row-md-8  mx-auto d-flex jcc  ">
        <div className="col-md-4 flex-column ">
          <img src="./romain.png" alt="romain" />
          <p className="fw-bolder mt-3 mb-2">Roberto Costantini</p>
          <p className="member_desc">Pilote</p>
        </div>
      </div>
    </div>
  );
};

export default Endurance;
