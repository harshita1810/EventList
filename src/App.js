import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import EventMap from './components/EventMap';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import './App.css';
import EventListPage from "./pages/EventListPage";

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <EventMap />
        <EventListPage onSelectEvent={setSelectedEvent} />
      </main>
    </div>
  );
}

export default App;
