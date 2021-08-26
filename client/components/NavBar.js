import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch
} from "react-router-dom";
import ContactPage from './contactsPage'
export default function NavBar() {
  return (
    <Router>
      <Switch>
      <div>
        <nav>
          <ul>
            <li>
            <Route exact path="/Home" component={MainPage} />
            </li>
            <li>
              <a href="https://calendar.google.com/calendar/embed?src=c_diji5n0pcjoe3kvceh5bndvjik%40group.calendar.google.com&ctz=America%2FLos_Angeles">Calendar</a>
            </li>
            <li>
            
            <Route exact path="/contacts" component={ContactPage} />
            </li>
            <li>
            <Route exact path="/profile" component={ProfilePage} />
            </li>
            <li>
            <Route exact path="/search" component={SearchPage} />
            </li>
          </ul>
        </nav>
      </div>
      </Switch>
    </Router>
  )
};