import React from "react";

const EquipeHome = () => {
  return (
    <div className="container-fluid equipe_hero marginB-200">
      <h1 className="text-uppercase termina700 text-md-center text-sm-left my-5 fw-700 equipe_title lh-sm-base">
        L'équipe de Sachel Rotge
      </h1>
      <div className="row  ">
        <div className="col-md-6 p-0 col-sm-12">
          <img src="./kart.png" alt="karting" className="w-100" />
        </div>
        <div className="col-md-6 col-sm-12">
          <h2 className="info_section_title my-xs-4 termina600  text-uppercase ">
            Sachel Rotge -
            <br />
            <span className="info_section_title my-xs-4 text-yellow  termina600">
              Pilote automobile
            </span>
          </h2>
          <div className="equipe_hero_text">
            <p className="my-5 fw-500 lh32 f16 manrope">
              J’ai 17 ans et je suis depuis toujours passionné de sport
              automobile. Depuis plus de trois ans, j’ai la chance d'évoluer
              dans ce sport, d’abord en compétition karting, puis en automobile
              ainsi qu’en Sim-Racing. J’ai désormais la certitude de vouloir
              devenir professionnel, en tant que pilote endurance. Mon objectif
              est de rejoindre un jour le championnat « WEC » (FIA World
              Endurance Championship), et notamment de concourir aux mythiques
              24h du Mans en tant que pilote officiel.
            </p>
            <p className="f16 manrope lh32 fw-500">
              Je m’y prépare sans relâche, sans pour autant oublier mes études.
              Après une première scientifique au Lycée Albert 1er de Monaco (1er
              Prix d’honneur et félicitations du conseil de classe), je suis
              actuellement en Terminale. Je vous présente mon parcours et mes
              objectifs, en espérant que vous souhaiterez m’accompagner et
              devenir partenaire de cette aventure, qui m’a déjà permis de vivre
              tant de moments extraordinaires…
            </p>
          </div>
          <p className="sachel-sign my-5 ">Sachel</p>
        </div>
      </div>
    </div>
  );
};

export default EquipeHome;
