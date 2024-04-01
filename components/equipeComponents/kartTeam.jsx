import React from "react";
import RacerCard from "../commons/RacerCard";

const KartTeam = () => {
  return (
    <div className="container marginB-200 ">
      <div className="text-center col-md-8  mx-auto">
        <h2 className="mx-auto termina600 text-uppercase f32 text-noir  my-5">
          L'équipe de kart
        </h2>
      </div>
      <div className="row d-flex jcc">
        <div className="col-md-3 mt-5">
          <RacerCard
            imgUrl="./member-1.png"
            name="Olivier Beretta"
            role="Ancien pilote F1, Pilote d’essai FERRARI Compétition"
          />
        </div>
        <div className="col-md-3">
          <RacerCard
            imgUrl="./member-2.png"
            name="Roberto Costantini"
            role="Pilote"
          />
        </div>
      </div>
    </div>
  );
};

export default KartTeam;
