import Link from "next/link";
import { useState } from "react";
import Contact from "../commons/Contact";


const Header = () => {
  const [showDrop,setShowDrop]=useState(false)
  const toggleMenu=()=>{
    setShowDrop(!showDrop)
  }
  const [contact,setContact]=useState(false);
  const toggleContact = ()=>{
      setContact(!contact)
  }

  return(
   
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container ">
        <Link class="navbar-brand f24 fw-bold" href="/">Sachel Rotge</Link>
        <div class="collapse navbar-collapse jcc" id="navbarSupportedContent">
          <ul class="navbar-nav gap-3 mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active text-uppercase" aria-current="page" href="/">acceuil</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-uppercase" href="/equipe">l'équipe</Link>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle text-uppercase" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={()=>toggleMenu()}>
               saisons
              </Link>
              <ul class={showDrop?"dropdown-menu d-block border-0 drop-menu":"dropdown-menu"} aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item nav-link text-uppercase" href="/saison23" onClick={()=>toggleMenu()} >saison 2023</Link></li>
                <li><Link class="dropdown-item nav-link text-uppercase" href="/saison24" onClick={()=>toggleMenu()}>saison 2024</Link></li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-uppercase" href="/sponsors">sponsors</Link>
            </li>
          </ul>
        </div>
        <button class="btn btn-outline-success bg-noir text-light" onClick={toggleContact}>CONTACT</button>
        <Contact contact={contact} toggle={toggleContact}/>
      </div>
      </nav>
 
  )
};

export default Header;
