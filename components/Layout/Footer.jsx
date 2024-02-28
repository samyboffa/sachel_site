import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return <div className="footer_container">
    <h1 className="footer_title">Sachel Rotge</h1>
    <ul className="footer_list dfr jcc">
      <li className="nav_link"><Link href="/">acceuil</Link></li>
      <li className="nav_link"><Link href="/equipe">l'équipe</Link></li>
      <li className="nav_link"><Link href="/saison">saisons</Link></li>
      <li className="nav_link"><Link href="/sponsors">sponsors</Link></li>
      <li className="nav_link"><Link href="/contact">contact</Link></li>
      <li className="nav_link"><Link href="/mentionsLegales">mentions légales</Link></li>
    </ul>
    <Link href="/"><FontAwesomeIcon icon={faInstagram} /></Link>
    <h6 className="footer_dev">Développé avec <span className="heart">♥</span> par Tendances.Group © 2023. Tous droits réservés.</h6>
  </div>;
};

export default Footer;
