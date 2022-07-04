import React from 'react'
import List from '../components/List'
import useIsAuthenticated from '../utils/useIsAuthenticated';

function ListView() {
  const isUserLoggedIn = useIsAuthenticated();

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