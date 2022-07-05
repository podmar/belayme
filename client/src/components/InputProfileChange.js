import { Box } from '@mui/system'
import React, { useState } from 'react'
import SaveIcon from '@mui/icons-material/Save';
import { Button, TextField } from '@mui/material';

function InputProfileChange(props) {
    const [newValue, setNewValue] = useState();
    const handleInputChange = (e) => {
        setNewValue(e.target.value);
    }   

  return (
    <div>

        <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1},
            flexDirection: 'column',
            }}
            noValidate
            autoComplete="off"
        >
            <div>
            <TextField
                required
                size='small'
                // id="email-input"
                // label={props.label}
                // type={props.type}
                name={props.name}
                defaultValue={props.default}
                onChange={handleInputChange}
            />
            </div>
            <div>
                <Button
                    type='submit'
                    endIcon={<SaveIcon />}
                    variant='outline'
                    color='primary'
                    // onClick={TYPE HERE A FUNCTION}
                >
                    Save
                </Button>
            </div>
        </Box>
    </div>
  )
}

export default InputProfileChange