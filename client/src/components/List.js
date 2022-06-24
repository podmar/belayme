import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react'
import ClimbersContext from '../context/ClimbersContext';

function List() {
    const { climbers, climberCount } = useContext(ClimbersContext);
    
    //TODO change this to get user by location based on current location
    
  return (
    <div>
        <Typography variant='h2'>
            Climbers nearby
        </Typography>
            {climberCount ? 
                <p>{`Found ${climberCount} people nearby you.`}</p> :
                <p>Looking for people nearby...</p>
            }
            {/* TODO create a card for each belayer */}
            {climbers && climbers.map(climber => {
                return (
                    <Box py={1}
                    key={climber._id}
                    >
                        <Paper
                        elevation={3}
                        >
                            <Typography variant='subtitle'>
                                {climber.nickname}
                            </Typography>
                            <p>Home crag: {climber.contact.home_crag}</p>
                        </Paper>
                    </Box>
                )
            })}
    </div>
  )
}

export default List;