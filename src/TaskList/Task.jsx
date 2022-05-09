import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Task = (props) => {

    const handleCheck = ()=>{
        
    }

    const handleDelete = ()=>{

        props.flingData(props.taskId)
    }
    return (
        <div className="inner-view" >
            <p>{ props.taskTitle }</p>
            <input type="checkbox" checked={ handleCheck }/>
            <button className='deleteBtn' onClick={ handleDelete }><FontAwesomeIcon icon={faTrashCan} className="fa-icon" /></button>
        </div>
    );
}

export default Task;