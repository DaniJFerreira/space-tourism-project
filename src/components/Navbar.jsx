// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// function Navbar(){
//     return(
// const nav = document.querySelector(".primary-navigation");
// const navToggle = document.querySelector(".mobile-nav-toggle");

// // when someone clicks the hamburger button

// navToggle.addEventListener( "click", () => {

// // if the nav is closed, open it
// const visibility = nav.getAttribute("data-visible");

// // if the nav is open, close it
// if (visibility === "false"){
//     nav.setAttribute("data-visible", true);
//     navToggle.setAttribute("aria-expanded", true);
// }else{
//     nav.setAttribute("data-visible", false);
//     navToggle.setAttribute("aria-expanded", false);
// }

// });

// <div>
// <button class="mobile-nav-toggle" aria-controls="primary-navigation"><span class="sr-only" aria-expanded="false">Menu</span></button>
//     <nav>
//         <ul id="primary-navigation " data-visble="false" class="primary-navigation underline-indicators flex">
//           <li class="active"><a class="ff-sans cond uppercase text-white letter-spacing-2" href="#"><span aria-hidden="true">00</span>Home</a>
//             <li><a class="ff-sans cond uppercase text-white letter-spacing-2" href="#"><span aria-hidden="true">01</span>Destination</a>
//             <li><a class="ff-sans cond uppercase text-white letter-spacing-2" href="#"><span aria-hidden="true">02</span>Crew</a>
//             <li><a class="ff-sans cond uppercase text-white letter-spacing-2" href="#"><span aria-hidden="true">03</span>Techn</a>   
//         </ul>
//     </nav>
// </>
// );

// }

// export default Navbar;

import React, { useState } from 'react';
import "../index.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
     <header className="primary-header flex">
      <div>
      <img src="./assets/shared/logo.svg" alt="space tourism logo" className="logo"></img>
      </div>
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        onClick={handleToggleClick}
        aria-expanded={isOpen}
      >
        <span className="sr-only" aria-hidden={!isOpen}>
          Close menu
        </span>
        <span className="sr-only" aria-hidden={isOpen}>
          Open menu
        </span>
        &#9776;
      </button>
      <nav
        id="primary-navigation"
        data-visible={isOpen}
        className="primary-navigation underline-indicators flex"
      >
        <ul>
          <li className="active">
            <a className="ff-sans cond uppercase text-white letter-spacing-2" href="#">
              <span aria-hidden="true">00</span>Home
            </a>
          </li>
          <li>
            <a className="ff-sans cond uppercase text-white letter-spacing-2" href="#">
              <span aria-hidden="true">01</span>Destination
            </a>
          </li>
          <li>
            <a className="ff-sans cond uppercase text-white letter-spacing-2" href="#">
              <span aria-hidden="true">02</span>Crew
            </a>
          </li>
          <li>
            <a className="ff-sans cond uppercase text-white letter-spacing-2" href="#">
              <span aria-hidden="true">03</span>Techn
            </a>
          </li>
        </ul>
      </nav>
      </header>
  );
}

export default Navbar;
