import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Chip, Stack } from '@mui/material';
import ButtonBelayRequest from './ButtonBelayRequest';
import { AuthContext } from '../context/AuthContext'

function CardClimber({climber}) {
  const {user} = useContext(AuthContext);

  if (user) {

  if (climber._id === user._id) {
    return
  } else {
    return (
      <Box className='belayme-custom-box-center' py={1}>
          <Card 
            sx={{ 
              width: '90%'
              }}>
          { climber.image && <CardMedia
              component="img"
              alt={`Photo of ${climber.nickname}`}
              height="300"
              image={climber.image}
          /> }
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
          <CardActions>
              <ButtonBelayRequest id={climber._id}/>
              {/* <Button size="small">Ask for a belay</Button> */}
              <Button size="small">See profile</Button>
          </CardActions>
          </Card>
      </Box>
    )
  }
}
}

export default CardClimber

// data passed by the API:  
// allClimbers: Array(7)
// 0:
// about: "projecting a new route nearby here and looking for a climbing partner"
// climbing_style: (3) ['indoor', 'outdoor', 'sports climbing']
// current_location: "Casablanca"
// experience_y: 5
// gear: (2) ['rope', 'draws']
// home_crag: "Dresden"
// nickname: "ulf"
// onsight_level: "6a+"
// redpoint_level: "6c"
// strengths: ['footwork']
// travelling: true
// weight: 78
// _id: "62b9a81318a359fef990bec7"