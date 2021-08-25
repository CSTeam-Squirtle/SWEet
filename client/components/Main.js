import React from 'react';
// import { connect } from 'react-redux';
// import DailyTask from './DailyTask'
// import JobApps from './JobApps'
import NavBar from './NavBar';


const Main = () => {
    return(
        <div id='NavBar'>
             <NavBar />
             <div>
                 <ul>
                     <h1>Task</h1>
                 </ul>
             </div>
        </div>

    )
}

export default Main;