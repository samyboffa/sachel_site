import CustomButton from "../commons/CustomButton";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { useState, React } from "react";


const Header = () => {
  const [btnToggle,setBtnToggle]=useState(false)
  const toggleMenu=()=>{
    setBtnToggle(!btnToggle)
    console.log(btnToggle)
  }
  return  (
    <div className='dfr jcsb nav_bar'>
      <div className="container dfr jcsb">
        <h1 className="logo dfr fs24">Sachel rotge</h1>
        <ul className="nav_list dfr">
          <li className="nav_link"><Link href="/">acceuil</Link></li>
          <li className="nav_link"><Link href="/equipe">l'équipe</Link></li>
          <li className="nav_link" onClick={()=>toggleMenu()} >saisons<FontAwesomeIcon icon={faChevronDown} className='cheveron' /></li>
          <li className="nav_link"><Link href="/sponsors">sponsors</Link></li>
        </ul>
        <ul className={btnToggle? "saison_menu aic jcc": " hide"}>
           <Link href='/saison23' onClick={()=>toggleMenu()}  className='saison_link dfr aic jcc' >SAISON 2023</Link>
            <Link href='/saison24' onClick={()=>toggleMenu()} className='saison_link dfr aic jcc'>SAISON 2024</Link>
          </ul>
         
        <CustomButton text="contact" style="contactBtn" link="/contact"/> 
      </div>
          
    </div>
  )
};

export default Header;
