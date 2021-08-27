import React, { useEffect} from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/action';
import NavBar from './NavBar';


function Profile(){
    const sessionLists = useSelector((state) => state.sweet)
    console.log(sessionLists)
    const handleMessage = (e) =>{
        e.preventDefault();
        const messageInput = documenet.getElementById('messageArea')
        const message = messageInput.value;
        const id = sessionLists.id
        messageInput.value = ''
        console.log(id, message);
        editMess(message, id)
    }

    const editMess = (message, id) =>{
        fetch('/api/profile',
        {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              message: message,
              id: id
            })
        }
        )
        .then(res => res.json())
        .then((data)=>{
            console.log(data);
        })
    }


    return (
        <div>
            <h1>
                Profile
            </h1>
            <h3>
                First Name: {sessionLists.firstname}
            </h3>
            <br></br>
            <h3>
                Last Name: {sessionLists.lastname}
            </h3>
            <br></br>
            <h3>
                Emal: {sessionLists.email}
            </h3>
            <br></br>
            <h3>
                Phone: {sessionLists.phone}
            </h3>
            <br></br>
            <h3>
                Linkedin: {sessionLists.linkedin}
            </h3>
            <br></br>
            <h3>
                Github: {sessionLists.github}
            </h3>
            <br></br>
            <h3>
                Message: {sessionLists.message}
            </h3>
            <br></br>
            <h3>Change Message</h3>
            <form className='messagaeForm' onSubmit={handleMessage}>
                <label>
                    <textarea id='messageArea' value={sessionLists.message} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Profile;