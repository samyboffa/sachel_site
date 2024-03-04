import React from "react";

const KartTeam = () => {
  return (
    <div className="container my-5 ">
      <div className="text-center col-md-8  mx-auto">
        <h2 className="mx-auto text-uppercase f48 fw-bold mb-5">
          L'équipe de kart
        </h2>
      </div>
      <div className="row-md-8  mx-auto d-flex jcc  ">
        <div className="col-md-4 mt-5 flex-column">
          <img src="./member-1.png" alt="member1" />
          <p className="fw-bolder mt-3 mb-2">Olivier Beretta</p>
          <p className="member_desc">
            Ancien pilote F1, Pilote d’essai FERRARI Compétition
          </p>
        </div>
        <div className="col-md-4 flex-column ">
          <img src="./member-2.png" alt="member2" />
          <p className="fw-bolder mt-3 mb-2">Roberto Costantini</p>
          <p className="member_desc">Pilote</p>
        </div>
      </div>
    </div>
  );
};

export default KartTeam;
