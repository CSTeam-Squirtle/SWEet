import React from 'react';
import { connect } from 'react-redux';
import DailyTask from './DailyTask'
import JobApps from './JobApps'
import NavBar from './NavBar';
// import DailyTask from './DailyTask';

const Main = () => {

    return(
        <div>
          <h3>
            Welcome to the Home Page, Please Log in!
          </h3>
          <div>
          {/* <DailyTask/> */}
          </div>
        </div>

    );
}
export default Main;
// export default connect(mapStateToProps, mapDispatchToProps)(Main)