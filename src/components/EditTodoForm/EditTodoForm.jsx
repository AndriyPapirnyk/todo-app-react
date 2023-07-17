import React, { useState } from 'react';
import './EditTodoForm.css';

export const EditTodoForm = ({editTask, task}) => {

    const [value, setValue] = useState(task.task);

  return (
    <form action='submit' className="todoForm" onSubmit={(e) => {e.preventDefault(); editTask(value, task.id); setValue('')}}>
      <input value={value} type="text" placeholder='Edit todo...' onChange={(e) => setValue(e.target.value)}/>
      <button type='submit'>Edit</button>
    </form>
  );
}

