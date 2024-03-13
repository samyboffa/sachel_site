import React, { useContext } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import ContactContext from "@/context/ContactContext";

const Footer = () => {
  const { contact, toggleContact } = useContext(ContactContext);
  return (
    <div className="footer_container container-fluid text-light text-center d-flex flex-column">
      <h1 className="termina700 text-uppercase f24  ">Sachel Rotge</h1>
      <ul className="footer_list d-flex flex-wrap p-sm-4 jcc ">
        <li className="nav-item text-uppercase op-70">
          <Link className="nav-link" href="/">
            acceuil
          </Link>
        </li>
        <li className="nav-item text-uppercase op-70">
          <Link className="nav-link" href="/equipe">
            l'équipe
          </Link>
        </li>
        <li className="nav-item text-uppercase op-70">
          <Link className="nav-link" href="/saison24">
            saisons 2024
          </Link>
        </li>
        <li className="nav-item text-uppercase op-70">
          <Link className="nav-link" href="/saison23">
            saisons 2023
          </Link>
        </li>
        <li className="nav-item text-uppercase op-70">
          <Link className="nav-link" href="/sponsors">
            sponsors
          </Link>
        </li>
        <li className="nav-item text-uppercase op-70">
          <button className="nav-link text-uppercase" onClick={toggleContact}>
            Contact
          </button>
        </li>
        <li className="nav-item text-uppercase text-light op-70">
          <Link className="nav-link" href="/mentionsLegales">
            mentions légales
          </Link>
        </li>
      </ul>
      <Link className="nav-link" href="/">
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
      <h6 className="col-md-6 m-auto f14 fw-bolder manrope op-50">
        Développé avec <span className="heart">♥</span> par Tendances.Group ©
        2023. Tous droits réservés.
      </h6>
    </div>
  );
};

export default Footer;
