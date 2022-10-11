import React, { useState } from 'react';
import UsersList from './components/Users/UsersList';
import AddUser from './components/Users/AddUser';

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
    <div>
      <AddUser adduser={addUsersHandler} />
      {usersList.length > 0 && <UsersList users={usersList} />}
    </div>
  );
}

export default App;