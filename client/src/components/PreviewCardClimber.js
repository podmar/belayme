import React from 'react';
import Card from '@mui/material/Card';
import { Avatar, Box, CardHeader, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function PreviewCardClimber({climber}) {

    return (
      <Box className='belayme-custom-box-center' py={1}>
        <Card 
          sx={{ 
            width: '90%'
            }}>
          <CardHeader
            avatar={
              <Avatar
                src={climber.image}
                alt={`Photo of ${climber.nickname}`}
                sx={{ width: 50, height: 50 }}
                />
            }
            action={
              <IconButton aria-label="settings">
                <ArrowForwardIosIcon />
              </IconButton>
            }
            title={climber.nickname}
            subheader={climber.about && climber.about}
          />
          </Card>
      </Box>
    )
  }

export default PreviewCardClimber