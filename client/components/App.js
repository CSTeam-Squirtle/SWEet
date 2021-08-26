import React from 'react';
import Main from './Main';
import Login from './login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './../css/styles.css';

function App() {
    return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                </Switch>
            </Router>
    )
}

export default App;