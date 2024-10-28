import React, { useState } from "react";
import events from "../data/events.json";
import EventCard from "../components/EventCard";
import EventModal from "../components/EventModal";
import SearchBar from "../components/SearchBar";

const EventListPage = () => {
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSearch = (e) => setSearch(e.target.value.toLowerCase());
  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(search) ||
      event.location.toLowerCase().includes(search)
  );

  return (
    <div className="event-list-page">
      <SearchBar onSearch={handleSearch} />
      <div className="event-list">
        {filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onClick={() => setSelectedEvent(event)}
          />
        ))}
      </div>
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
};

export default EventListPage;
