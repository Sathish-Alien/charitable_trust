import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function Aboutus() {
    const getLang = useSelector((state) => state.setLangReducerResult)
  const { lang } = getLang
  return (
    <>
    <Box sx={{p:4,mt:6,mb:25}}>
        {
          lang ? <h4>ಓಂ ವಿಶ್ವ ಮಹಾಗುರು ಭಗವಾನ್ ಕ್ಷೇತ್ರ ಚಾರಿಟೇಬಲ್ ಟ್ರಸ್ಟ್ (ರಿ), ಈ ಸಂಸ್ಥೆಯನ್ನು ದಿನಾಂಕ 05.01.2021 ರಂದು ಪ್ರಾರಂಭ ಮಾಡಿರುತ್ತದೆ. ಈ ಸಂಸ್ಥೆಯಲ್ಲಿ ಒಟ್ಟು 9 ಜನ ಸದಸ್ಯರು ಒಲ್ಲಗೊಂಡಿರುತ್ತಾರೆ. ಒಳ್ಳೆಯ ಕಾರಣಕ್ಕಾಗಿ ಈ ಸಂಸ್ಥೆಯನ್ನು ಪ್ರಾರಂಭ ಮಾಡಿರುತ್ತದೆ. ಗುರು ದೇವಸ್ಥಾನ, ಗೋಶಾಲೆ, ಗುರುಕುಲ, ಬಡವರಿಗೆ ವಿದ್ಯಾಭ್ಯಾಸ, ಅನ್ನದಾಸೋಹ, ಬಡವರಿಗೆ, ಕಲ್ಯಾಣಮಂಟಪ ಇನ್ನು ಅನೇಕ ಧರ್ಮ ಕಾರ್ಯ ಹಾಗು ಸಾಮಾಜಿಕ ಕಾರ್ಯಗಳನ್ನು ಕೈಗೊಂಡು ಒಳ್ಳೆಯ ಬೆಳವಣಿಗೆಗಾಗಿ ಈ ಸಂಸ್ಥೆಯನ್ನು ನೆಡೆಸಲು ನಿರ್ಮಾಣ ಮಾಡಿರುತ್ತದೆ.</h4> : <h4>Om Vishwa Mahaguru Bhagavan Kshetra Charitable Trust (R), this organization was started on 05.01.2021. There are total 9 members in this organization. This organization is started for a good reason. Guru temple, Goshala, Gurukula, education for the poor, Annadasoha, welfare hall and many other religious and social works are some of vision and mission to establish this institution for good development.</h4>
        }

      </Box>
    </>
  )
}

export default Aboutus