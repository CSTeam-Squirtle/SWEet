import React, { Component } from 'react';
import {NavLink, Switch, Route, Router } from 'react-router-dom';
import Main from './Main'
import Login from './login'
import ContactPage from './contactsPage'
// import Profile from './'
import SearchPage from './SearchPage'
import Profile from './Profile';


function Routes() {
  return(
   <Router>
      <Switch>
        <Route path= '/' component={Login}>
          <Login />
         </Route>
        <Route path= '/home'  component={Main}>
          <Main />
        </Route> 
        <Route path= '/contacts'  component={ContactPage}>
            <ContactPage />
        </Route>
        <Route path= '/profile'  component={Profile}>
          <Profile />
        </Route>
        <Route path= '/search' component={SearchPage}>
          <SearchPage />
        </Route>
      </Switch> 
   </Router> 
  )

};

export default Routes;