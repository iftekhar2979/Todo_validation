import React from 'react';
import Button from 'react-bootstrap/Button';


const Todo = ({mytodo,handleDelete}) => {
  const {id,todo}=mytodo
    const {firstname,date,email,issue}=todo
    
  return (
   <>
          <tr>
            <td>{email}</td>
            <td>{firstname}</td>
            <td >{issue}</td>
            <td>{date}</td>
             <td><Button variant="danger" onClick={()=>handleDelete(id)}>Delete</Button></td>
          </tr>
       
    </>
  );
};

export default Todo;
