import React, { useState } from 'react';
import { useRef } from 'react';
import TodoList from './TodoList';
import { useReducer } from 'react';
import { useMemo } from 'react';
import styled from 'styled-components';

const StyledButton=styled.button`
background-color: blue;
color: white;
padding 10px 20px;
border: none;
border-radius: 5px;
cursor: pointer;
`;

const reducer = (state, action) => {
  switch (action.type) {
    case 'complete':
      return state.map((todo)=>todo.id === action.id ? { ...todo, completed: !todo.completed } : todo);
    case 'update':
      return [...state, {id:new Date().getTime()+Math.random()*100, text: action.payload, completed: false}];    
    default:
      return state;
  }
};

function App() { 
    const [todos, dispatch] = useReducer(reducer, [
        { id: 1, text: 'demoText1', completed: false },
        { id: 2, text: 'demoText2', completed: false },
      ]);

    const [filter, setFilter] = useState('all');

    const filterTodos= useMemo(()=> {return todos.filter(todo => {
      if (filter==='active')
      {
        return !todo.completed;
      }else if (filter==='completee')
      {
        return todo.completed;
      }
      else{
        return true;
      }

    })},[filter,todos]);


  const inputRef = useRef(null);

  const inpst={
    height:'60px', width: '550px', borderColor:'blue',fontSize: '2em',alignItems:'center',
};

const handleInputChange = async(event) => {
  if (event.key === 'Enter'){
  await dispatch({type:'update',payload: event.target.value});
  inputRef.current.value = '';
  }
};


  return (

    <div>
      <h1 style={{textAlign: 'center', color: 'blue', fontSize: '5em', fontStyle: 'italic'}}>todos</h1>
      
      <div style={{alignItems:'center',display: 'flex',flexDirection: 'column',justifyContent: 'center',height:'auto',width:'800px', marginLeft:'325px'}}>
        <input type='text'
        placeholder='What needs to be done?'
        style={inpst}
        ref={inputRef}
        onKeyDown={handleInputChange}
        />
      
      <TodoList todos={filterTodos} onToggle={dispatch} />
     
      <div style={{alignItems:'center',display: 'flex',flexDirection: 'row',justifyContent: 'center',marginTop:'35px'
      }}>
      <StyledButton onClick={()=>setFilter('all')}>All</StyledButton>&nbsp;<StyledButton onClick={()=>setFilter('active')}>Active</StyledButton>&nbsp;<StyledButton onClick={()=>setFilter('completee')}>Completed</StyledButton>
      </div>
      </div> 
      
    </div>

  );
}

export default App;
