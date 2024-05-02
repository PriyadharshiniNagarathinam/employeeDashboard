import React from "react";

const Search = ({ searchId, setSearchId, handleSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        className="search-input"
        placeholder="Search by ID"
      />
      <button onClick={handleSearch} className="button">
        Search
      </button>
    </div>
  );
};

export default Search;
