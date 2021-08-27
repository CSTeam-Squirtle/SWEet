import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
export default function CreateAccount() {
    const [email, setUsername] = useState();
    const [password, setPassword] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [phone, setPhone] = useState();
    const [linkedin, setlinkedin] = useState()
    const [message, setMessage] = useState()
    const [github, setgithub] = useState()
    const [missingInfo, setmissingInfo] = useState(false)
    const history = useHistory();
    const handleSubmit = event => {
        event.preventDefault();
        if (!firstname || !lastname || !username || !password) {
            setmissingInfo(true);
        } else {
             // sends firstname, lastname, username, password to server
            fetch('/create', {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password, firstname, lastname, email, phone, linkedin, message, github})
            })
            .then(data => {
                data.json()
                // redirects to login page
                history.push('/login')
            });
        }
    }
    return(
        <div className='login'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Email</p>
                    <input type='text' name='email' onChange={event => setUsername(event.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type='password' name='password' onChange={event => setPassword(event.target.value)}/>
                </label>
                <label>
                    <p>First Name</p>
                    <input type='text' name='firstname' onChange={event => setFirstname(event.target.value)}/>
                </label>
                <label>
                    <p>Last Name</p>
                    <input type='text' name='lastname' onChange={event => setLastname(event.target.value)}/>
                </label>
                <label>
                    <p>Phone Number</p>
                    <input type='text' name='phonenumber' onChange={event => setPhone(event.target.value)}/>
                </label>
                <label>
                    <p>LinkedIn</p>
                    <input type='text' name='linkedin' onChange={event => setlinkedin(event.target.value)}/>
                </label>
                <label>
                    <p>Message</p>
                    <input type='text' name='message' onChange={event => setMessage(event.target.value)}/>
                </label>
                <label>
                    <p>Github</p>
                    <input type='text' name='github' onChange={event => setgithub(event.target.value)}/>
                </label>
                <div className='loginButton'>
                    <button type='submit' >Login</button>
                </div>
                {missingInfo ? <div>Please fill in all fields</div>:null}
            </form>
        </div>
    );
}