import React from 'react';
import { NavLink} from 'react-router-dom';
import { createBrowserHistory } from 'history'

const newHistory = createBrowserHistory();

function NavBar() {
  return (
        <nav>
          <ul>
            <li>
            <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <a href="https://calendar.google.com/calendar/embed?src=c_diji5n0pcjoe3kvceh5bndvjik%40group.calendar.google.com&ctz=America%2FLos_Angeles">Calendar</a>
            </li>
            <li>
            <NavLink to="/contacts">Contacts</NavLink>
            </li>
            <li>
            <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
            <NavLink to="/search">Search</NavLink>
            </li>
            <li>
            <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </nav>
  )
}

export default NavBar