import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import Login from './login';
import ContactPage from './contactsPage';
import Profile from './Profile'
import Search from './SearchPage'
import Signup from './Signup'


function Routes() {
  return (
 <Switch>
         <Route exact path= '/'  component={Main}></Route>
         <Route exact path= '/login'  component={Login}></Route>
         <Route exact path= '/search'  component={Search}></Route>
         <Route exact path= '/contacts' component={ContactPage}></Route>
         <Route exact path= '/profile'  component={Profile}></Route>
         <Route exact path= '/signup'  component={Signup}></Route>
  </Switch>
  )
};

export default Routes;