import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const NewTodo = ({ handlePass }) => {
  const [todo, setTodo] = useState({
    email: '',
    firstname: '',
    issue: '',
    date: '',
  });
  const [formsError, setformsError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const { email, firstname, issue, date } = todo;

  useEffect(()=>{
    if (Object.keys(formsError).length === 0 && isSubmit) {
      console.log(todo);
    }
  },[formsError])
  const handleChange = (e) => {
    setTodo((oldTodo) => {
      return { ...oldTodo, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setformsError(validate(todo));
    setIsSubmit(true);
    handlePass(todo);
    setTodo({ email: '', firstname: '', issue: '', date: '' });
  };
  const validate = (values) => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      error.email = 'Please Input  email';
    } else if (!regex.test(values.email)) {
      error.email = 'Your Email is not valid';
    }
    if (!values.firstname) {
      error.firstname = 'Please Input  first name';
    }
    if (!values.issue) {
      error.issue = 'Please Input your Issues';
    }
    if (!values.date) {
      error.date = 'add your Date';
    }
    return error
  };
  return (
    <>
      <Container>
        <Row>
          <Form className='mb-5' onSubmit={handleSubmit}>
            <Form.Label>
              <h4>Place Your Email</h4>
            </Form.Label>
            <Form.Control
              size='lg'
              type='email'
              required
              placeholder='place your name'
              name='email'
              value={email}
              onChange={handleChange}
            />
            <br />
            <p>{formsError.email}</p>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>
                <h4>Place Your Name</h4>
              </Form.Label>
              <Form.Control
                size='lg'
                type='text'
                required
                placeholder='place your name'
                name='firstname'
                value={firstname}
                onChange={handleChange}
              />
                 <p>{formsError.firstname}</p>
              <br />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>
                <h4>Place Your Issue</h4>
              </Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                required
                name='issue'
                value={issue}
                onChange={handleChange}
              />
              <br />
              <p>{formsError.issue}</p>
            </Form.Group>
            <h4>Issue Date</h4>
            <input
              type='date'
              name='date'
              id=''
              value={date}
              required
              onChange={handleChange}
            />
            <Button type='submit'>Submit</Button>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default NewTodo;
