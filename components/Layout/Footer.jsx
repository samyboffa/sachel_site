import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return <div className="footer_container">
    <h1 className="footer_title">Sachel Rotge</h1>
    <ul className="footer_list dfr jcc">
      <li className="nav-item text-uppercase"><Link className="nav-link" href="/">acceuil</Link></li>
      <li className="nav-item text-uppercase"><Link className="nav-link" href="/equipe">l'équipe</Link></li>
      <li className="nav-item text-uppercase"><Link className="nav-link" href="/saison">saisons</Link></li>
      <li className="nav-item text-uppercase"><Link className="nav-link" href="/sponsors">sponsors</Link></li>
      <li className="nav-item text-uppercase"><Link className="nav-link" href="/contact">contact</Link></li>
      <li className="nav-item text-uppercase text-light"><Link className="nav-link"href="/mentionsLegales">mentions légales</Link></li>
    </ul>
    <Link className="nav-link" href="/"><FontAwesomeIcon icon={faInstagram} /></Link>
    <h6 className="footer_dev">Développé avec <span className="heart">♥</span> par Tendances.Group © 2023. Tous droits réservés.</h6>
  </div>;
};

export default Footer;
