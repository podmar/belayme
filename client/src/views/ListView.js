import React from 'react';
import List from '../components/List';
import ModalAlert from '../components/ModalAlert';

function ListView() {
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