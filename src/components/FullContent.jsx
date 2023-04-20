import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Food from "../assets/god.jpeg";
import Gallery from "./Gallery";

function Devotee() {
  return (
    <Container>
      <Box sx={{p: "12% 0"}}>
        <Gallery />
      </Box>
    </Container>
  );
}

export default Devotee;
