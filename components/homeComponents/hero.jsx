import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Hero = () => {
  return (
    <div className="container-fluid p-0 hero_container">
      <div className="side_btns">
        <button className="sideBtn ">
          <img src="./vector.png" alt="side" />
          <p>PRENDRE CONTACT</p>
        </button>
        <button className="sideBtn ">
          <img src="./vector_2.png" alt="side" />
          <p>DEVENIR SPONSOR</p>
        </button>
        <button className="sideBtn">
          <img src="./vector_3.png" alt="side" /> <p>DEVENIR SPONSOR</p>
        </button>
      </div>
      <div className="row d-flex marginB-200 ">
        <div className="col-md-6 heroTxt col-xs-12 text-noir ">
          <div className="">
            <h1 className="equipe_title mt-md-5 my-xs-4 text-uppercase termina700 ">
              Sachel RotgE
            </h1>
            <h3 className="info_section_title text-yellow my-xs-3 text-uppercase termina600 ">
              Pilote AUTOMOBILE
            </h3>
            <div className="hero_separator my-sm-3 "></div>
            <div className="manrope lh-sm-base  my-xs-3 f16 lh32 fw-500 ">
              Plongez dans l'univers auto de Sachel Rotgé - Le jeune prometteur
              du sport automobile qui a pour objectif d'unir nos forces sur les
              circuits prestigieux : ensemble, vers ma performance !
            </div>
            <h4 className="termina600  text-noir f20 mb-xs-5  p-sm-0 my-sm-3 me-sm-3">
              EN ROUTE VERS UNE CARRIÈRE DE PILOTE PROFESSIONNEL !
            </h4>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex  p-0 jcc aic imgBox sponsor_hero_img_container">
          <img src="./hero_img.png" alt="racing_img" className="img-fluid " />
        </div>
      </div>
      <img src="./hero_banner.png" alt="banner" className="banner d-xs-none" />
    </div>
  );
};

export default Hero;
