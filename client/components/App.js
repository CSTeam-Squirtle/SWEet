import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import store from '../store'
import Main from './Main';
import CreateTodoModal from './modals/CreateTodoModal'
import Navbar from '../components/NavBar'
import { loadTodo, addTodo } from '../actions/action'



const mapStateToProps = (state) => ({
    todoList: state.todoList.todoList,
})

function App(props) {
    const [show, setShow] = useState(false);
    useEffect(() => {
        store.dispatch(loadTodo());
    }, []);
    
    return(
       <div>
           <div>
               <Navbar />
           </div>
           <div>
           <button
        className="btn btn-add"
        type="button"
        onClick={() => setShow(true)}
      >
        Add Task
      </button>
      <CreateTodoModal
        onClose={() => setShow(false)}
        show={show}
        addTodo={addTodo}
      />
           </div>
           <div>
           <Main todoList={props.todoList}/>
           </div>
       </div>
    )
}

export default connect(mapStateToProps, null)(App);
