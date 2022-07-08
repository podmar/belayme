import React, { useContext } from 'react';
import ButtonLogin from '../components/ButtonLogin';
import { AuthContext } from '../context/AuthContext';
import ModalAlertSuccess from '../components/ModalAlertSuccess';


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
      <ModalAlertSuccess/>
    </>
  )
}

export default Inbox