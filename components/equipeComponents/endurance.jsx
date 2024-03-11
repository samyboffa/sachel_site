import React from "react";
import RacerCard from "../commons/RacerCard";

const Endurance = () => {
  return (
    <div className="container my-5 ">
      <div className="text-center col-md-8 mt-5 mx-auto">
        <h2 className="mx-auto text-uppercase mt-5 f48 fw-bold mb-5">
          La team endurance
        </h2>
      </div>
      <div className="d-flex jcc">
        <RacerCard imgUrl='./romain.png' name="Roberto Costantini" role="Pilote"/>
      </div>
      
    </div>
  );
};

export default Endurance;
