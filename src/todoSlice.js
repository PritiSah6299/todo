import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState ={
    todos:[{ id: 1, text: 'demoText1', completed: false },
    { id: 2, text: 'demoText2', completed: false }]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo={id:nanoid(),text:action.payload,completed:false};
            state.todos.push(todo);
        },
        removeTodo: (state,action) => {
            state.todos=state.todos.filter((todo)=>todo.id !==action.payload);
        },
        Status:(state, action)=>{
            state.todos=state.todos.map((todo)=>todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
        }
    }
})


export const {addTodo,removeTodo,Status} = todoSlice.actions;
export default todoSlice.reducer;