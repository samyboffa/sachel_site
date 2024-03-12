import Link from "next/link";
import { useContext, useState } from "react";
import Contact from "../commons/Contact";
import { useRouter } from "next/router";
import ContactContext from "@/context/ContactContext";


const Header = () => {
  const router= useRouter()
  const [showDrop,setShowDrop]=useState(false)
  const toggleMenu=()=>{
    setShowDrop(!showDrop)
  }
  const[showMenu, setShowMenu]=useState(false)
  const toggleSmMenu=()=>{
    setShowMenu(!showMenu)
  }
  const { contact, toggleContact } = useContext(ContactContext);

  return(
   
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container d-flex jcsb">
        <Link className="navbar-brand f24 termina700" href="/">Sachel Rotge</Link>
        <div className="" id="navbarSupportedContent">
          <ul className={showMenu? "navbar-nav-show navbar-nav gap-3 mb-2 mb-lg-0":"navbar-nav-hide navbar-nav gap-3 mb-2 mb-lg-0"}>
            <li className="nav-item">
            <button className="menu-close-btn" onClick={toggleSmMenu}>X</button>
              <Link className={router.pathname === '/' ? 'active nav-link fw-700 text-uppercase' : 'nav-link fw-700 text-uppercase'} aria-current="page" href="/" onClick={toggleSmMenu}>acceuil</Link>
            </li>
            <li className="nav-item">
              <Link className={router.pathname === '/equipe' ? 'fw-700 active nav-link text-uppercase' : 'fw-700 nav-link text-uppercase'} href="/equipe" onClick={toggleSmMenu}>l'équipe</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className={router.pathname === ('/saison23'|| './saison24') ? 'dropdown-toggle fw-700 active nav-link text-uppercase' : 'fw-700 nav-link dropdown-toggle text-uppercase'} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={()=>toggleMenu()}>
               saisons
              </Link>
              <ul className={showDrop?"dropdown-menu d-block border-0 p-2 drop-menu text-center":"dropdown-menu"} aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item hover fw-700 nav-link text-uppercase" href="/saison23" onClick={()=>{toggleMenu();toggleSmMenu()}} >saison 2023</Link></li>
                <li><Link className="dropdown-item fw-700 hover nav-link text-uppercase" href="/saison24" onClick={()=>{toggleMenu();toggleSmMenu()}}>saison 2024</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className={router.pathname === '/sponsors' ? 'active fw-700 nav-link text-uppercase' : 'nav-link fw-700 text-uppercase'} href="/sponsors">sponsors</Link>
            </li>
          </ul>
        </div>
        <button className="border-0 p-3 bg-noir text-light fw-800 manrope d-xs-none d-md-block" onClick={toggleContact}>CONTACT</button>
        <div className="menu">
          <img src="./menu.png" alt="menu" onClick={toggleSmMenu} />
        </div>        
          {contact? <Contact contact={contact} toggle={toggleContact}/>:null}                
      </div>
      </nav>
 
  )
};

export default Header;
