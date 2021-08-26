import Main from './Main';
import React, { useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, BrowserHistory } from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux';
// Redux Imports (actions)
import * as actions from '../actions/action';
// import SignUp from '/signupPage'
// function mapStateToProps(state) {
//     return {
//         session: state.sweet.isLoggedIn
//     }
// }
function Login (){
 const dispatch = useDispatch();
 const updateSession = () => dispatch(actions.updateSession());
 const updateUser = (userInfo) => dispatch(actions.updateUser(userInfo));


 const session = useSelector((state) => state.sweet.isLoggedIn);

 // callback function invoked when 'login' button is clicked
 const handleLogin = (e) => {
   e.preventDefault(); // prevents form submit from reloading page
   const emailInput = document.getElementById('email');
   const passwordInput = document.getElementById('password');
   const email = emailInput.value;
   const password = passwordInput.value;
   // clears input fields after login
   emailInput.value = '';
   passwordInput.value = '';
  
   authUser(email, password);
 };
 
 // callback function which will send request to endpoint http://localhost:3000/login 
 const authUser = (email, password) => {
   fetch('/api/login', 
     { 
       method: 'POST', 
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         email: email,
         password: password
       })
     })
     .then((response) => {
        if (!response.ok) {
          console.log(response)
            
          }
          else {
            updateSession(); // loggedIn = true 
            updateUser(response); // update user info in reducer
          }
     })
     .catch((err) => {
       console.log(err);
     });
 };

 // Upon successful login, redirect to /app location and render the App component

 if (session){
   return (
     <Router
       
     >
       <Redirect to="/app"/>
       <Switch>
         {/* <Route component={App} exact path="/app" /> */}
         <Route path="/app">
           <Main />
         </Route>
       </Switch> 
     </Router>
   );
 }
 
 // Else render the login page
 return (
   <Router 
    
   >
     <Route id="route" path="/"> 
       <header>
        Title?
       </header>
       <br></br>
       <br></br>
       <br></br>
       <div className="render">
         <div className="header">
           <h1 className="tabTitle">Login</h1>
         </div>
         <div className="settings">
           <form className='loginForm' onSubmit={handleLogin}>
             {/* <input id="username" type="text" placeholder="username"></input> */}
             <input id="email" label="Email" type="email" />
             <br></br>
             <br></br>
             {/* <input id="password" type="password" placeholder="password"></input> */}
             <input id="password" label="Password" type="password" />
             {/* <input type="submit"></input> */}
             <br></br>
             <button  color="primary" type="submit" size="medium">
               Login
             </button>
             <hr></hr>
             
           </form>
         </div>
       </div>
     </Route>
   </Router>
 );
};

export default Login;