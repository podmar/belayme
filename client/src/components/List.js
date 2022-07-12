import { Typography } from '@mui/material';
import React, { useContext } from 'react'
import ClimbersContext from '../context/ClimbersContext';
import CardClimber from './CardClimber';

function List() {
    const { climbers, climberCount } = useContext(ClimbersContext);
    
    //TODO change this to get user by location based on current location

    return (
    <div>
        <Typography variant='body2'>
            {climberCount ? 
                `Found ${climberCount} people nearby you.` :
                "Looking for people nearby..."
            }
        </Typography>          
            {climbers && climbers.map(climber => {
                return (
                        <CardClimber 
                        climber={climber}
                        key={climber._id}
                        />
                )
            })}
    </div>
  )
}

export default List;