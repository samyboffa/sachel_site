import CustomButton from "../commons/CustomButton";
import Link from "next/link";


const Header = () => {
  
  return(
   
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container ">
        <Link class="navbar-brand f24 fw-bold" href="/">Sachel Rotge</Link>
        <div class="collapse navbar-collapse jcc" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active text-uppercase" aria-current="page" href="/">acceuil</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-uppercase" href="/equipe">l'équipe</Link>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle text-uppercase" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                saisons
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" href="/saison23">SAISON 2023</Link></li>
                <li><Link class="dropdown-item" href="/saison24">SAISON 2024</Link></li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-uppercase" href="/sponsors">sponsors</Link>
            </li>
          </ul>
        </div>
        <Link class="btn btn-outline-success bg-noir text-light" href="/contact">CONTACT</Link>
      </div>
      </nav>
 
  )
};

export default Header;
