import React, { useState } from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";
import { useSelector } from "react-redux";

const Details = () => {
  const [hue, setHue] = useState(0);
  const getLang = useSelector((state) => state.setLangReducerResult);
  const { lang } = getLang;

  const color = `hsl(${hue % 360}deg 39% 70%)`;
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      phone: data.get("phone"),
    });
  };

  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 4,
        px: 2,
      }}
    >
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          mt: 1,
          py: 2,
        }}
      >
        <Typography component="p" sx={{ position: "relative", textAlign: "center", mt: "2%" }}><span className='trustAddress'>{
          lang ? "ಸ್ಥಳ: ಶ್ರೀ ರಂಗನಾಥಸ್ವಾಮಿ ದೇವಸ್ಥಾನ ಮುಂಬಾಗ ಮೈದಾನದ ಆವರಣದಲ್ಲಿ ಶ್ರೀರಂಗಪಟ್ಟಣ," : "opp – Shri Ranganathswami temple, Play Ground, Shrirangapattana,"
        } </span></Typography>
        <Typography component="p" sx={{ position: "relative", textAlign: "center", mt: "1%" }}><span className='trustAddress'>{
          lang ? "ಮಂಡ್ಯ ಜಿಲ್ಲೆ – 571438" : "Mandya District – 571438"
        }</span></Typography>
        <Typography component="p" sx={{ position: "relative", textAlign: "center", mt: "1%" }}><span className='trustAddress'>{
          lang ? "ದಿನಾಂಕ: 09.06.2023 ರಿಂದ 11.06.2023" : "Date : 09.06.2023 to 11.06.2023"
        }</span></Typography>
      </Box>
      <Box style={{ width: "90%" }}>
        <Map height={300} defaultCenter={[12.9716, 77.5946]} defaultZoom={11}>
          <ZoomControl />
          <Marker
            width={50}
            anchor={[12.9716, 77.5946]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            width={50}
            anchor={[12.9716, 77.5946]}
            color={color}
            onClick={() => setHue(hue + 20)}
          >
            {/* <CustomIcon /> */}
          </Marker>
        </Map>
      </Box>
    </Stack>
  );
};

export default Details;
