import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
//img
import headerImg from '../assets/pexels-binyamin-mellish-186078.png'
import Namaste from "../assets/Namaste.png"
import LoaderWrapper from "../assets/ohm_circel.png"
import Ohm from "../assets/Om_symbol.png"
import AboutPop from './AboutPop';
import { setLang } from '../common/action';
import { useDispatch, useSelector } from 'react-redux';
import Logo from "../assets/logo.png"

const Header = () => {
    const getLang = useSelector((state) => state.setLangReducerResult)
    const { lang } = getLang

    const CustomBox = styled(Box)(({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        // cor de fundo
        backgroundColor: 'orange',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box)(({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


    return (


        <Box sx={theme => ({
            [theme.breakpoints.down('md')]: {
                flex: '1',
                paddingTop: '30px',
                alignSelf: 'center',
            },
            [theme.breakpoints.up('md')]: {
                flex: '2',
                alignSelf: 'flex-end',
            },
        })}
        >
            <div style={{
                display: "grid",
                placeItems: "center",
                margin: "auto",
                width: "fit-content",
                // height: "100vh"
            }}>
                <Box className='centeringElementHome'>
                    <div className='animationWrapperHome'>
                        <img src={LoaderWrapper} style={{
                            width: "100%"
                        }} alt="" className='ohmCircleHome' />
                        <img src={Ohm} alt="" className='ohmsymbolHome' />
                    </div>
                </Box>
                <Box>
                    <Typography component='h4' sx={{ position: "relative", textAlign: "center" }}><span className='trustName'>
                        {
                            lang ? "ಓಂ ವಿಶ್ವ ಮಹಾಗುರು ಭಗವಾನ್ ಕ್ಷೇತ್ರ" : "OM Vishva Mahaguru Bhagavan Kshetra"
                        }
                    </span></Typography>
                    <Typography component="h5" sx={{ position: "relative", textAlign: "center" }}><span className='trustName'>{
                        lang ? "ಚಾರಿಟೇಬಲ್ ಟ್ರಸ್ಟ್ (ರಿ)" : "Charitable Trust (R)"
                    }</span></Typography>
                    {/* <Typography component="p" sx={{ position: "relative", textAlign: "center", mt: "2%" }}><span className='trustAddress'>{
                        lang ? "ಸ್ಥಳ: ಶ್ರೀ ರಂಗನಾಥಸ್ವಾಮಿ ದೇವಸ್ಥಾನ ಮುಂಬಾಗ ಮೈದಾನದ ಆವರಣದಲ್ಲಿ ಶ್ರೀರಂಗಪಟ್ಟಣ," : "opp – Shri Ranganathswami temple, Play Ground, Shrirangapattana,"
                    } </span></Typography>
                    <Typography component="p" sx={{ position: "relative", textAlign: "center", mt: "1%" }}><span className='trustAddress'>{
                        lang ? "ಮಂಡ್ಯ ಜಿಲ್ಲೆ – 571438" : "Mandya District – 571438"
                    }</span></Typography>
                    <Typography component="p" sx={{ position: "relative", textAlign: "center", mt: "1%" }}><span className='trustAddress'>{
                        lang ? "ದಿನಾಂಕ: 09.06.2023 ರಿಂದ 11.06.2023" : "Date : 09.06.2023 to 11.06.2023"
                    }</span></Typography> */}
                </Box>
                <img
                    src={Namaste}
                    alt="headerImg"
                    style={{
                        width: "70%",
                        marginBottom: -15,
                        mixBlendMode: "darken"
                    }}
                    className='welcomeHands'
                />
            </div>
            <AboutPop />
        </Box>
    )
}

export default Header