import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  const [activeLink, setActiveLink] = useState(null); 

  const handleClick = () => {
    const nav = document.querySelector(".primary-navigation");
    const navToggle = document.querySelector(".mobile-nav-toggle");

    const visibility = nav.getAttribute("data-visible");

    if (visibility === "false") {
      nav.setAttribute("data-visible", true);
      navToggle.setAttribute("aria-expanded", true);
    } else {
      nav.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
    }
  };

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <header className="primary-header flex">
        <div>
          <img src="./assets/shared/logo.svg" alt="space tourism logo" className="logo"></img>
        </div>
          <button className="mobile-nav-toggle" aria-expanded="false" onClick={handleClick}>
            <span className="sr-only" aria-expanded="false">
              Menu
            </span>
          </button>
        <nav>
          <ul
            id="primary-navigation"
            data-visible="false"
            className="primary-navigation underline-indicators flex"
          >
            <li className={activeLink === 0 ? 'active' : ''}>
              <Link
                to="space-tourism-project/"
                className="ff-sans cond uppercase text-white letter-spacing-2" onClick={() => handleLinkClick(0)}
              >
                <span aria-hidden="true">00</span>Home
              </Link>
            </li>
            <li className={activeLink === 1 ? 'active' : ''}>
              <Link
                to="space-tourism-project/Destination"
                className="ff-sans cond uppercase text-white letter-spacing-2" onClick={() => handleLinkClick(1)}
              >
                <span aria-hidden="true">01</span>Destination
              </Link>
            </li>
            <li className={activeLink === 2 ? 'active' : ''}>
              <Link
                to="space-tourism-project/Crew"
                className="ff-sans cond uppercase text-white letter-spacing-2" onClick={() => handleLinkClick(2)}
              >
                <span aria-hidden="true">02</span>Crew
              </Link>
            </li>
            <li className={activeLink === 3 ? 'active' : ''} >
              <Link
                to="space-tourism-project/Technology"
                className="ff-sans cond uppercase text-white letter-spacing-2" onClick={() => handleLinkClick(3)}
              >
                <span aria-hidden="true">03</span>Technology
              </Link>
            </li>
          </ul>
        </nav>
    </header>
  );
}

export default Navbar;