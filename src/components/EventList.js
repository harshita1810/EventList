import React from 'react';
import './EventList.css';

const EventList = () => {
  const events = [
    { id: 1, name: 'Utah Jazz - Common Strange', location: 'California, CA', price: '$27.99' },
    { id: 2, name: 'The California Public Party', location: 'Los Angeles', price: '$88.96' },
  ];

  return (
    <div className="event-list">
      <h3>Popular Now</h3>
      <div className="events">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <img src="/assets/event-placeholder.jpg" alt={event.name} />
            <h4>{event.name}</h4>
            <p>{event.location}</p>
            <p className="price">{event.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
