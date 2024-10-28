import React from "react";

const SearchBar = ({ onSearch }) => (
  <input
    type="text"
    placeholder="Search by name or location..."
    onChange={onSearch}
    className="search-bar"
  />
);

export default SearchBar;
