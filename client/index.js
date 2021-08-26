require('file-loader?name=[name].[ext]!../index.html');
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Login from './components/login';
import store from './store';
import SearchPage from './components/SearchPage.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/styles.css';
import { LoaderTargetPlugin } from 'webpack';

;

render(
    <Provider store={store}>
        <Router >
            <Login />
        </Router>
    </Provider>,
    document.getElementById('root')
  );

