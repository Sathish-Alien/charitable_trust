import React, { useEffect, useState } from "react";
import GetInTouch from "../components/GetInTouch";
import GetStarted from "../components/GetStarted";
import Header from "../components/Header";
import { Button, Container } from "@mui/material";
import LoaderWrapper from "../assets/ohm_circel.png";
import Ohm from "../assets/Om_symbol.png";
import AboutPop from "../components/AboutPop";
// import BackgroundImage from "../assets/bg1.jpg"

const Home = (props) => {
  const { loader, setLoader } = props
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useEffect(() => {
    let timer = setTimeout(() => {
      handleOpen();
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* {loader ? ( */}
        {/* <div className="centeringElement">
          <div className="animationWrapper">
            <img
              src={LoaderWrapper}
              style={{
                width: "100%",
              }}
              alt=""
              className="ohmCircle"
            />
            <img src={Ohm} alt="" className="ohmsymbol" />
          </div>
        </div> */}
      {/* // ) : ( */}
        <>
          {/* <Button variant='outlined' className='donateBtn'>Donate</Button> */}
          <Header />
          {/* <GetStarted /> */}
          <GetInTouch />
          <AboutPop
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
        </>
      {/* // )} */}
    </>
  );
};

export default Home;
