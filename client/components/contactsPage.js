import Main from './Main';
import App from './App';
import React, { useEffect} from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import Navbar from './NavBar'
import * as actions from '../actions/action';


export function ContactPage(){
    const dispatch = useDispatch();
    const contactList = (data) => dispatch(actions.contactList(data));

    
    useEffect(() => {
        fetch('/api/contacts')
        .then(res => res.json())
        .then(data => 
            console.log(data)
        )
        .catch(err => console.log(err)
        )
    },[]);

    return (
        <div className='theContacts'>
            <Navbar />
            <ul>
                <li>Hi</li>
            </ul>
        </div>
    )



}