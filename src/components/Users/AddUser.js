import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helper/Wrapper';

const AddUser = (props) => {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [enteredDesignation, setEnteredDesignation] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredDesignation.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name, age and designation'
      })
      return;
    }
    if (+enteredAge < 0) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age > 0'
      })
      return;
    }
    props.adduser(enteredUsername, enteredAge, enteredDesignation)
    setEnteredAge('');
    setEnteredUsername('')
    setEnteredDesignation('')
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  const designationChangeHandler = (event) => {
    setEnteredDesignation(event.target.value)
  }

  const onClickErrorModalHander = ()=>{
    setError('')
  }

  return (
    <Wrapper>
      { error && <ErrorModal title={error.title} message={error.message} clickHandler={onClickErrorModalHander}/> }
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Student Name</label>
          <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
          <label htmlFor="username">Designation</label>
          <input id="designation" type="text" value={enteredDesignation} onChange={designationChangeHandler} />
          <Button type="submit">Add Student</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;