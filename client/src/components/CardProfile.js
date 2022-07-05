import React, {useContext, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { AuthContext } from '../context/AuthContext'
import EditIcon from '@mui/icons-material/Edit';
import InputProfileChange from './InputProfileChange';

function CardProfile() {
    const {user} = useContext(AuthContext);
    const [edit, setEdit] = useState(false);

    const editProfileToggle = () => {
      if (!edit) {
        setEdit(true);
      } else {
        setEdit(false);
      };
      console.log("edit profile:", edit)
    }; 

  return (
    <Box className='belayme-custom-box-center'>
        <Card sx={{ maxWidth: 345 }}>
        {/* <CardMedia
            component="img"
            alt="user profile pic"
            height="140"
            // image="xxx.jpg"
        /> */}
        <CardActions>
          <Button
          onClick={editProfileToggle}
          endIcon={<EditIcon/>}
          >
            Edit profile
          </Button>
            {/* <Button size="small">Ask for a belay</Button>
            <Button size="small">See profile</Button> */}
        </CardActions>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {user && user.nickname}
            {edit && <InputProfileChange name="nickname" default="change your nickname"/>}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {user && user.about ? user.about : "Send me a belay request to learn more about me."}
            {edit && <InputProfileChange name="about" default="change your about"/>}
            </Typography>
        </CardContent>

        </Card>
    </Box>
  )
}

export default CardProfile