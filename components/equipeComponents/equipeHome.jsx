import React from "react";

const EquipeHome = () => {
  return (
    <div className="container-fluid equipe_hero my-5">
      <h1 className="text-uppercase text-center mt-5 mb-5 fw-bold f56 lh-lg">
        L'équipe de Sachel Rotge
      </h1>
      <div className="row ">
        <div className="col-md-6">
          <img src="./kart.png" alt="karting" className="w-100" />
        </div>
        <div className="col-md-6">
          <h2 className="f32 fw-bold  text-uppercase ">
            Sachel Rotge -  
            <br/><span className="f32 text-yellow lh-lg fw-bold">
              Pilote automobile
            </span>
          </h2>
          <p className="f16 equipe_hero_text">
            <p className="my-5">J’ai 17 ans et je suis depuis toujours passionné de sport
            automobile. Depuis plus de trois ans, j’ai la chance d'évoluer dans
            ce sport, d’abord en compétition karting, puis en automobile ainsi
            qu’en Sim-Racing. J’ai désormais la certitude de vouloir devenir
            professionnel, en tant que pilote endurance. Mon objectif est de
            rejoindre un jour le championnat « WEC » (FIA World Endurance
            Championship), et notamment de concourir aux mythiques 24h du Mans
            en tant que pilote officiel.</p>
            <p>Je m’y prépare sans relâche, sans pour
            autant oublier mes études. Après une première scientifique au Lycée
            Albert 1er de Monaco (1er Prix d’honneur et félicitations du conseil
            de classe), je suis actuellement en Terminale. Je vous présente mon
            parcours et mes objectifs, en espérant que vous souhaiterez
            m’accompagner et devenir partenaire de cette aventure, qui m’a déjà
            permis de vivre tant de moments extraordinaires…</p>
          </p>
          <p className="sachel-sign my-5">Sachel</p>
        </div>
      </div>
    </div>
  );
};

export default EquipeHome;
