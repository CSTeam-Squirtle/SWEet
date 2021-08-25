import React from 'react';
import Main from './Main';
import Login from './login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Main}></Route>
                </Switch>
            </Router>
    )
}

export default App;