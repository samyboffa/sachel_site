import React from "react";
import BluePageSeparator from "../commons/bluePageSeparator";

const Objectifs = () => {
  return (
    <div className="container marginB-200 horizontal_objectif">
      <p className="termina600 f32 text-center text-noir text-uppercase my-5">
        mes objectifs
      </p>
      <div className=" row d-flex aic jcc w-75 mx-auto mb-4">
        <div className="circle border-yellow d-flex aic jcc p-0 m-0 rounded-circle ">
          <div className="inner-circle bg-yellow rounded-circle  "></div>
        </div>
        <span className="line "></span>
        <div className="circle border-noir d-flex aic jcc p-0 m-0 rounded-circle ">
          <div className="inner-circle bg-noir rounded-circle  "></div>
        </div>
        <span className="line "></span>
        <div className="circle border-noir d-flex aic jcc p-0 m-0 rounded-circle ">
          <div className="inner-circle bg-noir rounded-circle  "></div>
        </div>
      </div>
      <div className="row text-center fw-bolder f40">
        <div className="col-md-4">
          <span className="termina700 f40 text-noir">2024</span>
          <p className="objectif_txt text-noir">
            Essais automobile et ultime année de compétition en karting. Mes
            ambitions pour 2024 : faire mes premiers essais en Formule 4, Ligier
            JS2R, GT... et participer à l'aventure Feed Racing F4.
          </p>
        </div>
        <div className="col-md-4">
          <span className="termina700 f40 text-noir">2025</span>
          <p className="objectif_txt text-noir">
            Opter entièrement pour le monde de l'automobile et se lancer dans
            l’univers des compétitions d'endurance.
          </p>
        </div>
        <div className="col-md-4">
          <span className="termina700 f40 text-noir">2028-29</span>
          <p className="objectif_txt text-noir">
            Devenir un pilote professionnel d'endurance et réaliser le rêve
            ultime : participer aux prestigieuses 24 heures du Mans.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Objectifs;
