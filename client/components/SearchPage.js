import React from 'react';
// import { connect } from 'react-redux';
import NavBar from './NavBar';


const Search = () => {

  let variable = 'Hello world!'

    return(
      <>
        <NavBar/>
        <div>{variable}</div>
      </>
    )
}

export default Search;