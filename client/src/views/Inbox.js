import React, { useContext } from 'react';
import ButtonLogin from '../components/ButtonLogin';
import { AuthContext } from '../context/AuthContext';
import ModalAlert from '../components/ModalAlert';


function Inbox() {
  const {user} = useContext(AuthContext);

  const contactedClimbersIDs = user.sent_requests;

  const searchForClimbers = (id, climberArray) => {
    let result = [];
    
    if (climber._id === id) {
      result.append(climber);
    }
  }



//   const selectDataFields = (...keys) => {
//     const getNewClimberObject = (climberObject) => {
//         const newClimberObject = {};
//         keys.forEach(key => {
//             newClimberObject[key] = climberObject[key];
//         });
//         return newClimberObject;
//     }
//     return getNewClimberObject;
// };

// const selectContactedClimber = (...ids) => {
//   const getContactedClimberArray = (climberObject) => {
//       const newClimberObject = {};
//       keys.forEach(key => {
//           newClimberObject[key] = climberObject[key];
//       });
//       return newClimberObject;
//   }
//   return getNewClimberObject;
// };

// const allClimbers = allClimbersData
// .map(selectDataFields("_id", "about", "nickname", "home_crag"));


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