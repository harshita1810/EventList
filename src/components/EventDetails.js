import React from 'react';
import './EventDetails.css';

const EventDetails = ({ event, onClose }) => {
  return (
    <div className="event-details">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">X</button>
        <img src="/assets/event-image.jpg" alt={event.name} />
        <h3>{event.name}</h3>
        <p>{event.date} • {event.location}</p>
        <p>{event.description}</p>
        <button className="ticket-button">Get a Ticket</button>
      </div>
    </div>
  );
};

export default EventDetails;
