require('file-loader?name=[name].[ext]!../index.html');
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Login from './components/login';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

;

render(
    <Provider store={store}>
        <Router >
            <Login />
        </Router>
    </Provider>,
    document.getElementById('root')
  );

