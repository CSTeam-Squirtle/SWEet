import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import login from './pages/login.js';
import create from './pages/create.js';

function Routes() {
  <Switch>
         <Route path= '/' exact componenent={Login}/>
         <Route path= '/home' exact componenent={Main}/>
         <Route path= '/contacts' exact componenent={ContactPage}/>
         <Route path= '/profile' exact componenent={Profile}/>
         <Route path= '/profile' exact componenent={Profile}/>
  </Switch>
};

export default Routes;