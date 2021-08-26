import React from 'react';

import { NavLink, Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'

const newHistory = createBrowserHistory();

function NavBar() {
  return (
    <Router history={newHistory}>
      <div>
        <nav>
          <ul>
            <li>
            <NavLink exact to="/home">Home</NavLink>

            </li>
            <li>
              <a href="https://calendar.google.com/calendar/embed?src=c_diji5n0pcjoe3kvceh5bndvjik%40group.calendar.google.com&ctz=America%2FLos_Angeles">Calendar</a>
            </li>
            <li>
            <NavLink exact to="/contacts">Contacts</NavLink>
            </li>
            <li>
            <NavLink exact to="/profile">Profile</NavLink>
            </li>
            <li>
            <NavLink exact to="/search">Serach</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      </Switch>
    </Router>
  )
}

export default NavBar