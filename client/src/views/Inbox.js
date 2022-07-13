import React, { useContext, useEffect, useState } from 'react';
import ButtonLogin from '../components/ButtonLogin';
import { AuthContext } from '../context/AuthContext';
import { ClimbersContext } from '../context/ClimbersContext';
import ModalAlert from '../components/ModalAlert';

function Inbox() {
  const {user} = useContext(AuthContext);
  const {climbers} = useContext(ClimbersContext);
  const [contactedClimbers, setContactedClimbers] = useState(null)
  const [sentBelayRequests, setSentBelayRequests] = useState(null)

  //for each id take the value and compare it to each id value in each climber object of the climber array. 
  const findClimbersById = (idArray, climberArray) => {
    let result = [];
    idArray.forEach(id => {
      let foundClimber = climberArray.fiter(climber._id === id);
      result.push(foundClimber);
    })
    return result;
  }; 

  useEffect(() => {
    setContactedClimbers(findClimbersById(user.sent_requests, climbers));
    setSentBelayRequests(findClimbersById(user.received_requests, climbers));
  }, [user]); 

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