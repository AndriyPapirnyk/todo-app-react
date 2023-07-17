import React, { useState } from 'react';
import './TodoForm.css';

export const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState('');

  return (
    <form action='submit' className="todoForm" onSubmit={(e) => {e.preventDefault(); addTodo(value); setValue('')}}>
      <input value={value} type="text" placeholder='Write todo...' onChange={(e) => setValue(e.target.value)}/>
      <button type='submit'>Add</button>
    </form>
  );
}

