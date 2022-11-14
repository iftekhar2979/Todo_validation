import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewTodo from './NewTodo';
import Todos from './Todos';

const Home = () => {
    const [todos,setTodos]=useState([])
    
   
    const handlePass=(todo)=>{
        setTodos((prevTodos)=>{
            return [...prevTodos,{id:uuidv4(),todo}]

        })
    }
    const handleDelete=(id)=>{
const filtered=todos.filter(todo=>todo.id!==id)
setTodos(filtered)
    }
    return (
        <div>
             <NewTodo handlePass={handlePass}></NewTodo>
            <Todos myTodo={todos} handleDelete={handleDelete}></Todos>
            
        </div>
    );
};

export default Home;