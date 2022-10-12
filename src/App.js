import React, { useState } from 'react';
import UsersList from './components/Users/UsersList';
import AddUser from './components/Users/AddUser';
import Wrapper from './components/Helper/Wrapper';

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
    <React.Fragment>
      <AddUser adduser={addUsersHandler} />
      {usersList.length > 0 && <UsersList users={usersList} />}
    </React.Fragment>
  );
}

export default App;