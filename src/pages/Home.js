import React, { useEffect, useState } from "react";
import GetInTouch from "../components/GetInTouch";
import Header from "../components/Header";
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

      <>
        <Header />
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
