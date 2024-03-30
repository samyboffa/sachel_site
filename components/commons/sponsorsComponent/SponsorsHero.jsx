import React from "react";

const SponsorsHero = () => {
  return (
    <div className="marginB-200 position-realtive">
      <div className="row ">
        <div className="text_sponsor col-md-6 ">
          <h1 className="termina700 f56 ">
            LE POINT DE DÉPART DE VOTRE COURSE AVEC NOUS !
          </h1>
          <p className="manrope fw-500 f16">
            Investissez sur l’avenir et la valeur « sport » en devenant
            partenaire de mes saisons de compétitions. Le parrainage sportif va
            au-delà de la visibilité : c’est une collaboration dans le cadre de
            laquelle votre entreprise s'associe à la croissance, à l'ambition et
            à l'énergie de la jeunesse. Ensemble, bâtissons un avenir gagnant.
          </p>
        </div>
        <div className="image col-md-9 offset-3 p-0 sponsor_hero_img_container ">
          <img
            src="./sponsor_hero.png"
            alt=""
            className="img-fluid img-sponsor"
          />
        </div>
      </div>
    </div>
  );
};

export default SponsorsHero;
