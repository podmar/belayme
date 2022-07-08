import React, { useContext } from 'react';
import ButtonLogin from '../components/ButtonLogin';
import { AuthContext } from '../context/AuthContext';
import ModalAlert from '../components/ModalAlert';


function Inbox() {
  const {user} = useContext(AuthContext);


  return (
    <>
      <div>Inbox</div>
      {user ? <p>{`Welcome ${user.nickname}`}</p> : 
        <div>
          <p>Please log in to see your inbox.</p>
          <ButtonLogin/>
        </div>
      }
      <ModalAlert/>
    </>
  )
}

export default Inbox