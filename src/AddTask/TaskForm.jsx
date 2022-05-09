import React, { useState } from 'react';



const TaskForm = (props) => {
    const [ userTask, setUserTask ] = useState('')

    
    const handleChange = (e)=>{
        setUserTask(e.target.value);
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        const userInput = {
            task: userTask,
            id: Math.random()
        }

        props.addTheNew(userInput);

        setUserTask('')

    }


    return ( 
        <form onSubmit={ handleSubmit }>
            <input type="text" onChange={ handleChange } value={ userTask }/>
            <button>Add Task</button>
        </form>
     );
}
 
export default TaskForm;