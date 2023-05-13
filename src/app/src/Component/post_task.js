import './App.css';
import axiosInstance from '../AuthComp/AxiosInstance'
import settodoTask from './view_task'
import React, { useState , useEffect} from 'react';
const post_task = () => {
  
  const [todotaskin, settodotaskin] = useState({todos : ''});
  useEffect(() => {
    fetch(`http://localhost:8000/todos`).then((data)=> data.json).then((response) => settodoTask(response), [settodoTask])
  })
  const submitTodo = () => {
    axiosInstance.post(`http://localhost:8000/todos`, {
      todos : todotaskin.todos,
  }).then((res) => {alert("task submitted"); window.location.reload()});
  }
  return (
      <div>
        <h1>Create a ToDo</h1>
        <form>
          <div>
            <label for="todo">ToDo: </label>
            <input type="text" value={todotaskin.todos} onChange={(e) => settodotaskin({todos : e.target.value})} />
          </div>
          <div style={{"marginTop": "5px"}}>
            <button onClick={submitTodo}>Add ToDo!</button>
          </div>
        </form>
      </div>
    
  );
}

export default post_task;