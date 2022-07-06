import React, { useState } from 'react'
import { TextField } from '@mui/material';

function TextInputProfileChange(props) {

  return (
    <div>
        <TextField
            required
            size='small'
            // id="email-input"
            // label={props.label}
            // type={props.type}
            name={props.name}
            defaultValue={props.default}
            onChange={props.handler}
        />
    </div>
  )
}

export default TextInputProfileChange