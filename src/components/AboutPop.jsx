import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import FirePit from "../assets/FirePit2.gif";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: "80%",
  // height: "80%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "8px",
  boxShadow: 24,
  overflow: "auto",
  p: 4,
  display: "grid",
  placeItems: "center"
};

export default function AboutPop(props) {
  const { open, handleOpen, handleClose } = props;
  const getLang = useSelector((state) => state.setLangReducerResult)
  const { lang } = getLang
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Link to="/yaga">
          <Box sx={style} className="resbox">
            <Grid container sx={{ mt: "2%" }}>
              <Grid item xs={12} md={12} lg={12} sx={{ display: "grid", placeItems: "center" }}>
                <img src={FirePit} className="popFirePit" />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Box sx={{ p: "2%" }}>
                  <Typography variant="h6" className="aboutPopText" component="div" sx={{ mt: "10%" }} >
                    {
                      lang ? "ಓಂ ವಿಶ್ವ ಮಹಾಗುರು ಭಗವಾನ್ ರವರ ಪ್ರೇರಣೆಯಿಂದ ನವಗ್ರಹದ ಗುರುದೇವರ ದೇವಸ್ಥಾನವನ್ನು ಐತಿಹಾಸಿಕ ಪ್ರಸಿದ್ದವಾದ ಶ್ರೀರಂಗಪಟ್ಟಣದಲ್ಲಿ ಸ್ಥಾಪನೆ ಮಾಡುತ್ತಿದ್ದೇವೆ. ಎಲ್ಲರಿಗೂ ಗುರು ಬಲವು ಮುಖ್ಯವಾಗಿ ಬೇಕಾಗಿರುತ್ತದೆ. ಆದುದರಿಂದ ಗುರುಪೂಜೆಯನ್ನು ಮಾಡಲಾಗುತ್ತದೆ. ಈ ಗುರು ದೇವರ ದೇವಸ್ಥಾನವನ್ನು ಮಾಡಲು ಓಂ ವಿಶ್ವ ಮಹಾಗುರು ಭಗವಾನ್ ಕ್ಷೇತ್ರ ಚಾರಿಟೇಬಲ್ ಟ್ರಸ್ಟ್ (ರಿ) ಸಂಸ್ಥೆಯಿಂದ ಆಯೋಜನೆ ಮಾಡುತ್ತಿದ್ದೇವೆ." : "With the inspiration of Om Vishwa Mahaguru Bhagavan, we are establishing Navagraha Gurudeva Temple in the historic Srirangapatna. Guru Bala is essential for everyone. Hence Guru Puja is done. Om Vishwa Mahaguru Bhagavan Kshetra Charitable Trust (R) is planning to make this Guru Deva temple."
                    }

                  </Typography>
                  <Box className="readMoreWrapper">
                    <Button sx={{ fontSize: "40%", backgroundColor: "#fc6011", color: "#fff", mt: "12%" }}>Read More</Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Link>
      </Modal>
    </div>
  );
}
