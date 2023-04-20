import React, { useEffect } from 'react'
import {
  Box,
  Stack,
  styled,
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useSelector } from 'react-redux';

const Footer = () => {
  const getLang = useSelector((state) => state.setLangReducerResult)
  const { lang } = getLang
  const StackColumn = styled(Stack)(() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (

    <BoxRow
      component='footer'
      sx={window.location.pathname.includes("payment") ? {
        py: 4,
        px: 2,
        display: 'flex',
        justifyContent: "center",
        backgroundColor: "rgba(225, 225, 225, 0.5)",
        textAlign: "center",
        fontSize: "70%",
        fontWeight: "600",
        position: "fixed",
        bottom: 0
      } : {
        py: 4,
        px: 2,
        display: 'flex',
        justifyContent: "center",
        backgroundColor: "rgba(225, 225, 225, 0.5)",
        textAlign: "center",
        fontSize: "70%",
        fontWeight: "600",
      }}
    >
      {
        lang ? "ಭಗವದ್ಭಕ್ತರು ಲೋಕ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ನೆಡೆಯಲಿರುವ ಶ್ರೀ ಸುದರ್ಶನ ಮಹಾಯಾಗಕ್ಕೆ ತಮ್ಮ ಮನೋ ಇಚ್ಚೆಯಿಂದ ಕೈಲಾದಷ್ಟು ನೀಡಬೇಕೆಂದು ತಮ್ಮಲ್ಲಿ ಕಳಕಳಿಯಿಂದ ವಿನಂತಿಸಿಕೊಳ್ಳುತ್ತೇವೆ." : "We request the Bhagavad devotees to give their best possible help to the Sri Sudarshan Mahayaga to be held for the welfare of the world."
      }
    </BoxRow>
  )
}

export default Footer