import React, {useEffect} from 'react';

function Crew() {

useEffect(() => {
const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');
if (!tabList) return;

let tabFocus = 0;

function changeTabFocus(e) {
  const keydownLeft = 37;
  const keydownRight = 39;
  
          if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
                tabs[tabFocus].setAttribute("tabIndex", -1);
          }
            
          if (e.keyCode === keydownRight) {
                tabFocus++;
                if (tabFocus >= tabs.length) {
                    tabFocus = 0;
                }
          }else{
                tabFocus--;
                if (tabFocus < 0) {
                    tabFocus = tabs.length - 1;
                }
          }
  
  tabs[tabFocus].setAttribute("tabIndex", 0);
  tabs[tabFocus].focus();
}

  function changeTabPanel(e) {
      const targetTab = e.target;
      const targetPanel = targetTab.getAttribute("aria-controls");
      const targetImage = targetTab.getAttribute("data-image");
      
      const tabContainer = targetTab.parentNode;
      const mainContainer = tabContainer.parentNode;
      
      tabContainer
          .querySelector('[aria-selected="true"]')
          .setAttribute("aria-selected", false);
          
      targetTab.setAttribute("aria-selected", true);
    
      hideContent(mainContainer, '[role="tabpanel"]');
      showContent(mainContainer, [`#${targetPanel}`]);
      
      hideContent(mainContainer, 'picture');
      showContent(mainContainer, [`#${targetImage}`]);
  }

    function hideContent(parent, content) {
      parent
          .querySelectorAll(content)
          .forEach((item) => item.setAttribute("hidden", true));
    }

    function showContent(parent, content) {
       parent.querySelector(content).removeAttribute('hidden');
    }
  
tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
});

}, []);

return (
  <body className='crew'>
    <main id="main" className="grid-container grid-container--crew flow">
      <h1 className="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>
  
      <div className="tab-list dot-indicators flex" role="tablist" aria-label="crew list">
        <button aria-selected="true" role="tab" aria-controls="Commander-tab"  tabIndex="0" data-image="commander-image"><span className="sr-only">The commander</span></button>
        <button aria-selected="false" role="tab" aria-controls="Specialist-tab" tabIndex="-1" data-image="specialist-image"><span className="sr-only" >The mission specialist</span></button>
        <button aria-selected="false" role="tab" aria-controls="Pilot-tab" tabIndex="-1" data-image="pilot-image"><span className="sr-only" >The pilot</span></button>
        <button aria-selected="false" role="tab" aria-controls="Engineer-tab" tabIndex="-1" data-image="engineer-image"><span className="sr-only" >The crew engineer</span></button>
      </div>
  
      <article className="crew-info flow" id="Commander-tab" tabIndex="0" role="tabpanel">
        <header className="flow flow-space-small">
          <h2 className="fs-600 ff-serif uppercase">Commander</h2>
          <p className="fs-700 uppercase ff-serif">Douglas Hurley</p>
        </header>
        <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
        and former NASA astronaut. He launched into space for the third time as 
        commander of Crew Dragon Demo-2.</p>
      </article>
      
      <article hidden className="crew-info flow" id="Specialist-tab" tabIndex="0" role="tabpanel">
        <header className="flow flow-space-small">
          <h2 className="fs-600 ff-serif uppercase">Mission Specialist</h2>
          <p className="fs-700 uppercase ff-serif">Mark Shuttleworth</p>
        </header>
        <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
         the Linux-based Ubuntu operating system. Shuttleworth became the first South 
         African to travel to space as a space tourist.</p>
      </article>
  
      <article hidden className="crew-info flow" id="Pilot-tab" tabIndex="0" role="tabpanel">
        <header className="flow flow-space-small">
          <h2 className="fs-600 ff-serif uppercase">Pilot</h2>
          <p className="fs-700 uppercase ff-serif">Victor Glover</p>
        </header>
        <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the 
         International Space Station. Glover is a commander in the U.S. Navy where 
         he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
         station systems flight engineer.</p>
      </article>
  
      <article hidden className="crew-info flow" id="Engineer-tab" tabIndex="0" role="tabpanel">
        <header className="flow flow-space-small">
          <h2 className="fs-600 ff-serif uppercase">Flight Engineer</h2>
          <p className="fs-700 uppercase ff-serif">Anousheh Ansari</p>
        </header>
        <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
         Ansari was the fourth self-funded space tourist, the first self-funded woman to 
         fly to the ISS, and the first Iranian in space.</p>
      </article>
  
      <picture id="commander-image">
        <source srcSet="../assets/crew/image-douglas-hurley.webp" type="image/webp"/>
        <img src="../assets/crew/image-douglas-hurley.png" alt="Douglas-Hurley"/>
      </picture>
  
      <picture hidden id="specialist-image">
        <source srcSet="../assets/crew/image-mark-shuttleworth.webp" type="image/webp"/>
        <img src="../assets/crew/image-mark-shuttleworth.png" alt="mark shuttleworth"/>
      </picture>
  
      <picture hidden id="pilot-image">
        <source srcSet="../assets/crew/image-victor-glover.webp" type="image/webp"/>
        <img src="../assets/crew/image-victor-glover.png" alt="victor glover"/>
      </picture>
  
      <picture hidden id="engineer-image">
        <source srcSet="../assets/crew/image-anousheh-ansari.webp" type="image/webp"/>
        <img src="../assets/crew/image-anousheh-ansari.png" alt="anousheh ansari"/>
      </picture>
  
    </main>
  </body>
  )
}

export default Crew;
