import logo from './images/compass.svg';
import lifeData from './data/lifedata.json';
import React, { useState, useEffect } from 'react';
import LifeEvent from './LifeEvent';
import './App.css';

function App() {

  const [events, setEvents] = useState(lifeData);
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
            {Object.keys(events).map(key => <LifeEvent key={key} details={events[key]} />)}
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
