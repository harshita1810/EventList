import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="/images/fest1.jpg" alt="Profile" />
        <h3>Harshita</h3>
        <p>Visual Designer</p>
      </div>
      <nav className="menu">
        <a href="#search-events" className="active">Search Events</a>
        <a href="#inbox">Inbox</a>
        <a href="#invites">Invites</a>
        <a href="#standups">Standups</a>
        <a href="#calendar">My Calendar</a>
        <a href="#settings">Settings</a>
      </nav>
      <div className="favorites">
        <h4>Favorite Locations</h4>
        <ul>
          <li>🎤 XD Club, Toronto</li>
          <li>🎬 Avengers Club, LA</li>
          <li>🏠 Super Stay, Lahore</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
