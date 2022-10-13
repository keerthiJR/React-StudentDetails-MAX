import React, { useRef, useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [error, setError] = useState();

  const inputnameRef = useRef();
  const inputageRef = useRef();
  const inputdesignationRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredUsernameRef = inputnameRef.current.value;
    const enteredAgeRef = inputageRef.current.value;
    const enteredDesignationRef = inputdesignationRef.current.value;
    
    if (enteredUsernameRef.trim().length === 0 || enteredDesignationRef.trim().length === 0 || enteredAgeRef.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name, age and designation'
      })
      return;
    }
    if (+enteredAgeRef < 0) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age > 0'
      })
      return;
    }

    props.adduser(enteredUsernameRef, enteredAgeRef, enteredDesignationRef);
    inputnameRef.current.value = '';
    inputageRef.current.value = ''
    inputdesignationRef.current.value = ''
  };

  const onClickErrorModalHander = ()=>{
    setError(null)
  }

  return (
    <div>
      { error && <ErrorModal title={error.title} message={error.message} clickHandler={onClickErrorModalHander}/> }
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Student Name</label>
          <input id="username" type="text" ref={inputnameRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number"ref={inputageRef}/>
          <label htmlFor="username">Designation</label>
          <input id="designation" type="text"  ref={inputdesignationRef}/>
          <Button type="submit">Add Student</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;