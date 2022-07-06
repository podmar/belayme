import React, {useContext, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid'
import { AuthContext } from '../context/AuthContext'
import EditIcon from '@mui/icons-material/Edit';
import InputProfileChange from './InputProfileChange';
import TextInputProfileChange from './TextInputProfileChange';
import ButtonSubmitInputProfileChange from './ButtonSubmitInputProfileChange';

function CardProfile() {
    const {user} = useContext(AuthContext);
    const [edit, setEdit] = useState(false);
    const [newUserData, setNewUserData] = useState();

    const handleInputChange = (event) => {
      setNewUserData({...newUserData, [event.target.name]: event.target.value})
  };

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
        <Card sx={{ width: '90%' }}>

        <CardActions>
          <Button
          onClick={editProfileToggle}
          endIcon={<EditIcon/>}
          >
            Edit profile
          </Button>
        </CardActions>

        <CardContent>
          <Box component="form" >
          <Typography gutterBottom variant="h6" component="div" textAlign={"left"} color="text.secondary">Your user details</Typography>
          
          
          <Typography variant="body1" color="text.primary"></Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
          
          
          <Grid py={0.5} container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} wrap="nowrap">
            <Grid item xs={4} md={3} >
            <Typography variant="body2" color="text.secondary" textAlign={"left"}>belayme nickname</Typography>
            </Grid>
            <Grid item xs>
              {!edit && <Typography variant="body1" color="text.primary" textAlign={"left"}>{user.nickname}</Typography>}
            </Grid>
            <Grid item >
              {edit && <TextInputProfileChange handler={handleInputChange} name="nickname" default={user.nickname}/>}
            </Grid>
          </Grid>

            <Grid py={0.5} container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} wrap="nowrap">
              <Grid item xs={4} md={3} >
                  <Typography variant="body2" color="text.secondary" textAlign={"left"}>about me</Typography>
              </Grid>
              <Grid item xs>
                  {!edit && <Typography variant="body1" color="text.primary" textAlign={"left"}>{user.about ? user.about : "Send me a belay request to learn more about me."}</Typography>}
              </Grid>
              <Grid item>
                  {edit && <TextInputProfileChange handler={handleInputChange} name="about" default={user.about? user.about : ""}/>}
              </Grid>
            </Grid>

            <Grid py={0.5} container direction="row" justifyContent="flex-end" alignItems="center" spacing={1} wrap="nowrap">
              <Grid item>
              {edit && <ButtonSubmitInputProfileChange />}
              </Grid>
            </Grid>

          </Box>
        </CardContent>

        </Card>
    </Box>
  )
}

export default CardProfile