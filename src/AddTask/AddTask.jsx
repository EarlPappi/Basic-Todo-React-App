import React from 'react';
import TaskForm from './TaskForm';

const AddTask = (props) => {

    const takeNew = (incomingData)=>{
        props.addNewTask(incomingData)
    }
    return ( 
        <div className="create-task">
            <TaskForm addTheNew = { takeNew }/>
        </div>
     );
}
 
export default AddTask;