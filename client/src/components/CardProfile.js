import React, {useContext} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { AuthContext } from '../context/AuthContext'


function CardProfile() {
    const {user} = useContext(AuthContext);
    console.log(user);

  return (
    <Box className='belayme-custom-box-center'>
        <Card sx={{ maxWidth: 345 }}>
        {/* <CardMedia
            component="img"
            alt="user profile pic"
            height="140"
            // image="xxx.jpg"
        /> */}
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {user && user.nickname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {user && user.about ? user.about : "Send me a belay request to learn more about me."}
            </Typography>
        </CardContent>
        {/* <CardActions>
            <Button size="small">Ask for a belay</Button>
            <Button size="small">See profile</Button>
        </CardActions> */}
        </Card>
    </Box>
  )
}

export default CardProfile