import React from "react";

const SponsorsHero = () => {
  return (
    <div className="marginB-200 overflow-hidden position-realtive">
      <div className="row position-relative  ">
        <div className="text_sponsor col-xs-12 col-md-6 col-xl-6  ">
          <h1 className="termina700 sponsor_text_title mb-4 ">
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
        <div className="image col-md-9  d-md-block d-xs-none  offset-md-3 p-0 sponsor_hero_img_container">
          <img
            src="./sponsor_hero.png"
            alt=""
            className="img-fluid col-xl-12"
          />
        </div>
        <div className="image col-xs-12 d-md-none d-xs-block offset-xs-0 p-0 sponsor_hero_img_container">
          <img src="./sponsor_hero_inverted.png" alt="" className="img-fluid" />
          <img src="./sponsor_hero.png" alt="" className="d-xs-none" />
        </div>
        <img
          src="./hero_banner.png"
          alt="banner"
          className="p-0 col-12 banner-t  position-absolute"
        />
      </div>
    </div>
  );
};

export default SponsorsHero;
