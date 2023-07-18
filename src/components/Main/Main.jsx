import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoForm } from '../TodoForm/TodoForm';
import './Main.css';
import { Todo } from '../Todo/Todo';
import { EditTodoForm } from '../EditTodoForm/EditTodoForm';
uuidv4();

export const Main = () => {
    
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, {
            id: uuidv4(),
            task: todo,
            completed: false,
            edited: false
        }]);
        console.log(todos)
    }

    const toggleComplete = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, edited: !todo.edited} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, edited: !todo.edited} : todo))
    }

  return (
    <main className="main">
        <h1>Todo App</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
            todo.edited ? (
                <EditTodoForm editTask={editTask} task={todo} key={index} />
            ) : (
                <Todo task={todo} key={index} toggleComplete={toggleComplete} editTodo={editTodo}/>
            )
        ))}
    </main>
  );
}

