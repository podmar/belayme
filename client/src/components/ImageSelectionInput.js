import React, { useContext } from 'react'
import { TextField } from '@mui/material';
import { AuthContext } from '../context/AuthContext';

function ImageSelectionInput() {
const { phandleImageSelectionChange } = useContext(AuthContext);

  return (
    <div>
        <TextField
            // required
            size='small'
            // id="email-input"
            // label={props.label}
            // type={props.type}
            fullWidth
            inputProps={{ maxLength: 120 }}
            name={props.name}
            placeholder={`Type your new ${props.name} here`}
            defaultValue={props.default}
            onChange={props.handler}
        />
    </div>
  )
}

export default ImageSelectionInput;