import React, { useState, useContext } from "react";
import ContactContext from "@/context/ContactContext";

const PopUp = () => {
  const [popUpVisible, setPopUpVisible] = useState(true);
  const { contact, toggleContact } = useContext(ContactContext);
  return (
    <div className={`d-flex jcc ${popUpVisible ? "" : "d-none"} `}>
      <div className="popUp">
        <div className="popupText">
          <p className="popUpTitle text-uppercase termina700 ">
            Sponsorisez sachel rotge
          </p>
          <p className="popUpText-data manrope fw-600">
            Maximisez votre visibilité et votre réputation en sponsorisant nos
            événements sportifs et nos athlètes de haut niveau !
          </p>
        </div>
        <button
          className="text-noir bg-yellow popUpBtn manrope fw-800"
          onClick={toggleContact}
        >
          En savoir plus
        </button>
        <button
          className="popUpCloseBtn"
          onClick={() => setPopUpVisible(false)}
        >
          <p>X</p>
        </button>
      </div>
    </div>
  );
};

export default PopUp;
