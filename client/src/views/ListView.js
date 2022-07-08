import React from 'react';
import List from '../components/List';
import useIsAuthenticated from '../utils/useIsAuthenticated';
import ModalAlertSuccess from '../components/ModalAlertSuccess';

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
      <ModalAlertSuccess/>
    </>
  )
}

export default ListView