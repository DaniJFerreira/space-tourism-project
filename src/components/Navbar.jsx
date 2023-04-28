import React from 'react';

function Navbar() {
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

  return (
    <header className="primary-header flex">
      <div>
        <img src="./assets/shared/logo.svg" alt="space tourism logo" className="logo"></img>
      </div>
      <button class="mobile-nav-toggle" aria-expanded="false" onClick={handleClick}>
        <span class="sr-only" aria-expanded="false">
          Menu
        </span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          data-visible="false"
          class="primary-navigation underline-indicators flex"
        >
          <li class="active">
            <a class="ff-sans cond uppercase text-white letter-spacing-2" href="#">
              <span aria-hidden="true">00</span>Home
            </a>
          </li>
          <li>
            <a class="ff-sans cond uppercase text-white letter-spacing-2" href="#">
              <span aria-hidden="true">01</span>Destination
            </a>
          </li>
          <li>
            <a class="ff-sans cond uppercase text-white letter-spacing-2" href="#">
              <span aria-hidden="true">02</span>Crew
            </a>
          </li>
          <li>
            <a class="ff-sans cond uppercase text-white letter-spacing-2" href="#">
              <span aria-hidden="true">03</span>Techn
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;