// src/TodoList.js
import React from 'react';
import Todo from './Todo';
import { useMemo } from 'react';

const TodoList = ({ todos, onToggle }) => {

  return (
    <div style={{alignItems:'left',display: 'flex',flexDirection: 'column',justifyContent: 'center',marginRight:'400px'}}>
      <ul>{todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onToggle={onToggle} />
      ))}</ul>

    </div>
  );
};

export default TodoList;
