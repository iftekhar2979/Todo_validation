import React from 'react';
import Table from 'react-bootstrap/Table';
import Todo from './Todo';

const Todos = ({ myTodo ,handleDelete}) => {
  return (
    <div>
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Issue</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {myTodo.map((item) => {
            return <Todo mytodo={item} key={item.id} handleDelete={handleDelete}></Todo>;
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Todos;
