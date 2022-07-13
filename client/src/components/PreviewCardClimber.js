import React, { useContext, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Chip, Stack } from '@mui/material';
import ButtonBelayRequest from './ButtonBelayRequest';
import { AuthContext } from '../context/AuthContext'
import ButtonIconBelayRequest from './ButtonIconBelayRequest';

function PreviewCardClimber({climber}) {

    return (
      <Box className='belayme-custom-box-center' py={1}>
          <Card 
            sx={{ 
              width: '90%'
              }}>
          <Avatar
            src={climber.image}
            alt={`Photo of ${climber.nickname}`}
            sx={{ width: 50, height: 50 }}
            />
          {/* { climber.image && <CardMedia
              component="img"
              alt={`Photo of ${climber.nickname}`}
              height="300"
              image={climber.image}
          /> } */}
          <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {climber.nickname}
              </Typography>
              <div className='padding-y-05'>
                <Typography variant="body2" color="text.secondary">
                {climber.about ? climber.about : "Send me a belay request to learn more about me."}
                </Typography>
              </div>
              <Stack direction="row" alignItems={"space-between"} spacing={1} flexWrap={"wrap"} xs={{p: 0.5, m: 0,}}>
                {climber.experience_y && 
                <div className='padding-y-03'>
                  <Chip
                  color="secondary"
                  label={`climbing ${climber.experience_y} years`}
                  ></Chip>
                </div>}
                {climber.onsight_level && 
                <div className='padding-y-03'>
                  <Chip
                  color="primary"
                  label={`onsights ${climber.onsight_level}`}
                  ></Chip>
                </div>}
                {climber.current_location && 
                <div className='padding-y-03'>
                  <Chip
                  color="primary"
                  label={`${climber.current_location}`}
                  ></Chip>
                </div>}
                {climber.weight && 
                <div className='padding-y-03'>
                  <Chip
                  color="primary"
                  label={`${climber.weight} kg`}
                  ></Chip>
                </div>}              
                {/* TODO Check why style is not dissappearing when empty */}
                {climber.climbing_style && 
                <div className='padding-y-03'>
                  <Chip
                    color="primary"
                    label={`${climber.climbing_style}`}
                  ></Chip>
                </div>}
                {/* {climber. && 
                <Chip
                color="primary"
                label={`${climber.}`}
                ></Chip>} */}
              </Stack>
          </CardContent>

          </Card>
      </Box>
    )
  }

export default PreviewCardClimber