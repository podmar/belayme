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
import TextInputProfileChange from './TextInputProfileChange';
import ButtonSubmitInputProfileChange from './ButtonSubmitInputProfileChange';
import ButtonDeleteProfile from './ButtonDeleteProfile';

function CardProfile() {
    const {user, handleUserProfileChange, updateProfile } = useContext(AuthContext);
    const [edit, setEdit] = useState(false);

    const handleSubmitProfileChange = (event) => {
      event.preventDefault();
      updateProfile();
      setEdit(false);
    }

    const editProfileToggle = () => {
      if (!edit) {
        setEdit(true);
      } else {
        setEdit(false);
      };
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
          <Typography gutterBottom variant="h6" component="div" textAlign={"left"} color="primary">About you</Typography>
          
          
          <Typography variant="body1" color="text.primary"></Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
          
          <Grid pb={0.5} container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} wrap="nowrap">
            <Grid item xs={4} md={3} >
            <Typography variant="body2" color="text.secondary" textAlign={"left"}>belayme nickname</Typography>
            </Grid>
            {!edit ?
            <Grid item xs>
              <Typography variant="body1" color="text.primary" textAlign={"left"}>{user.nickname}</Typography>
            </Grid> :
            <Grid item xs>
              <TextInputProfileChange handler={handleUserProfileChange} name="nickname" default={user.nickname}/>
            </Grid>}
          </Grid>

            <Grid pb={2} container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} wrap="nowrap">
              <Grid item xs={4} md={3} >
                  <Typography variant="body2" color="text.secondary" textAlign={"left"}>about me</Typography>
              </Grid>
              {!edit ? 
              <Grid item xs>
                  <Typography variant="body1" color="text.primary" textAlign={"left"}>{user.about ? user.about : "Send me a belay request to learn more about me."}</Typography>
              </Grid> :
              <Grid  xs item>
                  <TextInputProfileChange handler={handleUserProfileChange} name="about" default={user.about? user.about : ""}/>
              </Grid>}
            </Grid>

            <Typography gutterBottom variant="h6" component="div" textAlign={"left"} color="primary">Your contact details</Typography>

            <Grid pb={0.5} container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} wrap="nowrap">
            <Grid item xs={4} md={3} >
            <Typography variant="body2" color="text.secondary" textAlign={"left"}>email</Typography>
            </Grid>
            {!edit ? 
            <Grid item xs>
              <Typography variant="body1" color="text.primary" textAlign={"left"}>{user.email}</Typography>
            </Grid> :
            <Grid  xs item>
              <TextInputProfileChange handler={handleUserProfileChange} name="email" default={user.email}/>
            </Grid>}
          </Grid>

          <Grid pb={0.5} container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} wrap="nowrap">
            <Grid item xs={4} md={3} >
            <Typography variant="body2" color="text.secondary" textAlign={"left"}>home crag</Typography>
            </Grid>
            {!edit ?
            <Grid item xs>
              <Typography variant="body1" color="text.primary" textAlign={"left"}>{user.home_crag}</Typography>
            </Grid> :
            <Grid xs item >
              <TextInputProfileChange handler={handleUserProfileChange} name="home_crag" default={user.home_crag}/>
            </Grid>}
          </Grid>

          <Grid pb={0.5} container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} wrap="nowrap">
            <Grid item xs={4} md={3} >
            <Typography variant="body2" color="text.secondary" textAlign={"left"}>travelling</Typography>
            </Grid>
            {!edit ?
            <Grid item xs>
              <Typography variant="body1" color="text.primary" textAlign={"left"}>{user.travelling}</Typography>
            </Grid> :
            <Grid xs item >
              <TextInputProfileChange handler={handleUserProfileChange} name="travelling" default={user.travelling}/>
            </Grid>}
          </Grid>

          <Grid pb={2} container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} wrap="nowrap">
            <Grid item xs={4} md={3} >
            <Typography variant="body2" color="text.secondary" textAlign={"left"}>current location</Typography>
            </Grid>
            {!edit ?
            <Grid item xs>
              <Typography variant="body1" color="text.primary" textAlign={"left"}>{user.current_location}</Typography>
            </Grid> :
            <Grid xs item >
              <TextInputProfileChange handler={handleUserProfileChange} name="current_location" default={user.current_location}/>
            </Grid>}
          </Grid>

          <Typography gutterBottom variant="h6" component="div" textAlign={"left"} color="primary">Climbing details</Typography>

          <Grid pb={0.5} container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} wrap="nowrap">
            <Grid item xs={4} md={3} >
            <Typography variant="body2" color="text.secondary" textAlign={"left"}>climbing style</Typography>
            </Grid>
            {!edit ?
            <Grid item xs>
              <Typography variant="body1" color="text.primary" textAlign={"left"}>{user.climbing_style}</Typography>
            </Grid> :
            <Grid xs item >
              <TextInputProfileChange handler={handleUserProfileChange} name="climbing_style" default={user.climbing_style}/>
            </Grid>}
          </Grid>

          <Grid pb={0.5} container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} wrap="nowrap">
            <Grid item xs={4} md={3} >
            <Typography variant="body2" color="text.secondary" textAlign={"left"}>years of climbing experience</Typography>
            </Grid>
            {!edit ?
            <Grid item xs>
              <Typography variant="body1" color="text.primary" textAlign={"left"}>{user.experience_y}</Typography>
            </Grid> :
            <Grid xs item >
              <TextInputProfileChange handler={handleUserProfileChange} name="experience_y" default={user.experience_y}/>
            </Grid>}
          </Grid>

          <Grid pb={0.5} container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} wrap="nowrap">
            <Grid item xs={4} md={3} >
            <Typography variant="body2" color="text.secondary" textAlign={"left"}>gear</Typography>
            </Grid>
            {!edit ?
            <Grid item xs>
              <Typography variant="body1" color="text.primary" textAlign={"left"}>{user.gear}</Typography>
            </Grid> :
            <Grid xs item >
              <TextInputProfileChange handler={handleUserProfileChange} name="gear" default={user.gear}/>
            </Grid>}
          </Grid>

          <Grid pb={0.5} container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} wrap="nowrap">
            <Grid item xs={4} md={3} >
            <Typography variant="body2" color="text.secondary" textAlign={"left"}>onsight level</Typography>
            </Grid>
            {!edit ?
            <Grid item xs>
              <Typography variant="body1" color="text.primary" textAlign={"left"}>{user.onsight_level}</Typography>
            </Grid> :
            <Grid xs item >
              <TextInputProfileChange handler={handleUserProfileChange} name="onsight_level" default={user.onsight_level}/>
            </Grid>}
          </Grid>

          <Grid pb={0.5} container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} wrap="nowrap">
            <Grid item xs={4} md={3} >
            <Typography variant="body2" color="text.secondary" textAlign={"left"}>redpoint level</Typography>
            </Grid>
            {!edit ?
            <Grid item xs>
              <Typography variant="body1" color="text.primary" textAlign={"left"}>{user.redpoint_level}</Typography>
            </Grid> :
            <Grid xs item >
              <TextInputProfileChange handler={handleUserProfileChange} name="redpoint_level" default={user.redpoint_level}/>
            </Grid>}
          </Grid>

          <Grid pb={0.5} container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} wrap="nowrap">
            <Grid item xs={4} md={3} >
            <Typography variant="body2" color="text.secondary" textAlign={"left"}>strengths</Typography>
            </Grid>
            {!edit ?
            <Grid item xs>
              <Typography variant="body1" color="text.primary" textAlign={"left"}>{user.strengths}</Typography>
            </Grid> :
            <Grid xs item >
              <TextInputProfileChange handler={handleUserProfileChange} name="strengths" default={user.strengths}/>
            </Grid>}
          </Grid>

          <Grid pb={2} container direction="row" justifyContent="flex-start" alignItems="center" spacing={1} wrap="nowrap">
            <Grid item xs={4} md={3} >
            <Typography variant="body2" color="text.secondary" textAlign={"left"}>weight</Typography>
            </Grid>
            {!edit ?
            <Grid item xs>
              <Typography variant="body1" color="text.primary" textAlign={"left"}>{user.weight}</Typography>
            </Grid> :
            <Grid xs item >
              <TextInputProfileChange handler={handleUserProfileChange} name="weight" default={user.weight}/>
            </Grid>}
          </Grid>

            <Grid pb={0.5} container direction="row" justifyContent="flex-end" alignItems="center" spacing={1} wrap="nowrap">
              <Grid item>
              {edit && 
                <CardActions>
                  <ButtonSubmitInputProfileChange 
                    onClick={handleSubmitProfileChange} />
                  <ButtonDeleteProfile />
                </CardActions>}
              </Grid>
            </Grid>

          </Box>
        </CardContent>
        </Card>
    </Box>
  )
}

export default CardProfile;