import { useState } from 'react';
import AddTask from './AddTask/AddTask';
import './index.css';
import TaskList from './TaskList/TaskList';

function App() {

  const mainData = [
    {
      task: "Create a new Video",
      id: 1
    },

    {
      task: "Eat Clean Water",
      id: 2
    }

  ]

  const [taskData, setTaskData] = useState(mainData)

  const newData = (freshData) =>{
    setTaskData((prevData)=>{
      return [freshData, ...prevData]
    })
  };

  const deleteData = (deleteId) =>{
    console.log(deleteId)

    const afterData = [...taskData].filter(data =>{
      if(data.id !== deleteId){
        return data
      }
    })

    setTaskData(afterData)
  }


  return (
    <div className="App">
      <div className="wrapper">
        <h1>My Tasks</h1>

        <AddTask addNewTask = { newData }/>

        <div className="task-list-con">
          <TaskList data = { taskData } remData = { deleteData }/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
