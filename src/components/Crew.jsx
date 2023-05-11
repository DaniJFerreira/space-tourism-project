import React, {useState} from 'react';
import data from './data.json';

function Crew() {

const [selectedTabIndex, setSelectedTabIndex] = useState(0);


function changeTabPanel(index){
  setSelectedTabIndex(index);
}

return (
  <body className='crew'>
    <main id="main" className="grid-container grid-container--crew flow">
      <h1 className="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>
  
      <div className="tab-list dot-indicators flex" role="tablist" aria-label="crew list">
      {data.crew.map((crew, index) =>(
        <button 
        key={crew.name}
        aria-selected={index === selectedTabIndex} 
        role="tab" 
        aria-controls={`Commander-tab-${index}`}  
        tabIndex={index === selectedTabIndex ? 0 : -1} 
        data-image={crew.name}
        onClick={() => changeTabPanel(index)}
        >
        </button>
      ))}
    </div>
    
    {data.crew.map((crew, index) => (
      <article
      key={crew.name}
      className="crew-info flow"
      id={`Commander-tab-${index}`}
      role="tabpanel"
      tabIndex={index === selectedTabIndex ? 0 : -1}
      hidden={index !== selectedTabIndex}
    >
        <header className="flow flow-space-small">
          <h2 className="fs-600 ff-serif uppercase">{crew.role}</h2>
          <p className="fs-700 uppercase ff-serif">{crew.name}</p>
        </header>
        <p>{crew.bio}</p>
      </article>
    ))}
      
  
  {data.crew.map((crew, index) =>(
      <picture
      key={crew.name}
      id={crew.name}
      hidden={index !== selectedTabIndex}
      >
        <img src={crew.images.png} alt={crew.name}/>
      </picture>
  ))}
    
    </main>
  </body>
  )
}

export default Crew;



