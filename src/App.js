import React, { Suspense, useEffect, useState } from "react";
//rotas
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
//componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import AnimationLoader from "./components/AnimationLoader";
import "./App.css";
import Bg from "./assets/bg_original.jpeg";
import { Button } from "@mui/material";
import FullContent from "./components/FullContent";
import Payment from "./pages/Payment";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import { setLang, setLoader } from "./common/action";
import LoaderWrapper from "./assets/ohm_circel.png";
import Ohm from "./assets/Om_symbol.png";
import Devotee from "./components/FullContent";

function App() {
  const [language, setLanguage] = useState("Donate");
  const [homeFinder, setHomeFinder] = useState(false);

  const getLang = useSelector((state) => state.setLangReducerResult);
  const { lang } = getLang;

  const getLoader = useSelector((state) => state.laoderReducerResult);
  const { loader } = getLoader;


  const dispatch = useDispatch()

  const handleTranslate = () => {
    dispatch(setLang(!lang))
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch(setLoader(false))
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [loader]);

  const kannada = () => setLanguage("ದಾನ ಮಾಡಿ");
  const english = () => setLanguage("Donate");

  // if (language === "Donate") {
  //   setTimeout(() => {
  //     kannada();
  //   }, 3000);
  // } else {
  //   setTimeout(() => {
  //     english();
  //   }, 3000);
  // }

  useEffect(() => {
    setHomeFinder(false)

    // return () => {
    //   setHomeFinder(false)
    // }
  }, [homeFinder])

  return (
    <>
      {/* {<img src={Bg} alt="" className="bg-main" />} */}
      {
        loader === false && window.location.pathname !== "/payment" && <Button variant="outlined" className="translateBtn" onClick={handleTranslate}>
          {
            lang ? "A" : "ಕ"
          }
        </Button >
      }
      {/* "homepage": "http://files.axninfotech.com/", */}

      <BrowserRouter>
        {
          window.location.pathname !== "/payment" && <Link to="/payment">
            <Button variant="outlined" className="donateBtn rspBtn">
              {language}
            </Button >
          </Link>
        }
        <Navbar />
        {
          loader && <div className="centeringElement">
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
          </div>
        }
        {
          loader === false && <Routes>
            {/* <Suspense fallback={<AnimationLoader />}> */}
            <Route path="/" element={<Home loader={loader} setLoader={setLoader} />} />
            <Route path="/yaga" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/content" element={<FullContent />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/devotee" element={<Devotee />} />
            {/* </Suspense> */}
          </Routes>
        }

      </BrowserRouter>
      {window.location.pathname.includes("payment")
        ? null : <Footer />}
    </>
  );
}

export default App;