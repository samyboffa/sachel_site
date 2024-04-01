import { React, useContext } from "react";
import ContactContext from "@/context/ContactContext";

const DevenirSponsor = ({ style, text }) => {
  const { toggleContact } = useContext(ContactContext);
  return (
    <>
      <button
        className={`${style} border-0 p-3 manrope fw-800 customBtn`}
        onClick={toggleContact}
      >
        {text}
      </button>
    </>
  );
};

export default DevenirSponsor;
