// Import required modules
import { Box, Typography } from "@mui/material";
// Import required components
import Nav from "../Global/Nav";
// Import required images
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <Box
      sx={{
        background: `url(${hero})`,
        display: "flex",
        flexDirection: "column",
        minHeight: "85vh",
      }}
    >
      <Nav />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          padding: "2rem 1rem",
        }}
      >
        <Typography variant="h3" className="title">
          All your accommodation needs at one place.
        </Typography>

        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem animi
          sequi voluptatum veritatis excepturi ducimus minus doloribus beatae
          tempora dolore.
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
