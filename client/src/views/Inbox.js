import React, { useContext, useEffect, useState } from 'react';
import ButtonLogin from '../components/ButtonLogin';
import { AuthContext } from '../context/AuthContext';
import { ClimbersContext } from '../context/ClimbersContext';
import ModalAlert from '../components/ModalAlert';
import { Typography } from '@mui/material';
import CardClimber from '../components/CardClimber';
import PreviewCardClimber from '../components/PreviewCardClimber';


function Inbox() {
  const {user} = useContext(AuthContext);
  const {climbers} = useContext(ClimbersContext);
  const [contactedClimbers, setContactedClimbers] = useState(null)
  const [belayRequestsReceived, setBelayRequestsReceived] = useState(null)

  //for each id take the value and compare it to each id value in each climber object of the climber array. 

//V.3
  // const findClimbersById = (idArray, climberArray) => {
  //   let result = [];
  //   const findOneClimber = (id) => {
  //     result.push(climberArray.filter(climber => {climber._id === id}));
  //   }; 
  //   idArray.forEach(id => findOneClimber(id))
  //   console.log(result);
  //   return result;
  // }; 

// V.2
  // const findClimbersById = (idArray, climberArray) => {
  //   let result = [];
  //   const findOneClimber = (id, climberArray) => {
  //     let foundClimber = climberArray.filter(climber => {climber._id === id});
  //     result.push(foundClimber);
  //   }; 
  //   idArray.forEach(id => findOneClimber(id, climberArray))
  //   return result;
  // }; 

  // V.1
    const findClimbersById = (idArray, climberArray) => {
      let result = [];
      // console.log("idArray: ", idArray);
      // console.log("climberArray: ", climberArray);
      idArray.forEach(id => {
        let foundClimber = climberArray.filter((climber) => climber._id === id);
        result.push(foundClimber);
      })
      // result.flat()
      // console.log("result of climber search", result);
      console.log("flat result", result.flat());
      return result.flat();
    }; 

  useEffect(() => {
    if (user && user.sent_requests && climbers) {
      setContactedClimbers(findClimbersById(user.sent_requests, climbers));
    }
    if (user && user.received_requests && climbers) {
    setBelayRequestsReceived(findClimbersById(user.received_requests, climbers));
    }
  }, [user, climbers]); 

  return (
    <div>


      {user? 
        <div>
          {contactedClimbers &&
            <div>
              <Typography variant='h6'>
                {/* {`You contacted ${contactedClimbers.length} climber${(contactedClimbers.length > 1) && "s"}`} */}
                Climbers you contacted
              </Typography>   
              {contactedClimbers.map(climber => {
                  return (
                          <PreviewCardClimber 
                          // <CardClimber 
                          climber={climber}
                          key={climber._id}
                          />
                  )
              })}       
            </div>}
            {belayRequestsReceived &&
            <div>
              <Typography variant='h6'>
                {/* {`You received ${belayRequestsReceived.lenght} belay request${(belayRequestsReceived.length > 1) && "s"}}` */}
                Belay requests you received
              </Typography>   
              {belayRequestsReceived.map(climber => {
                  return (
                          <PreviewCardClimber 
                          // <CardClimber 
                          climber={climber}
                          key={climber._id}
                          />
                  )
              })}       
            </div>}
        </div> :
        <Typography variant='body1'>
          Loading
        </Typography>
      }
      <ModalAlert/>
    </div>
  )
}

export default Inbox
