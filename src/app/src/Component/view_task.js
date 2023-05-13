import './App.css';

import React, { useState , useEffect} from 'react';
const view_task = () => {
  const [todotask, settodoTask] = useState([])
  
  useEffect(() => {
    fetch(`http://localhost:8000/todos`)
    .then((data)=> data.json)
    .then((response) => settodoTask(response), [settodoTask])
  })
  return (
    <div className="App">
      <div>
        {
          todotask.map((item, index) => {
            return (<>
              <div>
        <h1 key={index}>{item}</h1>
      </div>
            </>)
          })
        }
      </div>
      
    </div>
  );
}

export default view_task;