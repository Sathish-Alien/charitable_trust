import React from "react";
import {
  Grid,
  Typography,
  IconButton,
  Card,
  CardContent,
  Box,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
// icons
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import WifiPasswordIcon from "@mui/icons-material/WifiPassword";
// components
import Title from "./Title";
import Paragraph from "./Paragraph";
import FirePit from "../assets/firepit.gif";
import Chakra1 from "../assets/chakra1.png";
import Chakra2 from "../assets/shanka2.png";
import { useSelector } from "react-redux";

const Content = () => {
  const getLang = useSelector((state) => state.setLangReducerResult)
  const { lang } = getLang
  return (
    <Grid
      container
      spacing={0}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        py: 10,
        px: 2,
        position: "relative",
      }}
    >
      {/* <Grid item xs={12} sm={12} md={5} component="section"> */}
      <Box className="aboutHeader">
        <img src={Chakra1} className="chakraImg" />
        <Typography component="h4" fontSize={"100%"} textAlign={"center"}>
          {
            lang ? "ಲೋಕ ಕಲ್ಯಾಣಾರ್ಥಕ್ಕಾಗಿ – ಶ್ರೀ ಸುದರ್ಶನ ಮಹಾಯಾಗ" : "Shri Sudarshana Mahayaga"
          }
        </Typography>
        <img src={Chakra2} className="chakraImg" />
      </Box>
      <Box sx={{ pb: "2%" }}>
        <div className="centeringElementMain">
          <img src={FirePit} className="aboutFirePit" />
        </div>
       
        

      </Box>
      {/* </Grid> */}
    </Grid>
  );
};

export default Content;
