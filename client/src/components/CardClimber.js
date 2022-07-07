import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function CardClimber({climber}) {
  return (
    <Box className='belayme-custom-box-center' py={1}>
        <Card 
          sx={{ 
            width: '90%'
            }}>
        {/* <CardMedia
            component="img"
            alt="user profile pic"
            height="140"
            image="xxx.jpg"
        /> */}
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {climber.nickname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {climber.about ? climber.about : "Send me a belay request to learn more about me."}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Ask for a belay</Button>
            <Button size="small">See profile</Button>
        </CardActions>
        </Card>
    </Box>
  )
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