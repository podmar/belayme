import React, { useContext } from 'react'; 
import { IconButton } from '@mui/material';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { AuthContext } from '../context/AuthContext'


function ButtonIconBelayRequest({id}) {

const {requestBelay} = useContext(AuthContext);

  return (
    <>
        <IconButton 
            aria-label="belay-request"
            onClick={() => requestBelay(id)}
            >
            <LabelImportantIcon />
        </IconButton>
    </>
  )
}

export default ButtonIconBelayRequest