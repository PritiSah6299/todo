// src/Todo.js
import React from 'react';
import crossImg from './x-mark-16.png';
import { removeTodo, Status } from './todoSlice';

const Todo = ({todo, dispatch }) => {

  const handleDelete = () =>{
    dispatch(removeTodo(todo.id));
  }

  return (
    <div>
      <input
        type="checkbox"
        style={{height:'25px',width:'25px'}}
        checked={todo.completed}
        onChange={() => dispatch(Status(todo.id))}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none',fontSize:'2em', color:todo.completed?'grey':'black' }}>
        {todo.text}
      </span>&emsp;
      <img src={crossImg}
      onClick={handleDelete}/>
    </div>
  );
};

export default Todo;
