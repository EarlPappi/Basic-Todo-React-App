import React from 'react';
import Task from './Task';


const TaskList = (props) => {
    const comotData = (toRem)=>{
        props.remData(toRem)
    }

    return ( 
        <div className="task-list">
            { props.data.map(singleTask =>(
                <Task taskTitle = { singleTask.task } taskId = { singleTask.id } key ={ singleTask.id } flingData = { comotData }/>
            )) }           

        </div>

    )};
 
export default TaskList;