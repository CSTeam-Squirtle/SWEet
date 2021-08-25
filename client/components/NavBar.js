import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function NavBar() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="https://calendar.google.com/calendar/embed?src=c_diji5n0pcjoe3kvceh5bndvjik%40group.calendar.google.com&ctz=America%2FLos_Angeles">Calendar</a>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  )
};