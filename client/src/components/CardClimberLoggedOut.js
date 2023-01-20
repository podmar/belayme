import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Chip, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CardClimberLoggedOut({ climber }) {
  const navigate = useNavigate();
  const goToLogin = () => navigate("/login");

  return (
    <Box className="belayme-custom-box-center" py={1}>
      <Card
        sx={{
          width: "90%",
        }}
      >
        {climber.image && (
          <CardMedia
            component="img"
            alt={`Photo of ${climber.nickname}`}
            height="300"
            image={climber.image}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {climber.nickname}
          </Typography>
          <div className="padding-y-05">
            <Typography variant="body2" color="text.secondary">
              {climber.about
                ? climber.about
                : "Send me a belay request to learn more about me."}
            </Typography>
          </div>
          <Stack
            direction="row"
            alignItems={"space-between"}
            spacing={1}
            flexWrap={"wrap"}
            xs={{ p: 0.5, m: 0 }}
          >
            {climber.experience_y && (
              <div className="padding-y-03">
                <Chip
                  color="secondary"
                  label={`climbing ${climber.experience_y} years`}
                ></Chip>
              </div>
            )}
            {climber.onsight_level && (
              <div className="padding-y-03">
                <Chip
                  color="primary"
                  label={`onsights ${climber.onsight_level}`}
                ></Chip>
              </div>
            )}
            {climber.current_location && (
              <div className="padding-y-03">
                <Chip
                  color="primary"
                  label={`${climber.current_location}`}
                ></Chip>
              </div>
            )}
            {climber.weight && (
              <div className="padding-y-03">
                <Chip color="primary" label={`${climber.weight} kg`}></Chip>
              </div>
            )}
            {/* TODO Check why style is not dissappearing when empty */}
            {climber.climbing_style.length !== 0 && (
              <div className="padding-y-03">
                <Chip
                  color="primary"
                  label={`${climber.climbing_style}`}
                ></Chip>
              </div>
            )}
          </Stack>
        </CardContent>
        <CardActions>
          <Button onClick={goToLogin} size="small">
            Login to ask for a belay
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default CardClimberLoggedOut;
