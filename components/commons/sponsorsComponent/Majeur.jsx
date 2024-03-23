import React from "react";
import CheveronTxt from "../cheveronTxt";
import CustomButton from "../CustomButton";
import DevenirSponsor from "../DevenirSponsor";

const Majeur = () => {
  const Array1 = [
    "Visibilité par le biais de supports de communication",
    "Page dédiée sur le site internet",
    "Activation sur les réseaux sociaux",
    "Kit média",
    "Evénement de marque et pack sur mesure",
    "Logotisation et visibilité sur les Equipements.",
  ];
  const Array2 = [
    "Visibilité par le biais de supports de communication",
    "Page dédiée sur le site internet",
    "Activation sur les réseaux sociaux",
  ];
  return (
    <div className="container-fluid partenariat p-5 marginB-200 flex-xs-column gap-3 d-flex flex-md-row justify-content-center">
      <div className="col-md-4 col-xs-12 bg-light p-4 h-75 d-flex flex-column jcsb">
        <div className="d-flex aic">
          <span>
            <img src="./helmet.png" alt="hemlet" className="helmet" />
          </span>
          <p className=" text-noir text-uppercase termina600  f32 lh-sm sponsor-majeur-title   ">
            Sponsor majeur
          </p>
        </div>

        {Array1.map((item, idx) => {
          return <CheveronTxt item={item} key={idx} />;
        })}
        <DevenirSponsor
          text="DEVENIR SPONSOR MAJEUR"
          style="mt-5 bg-yellow border-0 p-3 w-100 "
        />
      </div>
      <div className="transparent col-xs-12 col-md-4 d-flex flex-column jcsb p-4 text-light">
        <div className="d-flex flex-column ">
          <p className="s text-uppercase termina600 f24 lh-sm  p-1 my-3 ">
            Sponsor
          </p>
          {Array2.map((item, idx) => {
            return <CheveronTxt item={item} key={idx} />;
          })}
        </div>
        <DevenirSponsor
          text="DEVENIR SPONSOR"
          style="mt-5 bg-light border-0 p-3 w-100 "
        />
      </div>
    </div>
  );
};

export default Majeur;
