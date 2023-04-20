import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import Title from "./Title";
// img
import imgDetail from "../assets/pexels-alex-staudinger-1732414.jpg";
import imgDetail2 from "../assets/pexels-pixabay-271816.jpg";
import { Link } from "react-router-dom";
import Food from "../assets/god.jpeg";
import { useEffect } from "react";

const GetStarted = () => {
  const CustomGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const CustomTypography = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "start",
    lineHeight: "1.5",
    color: "#515151",
    marginTop: "1.5rem",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container sx={{ paddingTop: 5 }} style={{ position: "relative" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item md={12} sx={{ mt: "2%" }}>
          <Card sx={{ backgroundColor: "rgba(225, 225, 225, 0.5)" }}>
            <CardContent
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: "15%",
                  maxheight: 200,
                  float: "right",
                  objectFit: "contain",
                }}
                image={Food}
                alt="Live from space album cover"
              />
              <Box sx={{ p: "2%" }}>
                <Typography variant="h5" component="div">
                  Featured Post
                </Typography>
                <Typography variant="subtitle1" component="div">
                  Nov 12
                </Typography>
                <Typography variant="h6" component="div">
                  This is a wider card with supporting text below as natural
                  lead-in to additional content
                </Typography>
                <Link to="/content">Continue reading ...</Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={12} sx={{ mt: "2%" }}>
          <Card sx={{ backgroundColor: "rgba(225, 225, 225, 0.5)" }}>
            <CardContent
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <Box sx={{ p: "2%" }}>
                <Typography variant="h5" component="div">
                  Featured Post
                </Typography>
                <Typography variant="subtitle1" component="div">
                  Nov 12
                </Typography>
                <Typography variant="h6" component="div">
                  This is a wider card with supporting text below as natural
                  lead-in to additional content
                </Typography>
                <Link to="/content">Continue reading ...</Link>
              </Box>
              <CardMedia
                component="img"
                sx={{
                  width: "15%",
                  maxheight: 200,
                  float: "right",
                  objectFit: "contain",
                }}
                image={Food}
                alt="Live from space album cover"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={12} sx={{ mt: "2%" }}>
          <Card sx={{ backgroundColor: "rgba(225, 225, 225, 0.5)" }}>
            <CardContent
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <CardMedia
                component="img"
                sx={{ width: "15%", maxheight: 200, float: "right" }}
                image={Food}
                alt="Live from space album cover"
              />
              <Box sx={{ p: "2%" }}>
                <Typography variant="h5" component="div">
                  Featured Post
                </Typography>
                <Typography variant="subtitle1" component="div">
                  Nov 12
                </Typography>
                <Typography variant="h6" component="div">
                  This is a wider card with supporting text below as natural
                  lead-in to additional content
                </Typography>
                <Link to="/content">Continue reading ...</Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={12} sx={{ mt: "2%" }}>
          <Card sx={{ backgroundColor: "rgba(225, 225, 225, 0.5)" }}>
            <CardContent
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <Box sx={{ p: "2%" }}>
                <Typography variant="h5" component="div">
                  Featured Post
                </Typography>
                <Typography variant="subtitle1" component="div">
                  Nov 12
                </Typography>
                <Typography variant="h6" component="div">
                  This is a wider card with supporting text below as natural
                  lead-in to additional content
                </Typography>
                <Link to="/content">Continue reading ...</Link>
              </Box>
              <CardMedia
                component="img"
                sx={{
                  width: "15%",
                  maxheight: 200,
                  float: "right",
                  objectFit: "contain",
                }}
                image={Food}
                alt="Live from space album cover"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={12} sx={{ mt: "2%" }}>
          <Card sx={{ backgroundColor: "rgba(225, 225, 225, 0.5)" }}>
            <CardContent
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: 200,
                  maxheight: 200,
                  float: "right",
                  objectFit: "contain",
                }}
                image={Food}
                alt="Live from space album cover"
              />
              <Box sx={{ p: "2%" }}>
                <Typography variant="h5" component="div">
                  Featured Post
                </Typography>
                <Typography variant="subtitle1" component="div">
                  Nov 12
                </Typography>
                <Typography variant="h6" component="div">
                  This is a wider card with supporting text below as natural
                  lead-in to additional content
                </Typography>
                <Link to="/content">Continue reading ...</Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={12} sx={{ mt: "2%" }}>
          <Card sx={{ backgroundColor: "rgba(225, 225, 225, 0.5)" }}>
            <CardContent
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <Box sx={{ p: "2%" }}>
                <Typography variant="h5" component="div">
                  Featured Post
                </Typography>
                <Typography variant="subtitle1" component="div">
                  Nov 12
                </Typography>
                <Typography variant="h6" component="div">
                  This is a wider card with supporting text below as natural
                  lead-in to additional content
                </Typography>
                <Link to="/content">Continue reading ...</Link>
              </Box>
              <CardMedia
                component="img"
                sx={{
                  width: "15%",
                  maxheight: 200,
                  float: "right",
                  objectFit: "contain",
                }}
                image={Food}
                alt="Live from space album cover"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item md={12} sx={{ mt: "2%" }}>
        <Card sx={{ backgroundColor: "rgba(225, 225, 225, 0.5)" }}>
          <CardContent sx={{ display: "flex" }}>
            <Box sx={{ p: "2%" }}>
              <Typography variant="h6" component="div">
                A Hindu temple, or Devasthana or mandir or koil or kovil in
                Indian languages,[a] is a house, seat and body of divinity for
                Hindus. It is a structure designed to bring human beings and
                gods together through worship, sacrifice, and devotion.[3][4]
                The symbolism and structure of a Hindu temple are rooted in
                Vedic traditions, deploying circles and squares.[5] It also
                represents recursion and the representation of the equivalence
                of the macrocosm and the microcosm by astronomical numbers, and
                by "specific alignments related to the geography of the place
                and the presumed linkages of the deity and the patron".[6][7] A
                temple incorporates all elements of the Hindu cosmos —
                presenting the good, the evil and the human, as well as the
                elements of the Hindu sense of cyclic time and the essence of
                life — symbolically presenting dharma, artha, kama, moksha, and
                karma.[8][9][10]
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
};

export default GetStarted;
