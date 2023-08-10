// Import required modules
import { Box } from "@mui/material";
// Import required components
import Nav from "../Global/Nav";
// Import required images
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <Box sx={{ background: `url(${hero})`, minHeight: "100vh" }}>
      <Nav />
    </Box>
  );
};

export default Hero;