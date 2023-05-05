import React from 'react';

function Crew() {

return (
  <body className='crew'>
      
    <main id="main" class="grid-container grid-container--crew flow">
    <h1 class="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>
    <div class="dot-indicators flex">
      <button aria-selected="true"><span class="sr-only">The commander</span></button>
      <button aria-selected="false"><span class="sr-only">The mission specialist</span></button>
      <button aria-selected="false"><span class="sr-only">The pilot</span></button>
      <button aria-selected="false"><span class="sr-only">The crew engineer</span></button>
    </div>
    <article class="crew-info flow">
      <header className="flow flow-space-small">
        <h2 class="fs-600 ff-serif uppercase">Commander</h2>
        <p class="fs-700 uppercase ff-serif">Douglas Hurley</p>
      </header>
      <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
      and former NASA astronaut. He launched into space for the third time as 
      commander of Crew Dragon Demo-2.</p>
    </article>
    
    <img src="../assets/crew/image-douglas-hurley.png" alt="Douglas Hurley"></img>
      </main>
  </body>
  )
}

export default Crew;
