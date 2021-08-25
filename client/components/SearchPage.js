import React from 'react';
// import { connect } from 'react-redux';
import NavBar from './NavBar';


const Search = () => {

  // Build  search bar for user to enter sitewide search
  

  // Query the database for search results

  // Populate a list of results from search
  let results = 'Hello world!'

    return(
      <>
        <NavBar/>
        <div>{results}</div>
      </>
    )
}

export default Search;