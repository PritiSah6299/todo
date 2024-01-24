// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// src/App.js
import React, { useState } from 'react';
import { useRef } from 'react';
import TodoList from './TodoList';
import { useReducer } from 'react';

function App() {
  // const [todos, setTodos] = useState([
  //   { id: 1, text: 'demoText1', completed: false },
  //   { id: 2, text: 'demoText2', completed: false },
  // ]);


  const reducer = (state, action) => {
    switch (action.type) {
      case 'complete':
        const t=state.map((todo)=>todo.id === action.id ? { ...todo, completed: !todo.completed } : todo);
        return t;
      case 'update':
        const u=[...state, {id:new Date().getTime()+Math.random()*100, text: action.payload, completed: false}];
        return u;
      // case 'active':
      //   return state.filter(todo => !todo.completed);
      // case 'allCompleted':
      //   return state.filter(todo=>todo.completed);
      default:
        return state;
    }
  };
  
  
    const [todos, dispatch] = useReducer(reducer, [
        { id: 1, text: 'demoText1', completed: false },
        { id: 2, text: 'demoText2', completed: false },
      ]);

  const inputRef = useRef(null);


  // const handleToggle = (id) => {
  //   setTodos((prevTodos) =>
  //     prevTodos.map((todo) =>
  //       todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //     )
  //   );
  // };

  const inpst={
    height:'60px', width: '550px', borderColor:'blue',fontSize: '2em',alignItems:'center',
};

// const handleFocus = () => {
  
//   inpst.borderColor = 'blue';}; 

// const handleInputChange = async(event) => {
//   if (event.key === 'Enter'){
//   await setTodos((prevArray) => [...prevArray, {id:new Date().getTime()+Math.random()*100, text: event.target.value, completed: false}]);
//   // event.target.value='';
//   inputRef.current.value = '';
//   }
// };

const handleInputChange = async(event) => {
  if (event.key === 'Enter'){
  await dispatch({type:'update',payload: event.target.value});
  // event.target.value='';
  inputRef.current.value = '';
  }
};


let content=<TodoList todos={todos} onToggle={dispatch} />;
// const [content, setContent] =useState(<TodoList todos={todos} onToggle={dispatch} />);

const handleAll = () =>
{
  // setContent(<TodoList todos={todos} onToggle={dispatch} />);
};

const handleActive = () => {

 const a = todos.filter(todo => !todo.completed);
 console.log({a});

//  setContent(<TodoList todos={a} onToggle={dispatch} />);
// dispatch({type:'active'})

};

const handleCompleted=()=>
{
  const c =  todos.filter(todo => todo.completed);
  console.log({c});
  // setContent(<TodoList todos={c} onToggle={dispatch} />);
//  dispatch({type:'allCompleted'})
};





  return (

    <div>
      <h1 style={{textAlign: 'center', color: 'blue', fontSize: '5em', fontStyle: 'italic'}}>todos</h1>
      
      <div style={{alignItems:'center',display: 'flex',flexDirection: 'column',justifyContent: 'center',height:'auto',width:'800px', marginLeft:'325px'}}>
        <input type='text'
        placeholder='What needs to be done?'
        style={inpst}
        ref={inputRef}
        // onFocus={handleFocus}
        // value={inputValue}
        // onKeyPress={handleInputChange}
        onKeyDown={handleInputChange}
        />
      
       {content}
     
      <div style={{alignItems:'center',display: 'flex',flexDirection: 'row',justifyContent: 'center',marginTop:'35px'
      }}>
      <button onClick={handleAll}>All</button><button onClick={handleActive}>Active</button><button onClick={handleCompleted}>Completed</button>
      </div>
      </div>

      
      
    </div>

  );
}

export default App;
