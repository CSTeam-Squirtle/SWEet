import React from 'react';
import Main from './Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return(
            // <Router>
            //     <Switch>
            //         <Route exact path="/" component={Main} />

            //     </Switch>
            // </Router>
            <Main/>
    )
}

export default App;