import React from 'react'
import { Button } from '@mui/material';
import { Box } from '@mui/material';

function ImageSelectionInput(props) {

  return (
      <Box component="form" >
        <input
          type="file"
          id="image-select"
          onChange={props.onChange}
          style={{ display: 'none' }}
        />
        <label
          htmlFor={"image-select"}>
          <Button
            color="secondary"
            component="span"
          >
            Choose a file
          </Button>
        </label>
    </Box>
  )
}

export default ImageSelectionInput;