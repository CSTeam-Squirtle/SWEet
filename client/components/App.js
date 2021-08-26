import React from 'react';
import Main from './Main';
import Login from './login'
import './../css/styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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