import React from "react";
import Card from "@mui/material/Card";
import { Avatar, Box, CardHeader } from "@mui/material";
import ButtonIconSeeClimberDetail from "./ButtonIconSeeClimberDetail";

function PreviewCardClimber({ climber }) {
  return (
    <Box className="belayme-custom-box-center" py={1}>
      <Card
        sx={{
          width: "90%",
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              src={climber.image}
              alt={`Photo of ${climber.nickname}`}
              sx={{ width: 50, height: 50 }}
            />
          }
          action={<ButtonIconSeeClimberDetail id={climber._id} />}
          title={climber.nickname}
          subheader={climber.about && climber.about}
        />
      </Card>
    </Box>
  );
}

export default PreviewCardClimber;
