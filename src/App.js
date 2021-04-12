import logo from './images/compass.svg';

import lifeData from './data/lifedata.json';
import React, { useState, useEffect } from 'react';
import LifeEvent from './LifeEvent';
import './App.css';

/** Theme Colors
 * Dark - #262329
 * Dark-light - #635D69
 * Grey - #BABABA 
 * Light - #fff
 * OFfwhite - #f8f8ff
*/

function App() {
  let lifeDataEvents = lifeData.events;
  const [events] = useState(lifeDataEvents);
  
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${events} times`;
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="Main">
        <div className="LifePathWrapper">
          <div className="event-list">
            {events.map((item,index) => <LifeEvent key={index} details={item} />)}
            </div>
        </div>
      </div>
    </div>
  );
}


//Icon by <a href="https://freeicons.io/profile/3">freeicons</a> on <a href="https://freeicons.io">freeicons.io</a>
    
export default App;
