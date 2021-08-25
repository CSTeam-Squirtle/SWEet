import React from 'react';

const SearchBar = () => {
  return(  <form action="/" method="get">
  <label htmlFor="header-search">
      <span className="visually-hidden"></span>
  </label>
  <input
      type="text"
      id="header-search"
      placeholder="Enter a name, etc."
      name="searchbar" 
  />
  <button type="submit">Search</button>
</form>)

};

export default SearchBar;