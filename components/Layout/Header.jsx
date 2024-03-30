import Link from "next/link";
import { useContext, useState } from "react";
import Contact from "../commons/Contact";
import { useRouter } from "next/router";
import ContactContext from "@/context/ContactContext";

const Header = () => {
  const router = useRouter();
  const [showDrop, setShowDrop] = useState(false);
  const toggleMenu = () => {
    setShowDrop(!showDrop);
  };
  const [showMenu, setShowMenu] = useState(false);
  const toggleSmMenu = () => {
    setShowMenu(!showMenu);
  };
  const { contact, toggleContact } = useContext(ContactContext);

  return (
    <nav className="navbar  navbar-expand-lg bg-body-tertiary">
      <div
        className={showDrop ? "test d-block" : "d-none"}
        onClick={() => setShowDrop(false)}
      ></div>
      <div className="d-flex container p-md-0   w-100 justify-content-between">
        <Link
          className="navbar-brand f24 termina700 text-uppercase text-noir"
          href="/"
        >
          Sachel Rotge
        </Link>
        <ul
          className={
            showMenu
              ? "navbar-nav-show navbar-nav gap-3 mb-2 mb-lg-0"
              : "navbar-nav-hide navbar-nav gap-3 mb-2 mb-lg-0"
          }
        >
          <li className="nav-item">
            <button className="menu-close-btn" onClick={toggleSmMenu}>
              X
            </button>
            <Link
              className={
                router.pathname === "/"
                  ? "manrope active nav-link fw-700 text-uppercase"
                  : "nav-link fw-700 op-50 text-uppercase"
              }
              aria-current="page"
              href="/"
              onClick={toggleSmMenu}
            >
              accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                router.pathname === "/equipe"
                  ? "fw-700 active nav-link text-uppercase"
                  : "fw-700 nav-link op-50 text-uppercase"
              }
              href="/equipe"
              onClick={toggleSmMenu}
            >
              l'équipe
            </Link>
          </li>
          <li className="nav-item dropdown" onClick={() => toggleMenu()}>
            <Link
              className={
                router.pathname === ("/saison23" || "./saison24")
                  ? "dropdown-toggle d-flex justify-content-center align-items-center manrope fw-700 px-0 active nav-link text-uppercase"
                  : "fw-700 manrope nav-link op-50 d-flex justify-content-center align-items-center dropdown-toggle px-0 text-uppercase"
              }
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              saisons
              <span className="material-symbols-outlined d-xs-none d-md-block">
                keyboard_arrow_down
              </span>
            </Link>

            <ul
              className={
                showDrop
                  ? "dropdown-menu  d-block border-0 p-2 drop-menu text-center"
                  : "dropdown-menu"
              }
              aria-labelledby="navbarDropdown"
            >
              <li>
                <Link
                  className="dropdown-item hover fw-700 nav-link text-uppercase"
                  href="/saison23"
                  onClick={() => {
                    toggleMenu();
                    toggleSmMenu();
                  }}
                >
                  saison 2023
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item fw-700 hover nav-link text-uppercase"
                  href="/saison24"
                  onClick={() => {
                    toggleMenu();
                    toggleSmMenu();
                  }}
                >
                  saison 2024
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link
              className={
                router.pathname === "/sponsors"
                  ? "active fw-700 nav-link text-uppercase"
                  : "nav-link fw-700 op-50 text-uppercase"
              }
              href="/sponsors"
            >
              sponsors
            </Link>
          </li>
        </ul>

        <button
          className="border-0 p-3 bg-noir text-light fw-800 manrope d-xs-none d-md-block"
          onClick={toggleContact}
        >
          CONTACT
        </button>
        <div className="menu">
          <img src="./menu.png" alt="menu" onClick={toggleSmMenu} />
        </div>
        <Contact contact={contact} toggle={toggleContact} />
        {contact && <div className="black_layer"></div>}
      </div>
    </nav>
  );
};

export default Header;
