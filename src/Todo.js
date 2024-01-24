// src/Todo.js
import React from 'react';

const Todo = ({ todo, onToggle }) => {
  return (
    <div>
      <input
        type="checkbox"
        style={{height:'25px',width:'25px'}}
        checked={todo.completed}
        onChange={() => onToggle({type:'complete',id:todo.id})}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none',fontSize:'2em', color:todo.completed?'grey':'black' }}>
        {todo.text}
      </span>
    </div>
  );
};

export default Todo;
