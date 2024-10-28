import React from 'react';
import './EventMap.css';

const EventMap = () => {
  return (
    <div className="event-map">
      <h2>Find Events</h2>
      <div className="map-placeholder">Map Area (Static for demo)</div>
      <div className="filters">
        <button>All</button>
        <button>Art</button>
        <button>Music</button>
        <button>Science</button>
        <button>Games</button>
      </div>
    </div>
  );
};

export default EventMap;
