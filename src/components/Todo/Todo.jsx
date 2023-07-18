import './Todo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({task, toggleComplete, editTodo}) => {
  return (
    <div className="todo">
      <p>{task.task}</p>
      <div>
        <FontAwesomeIcon className='todo__icon' icon={faPenSquare} onClick={() => editTodo(task.id)}/>
        <FontAwesomeIcon className='todo__icon' icon={faCheck} onClick={() => toggleComplete(task.id)} />
      </div>
    </div>
  );
}

