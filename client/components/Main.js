import React from 'react';
import { connect } from 'react-redux';
import DailyTask from './DailyTask'
import JobApps from './JobApps'



const Main = (todoList) => {
    const todo = todoList.todoList;
  
    return(
        <div>
        <h2 className="heading">Task List</h2>
        <div className="list">
            <ol>
          {todo.map((todo, index) => (
              <DailyTask message={todo} id={index}/>
            ))}
            </ol>
        </div>
      </div>
    );

}
export default Main;
// export default connect(mapStateToProps, mapDispatchToProps)(Main)