import React from "react";
import BluePageSeparator from "../commons/bluePageSeparator";

const Objectifs = () => {
  return (
    <div className="container my-5 horizontal_objectif">
      <div className=" row d-flex aic jcc w-75 mx-auto mb-4">
        <span className="circle border border-yellow d-flex aic jcc p-0 m-0 rounded-circle ">
          <span className="inner-circle bg-yellow rounded-circle  "></span>
        </span>
        <span className="line "></span>
        <span className="circle border border-noir d-flex aic jcc p-0 m-0 rounded-circle ">
          <span className="inner-circle bg-noir rounded-circle  "></span>
        </span>
        <span className="line "></span>
        <span className="circle border border-noir d-flex aic jcc p-0 m-0 rounded-circle ">
          <span className="inner-circle bg-noir rounded-circle  "></span>
        </span>
      </div>
      <div className="row text-center fw-bolder f40">
        <div className="col-md-4">
          <span>2024</span>
          <p className="objectif_txt">
            Essais automobile et ultime année de compétition en karting. Mes
            ambitions pour 2024 : faire mes premiers essais en Formule 4, Ligier
            JS2R, GT... et participer à l'aventure Feed Racing F4.
          </p>
        </div>
        <div className="col-md-4">
          <span>2025</span>
          <p className="objectif_txt">
            Opter entièrement pour le monde de l'automobile et se lancer dans
            l’univers des compétitions d'endurance.
          </p>
        </div>
        <div className="col-md-4">
          <span>2028-29</span>
          <p className="objectif_txt">
            Devenir un pilote professionnel d'endurance et réaliser le rêve
            ultime : participer aux prestigieuses 24 heures du Mans.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Objectifs;
