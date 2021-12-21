import React, { useState } from "react";

function Search({ setSearchName }) {
  

  function handleSearch(e) {
    setSearchName(e.target.value)
  }


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
