require('file-loader?name=[name].[ext]!../index.html');
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
;

render(
    <Provider store={store}>
        document.getElementById('root')
    </Provider>,
    <App />
  );