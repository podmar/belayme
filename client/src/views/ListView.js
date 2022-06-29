import React from 'react'
import List from '../components/List'
import UseIsAuthenticated from '../utils/UseIsAuthenticated';

function ListView() {
  const isUserLoggedIn = UseIsAuthenticated();

  return (
    <>
      <div>
      {isUserLoggedIn ? "User is currently logged in" : "No user logged in."}
      </div>

      <div>
        <List/>

      </div>
    </>
  )
}

export default ListView