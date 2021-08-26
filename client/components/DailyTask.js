import React, { useState } from 'react';
import EditJobApplicationModal from './modals/CreateTodoModal';


const DailyTask = (message) => {
    console.log(message)
    return (
        <li>
           {message.message} 
        </li>
    );
}
export default DailyTask;
