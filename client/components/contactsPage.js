import Main from './Main';
import App from './App';
import React, { useEffect} from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import Navbar from './NavBar'
import * as actions from '../actions/action';


export function ContactPage(){
    const dispatch = useDispatch();
    const contactList = (data) => dispatch(actions.contactList(data));
    const contactLists = useSelector((state) => state.contact.contactList)
    
    // useEffect(() => {
    //     fetch('/api/contacts')
    //     .then(res => res.json())
    //     .then(data => 
    //         contactList(data)
    //     )
    //     .catch(err => console.log(err)
    //     )
    // },[]);

    // const resultList = contactLists.map((contact)=> (
    //     <li key={contact.id}>{contact.firstname}</li>)
    // )


    return (
        <div className='theContacts'>
            
            <h1>Contacts</h1>
            {contactLists.map((contact) => <li key={contact.id}>First Name: {contact.firstname} | Last Name: {contact.lastname} | Email: {contact.email} | Phone: {contact.phone} | Linkedin {contact.linkedin} | GitHub: {contact.github} | Message: {contact.message}</li>)}
         </div>
    )



}
export default ContactPage