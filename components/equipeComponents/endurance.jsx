import React from "react";
import RacerCard from "../commons/RacerCard";

const Endurance = () => {
  return (
    <div className="container marginB-200 ">
      <div className="text-center col-md-8 mt-5 mx-auto">
        <h2 className="mx-auto text-uppercase my-5 f32 termina600 ">
          La team endurance
        </h2>
      </div>
      <div className="row d-flex jcc">
        <div className="col-md-4 mt-5">
          <RacerCard
            imgUrl="./romain.png"
            name="Romain Iannetta"
            role="Pilote"
          />
        </div>
      </div>
    </div>
  );
};

export default Endurance;
