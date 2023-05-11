import React, {useState} from 'react';
import data from './data.json';

function Destination() {

  const [selectedTabIndex ,setSelectedTabIndex] = useState(0);
  
  function changeTabPanel (index) {
    setSelectedTabIndex(index);
  }
  
  return (
    <body className='destination'>
      <main id="main" className="grid-container grid-container--destination flow">
          <h1 className="numbered-title"><span aria-hidden="true">01</span> Pick your destination</h1>
  
          {data.destinations.map((destination, index) => (
            <picture 
              key={destination.name}
              id={destination.name}
              hidden={index !== selectedTabIndex}
              >
              <img src={destination.images} alt="the moon"/>
            </picture>
          ))}
            
      <div className="tab-list underline-indicators flex" role="tablist" aria-label="destination list">
        {data.destinations.map((destination, index) => (
          <button
          key={destination.name}
          aria-selected={index === selectedTabIndex}
          role="tab" 
          aria-controls={`moon-tab-${index}`} 
          className="uppercase ff-sans-cond text-accent letter-spacing-2" 
          tabIndex={index === selectedTabIndex ? 0 : -1} 
          data-image={destination.name}
          onClick={() => changeTabPanel(index)}
          >
            {destination.name}
          </button>
        ))}
      
      </div>
          
          {data.destinations.map((destination, index) => (
            <article 
              key={destination.name}
              className="destination-info flow" 
              id={`moon-tab-${index}`}
              role="tabpanel"
              tabIndex={index === selectedTabIndex ? 0 : -1} 
              hidden={index !== selectedTabIndex}
              >
               <h2 className="fs-800 uppercase ff-serif">{destination.name}</h2>
         
               <p>{destination.description}</p>
               
               <div className="destination-meta flex">
                 <div>
                   <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
                   <p className="ff-serif uppercase">{destination.distance}</p>
                 </div>
                 <div>
                   <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
                   <p className="ff-serif uppercase">{destination.travel}</p>
                 </div>
               </div>
            </article>
          ))}
      </main>
    </body>
  )
}

export default Destination;
