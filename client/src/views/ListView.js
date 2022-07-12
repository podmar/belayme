import React from 'react';
import List from '../components/List';
import useIsAuthenticated from '../utils/useIsAuthenticated';
import ModalAlert from '../components/ModalAlert';

function ListView() {
  const isUserLoggedIn = useIsAuthenticated();

  return (
    <>
      <div>
        <List/>
      </div>
      <ModalAlert/>
    </>
  )
}

export default ListView