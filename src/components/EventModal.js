import React from "react";
import "./EventModal.css";

const EventModal = ({ event, onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-button" onClick={onClose}>×</button>
      <img src={event.image} alt={event.name} />
      <h2>{event.name}</h2>
      <p>{event.date} - {event.location}</p>
      <p>{event.description}</p>
    </div>
  </div>
);

export default EventModal;
