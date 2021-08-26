require('file-loader?name=[name].[ext]!../index.html');
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from './components/App'
import Main from './components/Main'
import Login from './components/login'
import ContactPage from './components/contactsPage'
// import Profile from './'
import SearchPage from './components/SearchPage'
import Profile from './components/Profile';
import { createBrowserHistory } from "history";
import './css/styles.css'

const history = createBrowserHistory()

;

render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path= '/'>
                <Login />
            </Route>
            <Route path= '/home'>
          <Main />
            </Route> 
            <Route path= '/contacts'>
            <ContactPage />
        </Route>
        <Route path= '/profile'>
          <Profile />
        </Route>
        <Route path= '/search'>
          <SearchPage />
        </Route>
      </Switch> 
   </Router> 
    </Provider>,
    document.getElementById('root')
  );

