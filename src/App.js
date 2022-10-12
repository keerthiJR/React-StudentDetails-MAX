import React, { useState } from 'react';
import UsersList from './components/Users/UsersList';
import AddUser from './components/Users/AddUser';
import ReactDom from 'react-dom'

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUsersHandler = (uName, uAge, uDesignation) => {
    setUsersList(prevExpenses => {
      return [{
        id: usersList.length + 1,
        name: uName,
        age: uAge,
        designation: uDesignation
      }, ...prevExpenses]
    })
  }
  console.log(usersList)
  return (
    ReactDom.createPortal(
      <React.Fragment>
        <AddUser adduser={addUsersHandler} />
        {usersList.length > 0 && <UsersList users={usersList} />}
      </React.Fragment>,
      document.getElementById('main'))

  );
}

export default App;