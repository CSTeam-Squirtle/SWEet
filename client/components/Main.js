import React from 'react';
import { connect } from 'react-redux';
import DailyTask from './DailyTask'
import JobApps from './JobApps'
import NavBar from './NavBar';

const Main = () => {

    return(
        <div>
          <NavBar />
        </div>

          
       
    );

}
export default Main;
// export default connect(mapStateToProps, mapDispatchToProps)(Main)