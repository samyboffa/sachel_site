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
    
      <div className="container dfr jcsb">
        <Link class="navbar-brand f24 fw-bold" href="/">Sachel Rotge</Link>
        <ul className="navbar-nav mb-2 d-flex w-auto">
          <li className="nav-item text-uppercase"><Link className='nav-link' href="/">acceuil</Link></li>
          <li className="nav-item text-uppercase"><Link className='nav-link' href="/equipe">l'équipe</Link></li>
          <li className="nav-item text-uppercase" onClick={()=>toggleMenu()} ><Link className='nav-link' href="/equipe">saisons<FontAwesomeIcon icon={faChevronDown} className='cheveron' /></Link></li>
          <li className="nav-item text-uppercase"><Link className='nav-link' href="/sponsors">sponsors</Link></li>
        </ul>
        {/* <ul className={btnToggle? "saison_menu aic jcc": " hide"}>
           <Link href='/saison23' onClick={()=>toggleMenu()}  className='saison_link dfr aic jcc' >SAISON 2023</Link>
            <Link href='/saison24' onClick={()=>toggleMenu()} className='saison_link dfr aic jcc'>SAISON 2024</Link>
          </ul> */}
         
        <CustomButton text="contact" style="contactBtn" link="/contact"/> 
      </div>
          
    
  )
};

export default Header;
