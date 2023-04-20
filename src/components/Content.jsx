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
      <Box sx={{ p: "12%" }}>
        {
          lang ?
            <table>
              <tr>
                <th>ಶ್ರೀ ಸುದರ್ಶನ ಕೋಟಿ ಮಹಾಯಾಗ ಪೂಜೆಯ ಕಾರ್ಯಕ್ರಮದ ಪಟ್ಟಿ</th>
                <th>ಸೇವಾ ವಿವರ</th>
                <th>ಸೇವಾ ಮೊತ್ತ</th>
              </tr>
              <tr>
                <td rowspan="3">
                  ದಿನಾಂಕ : 08.06.2023 ರ ಗುರುವಾರ ಸಂಜೆ 5-00 ಗಂಟೆಗೆ ಗಂಗಾಪೂಜೆ, ಯಾಗಶಾಲಾ ಪ್ರವೇಶ, ಗಣಪತಿ ಪೂಜೆ, ಸ್ವಸ್ತಿ ಪುಣ್ಯಾಹ:, ಪಂಚಗವ್ಯ, ಋತ್ವಿಕವರುಣ, ವಾಸ್ತು ಹೋಮ ಸುದರ್ಶನ ಜಪ 8-30ಕ್ಕೆ ಮಂಗಳಾರತಿ
                </td>
                <td>1 ಮಹಾ ಸುದರ್ಶನ ಹೋಮ ೩ ದಿನದ ಮಹಾ ಸೇವೆ</td>
                <td>2,00,00.00.00</td>
              </tr>
              <tr>
                <td>2 ಕಳಸ ಸೇವೆ</td>
                <td>51,000.00  </td>
              </tr>
              <tr>
                <td>3 ಸಹಸ್ರ ಮೋದಕ ಗಣಪತಿ ಸೇವೆ</td>
                <td>25,000.00</td>
              </tr>
              <tr>
                <td rowspan="3">
                  ದಿನಾಂಕ : 09.06.2023 ರ ಶುಕ್ರವಾರ 8-00 ಗಂಟೆಗೆ ಗಣಪತಿ ಪೂಜೆ, ಕಳಸ ಸ್ಥಾಪನೆ, ಮೋದಕ ಗಪತಿ ಹೋಮ, ನವಗ್ರಹ ಹೋಮ, ಸುದರ್ಶನ ಹೋಮ ಮಧ್ಯಾಹ್ನ 1-00 ಗಂಟೆಗೆ ಮಹಾಮಂಗಳಾರತಿ ತೀರ್ಥ ಪ್ರಸಾದ ವಿನಿಯೋಗ.
                </td>
                <td>4 ಶ್ರೀನಿವಾಸ ಕಲ್ಯಾಣ</td>
                <td>25,000.00</td>
              </tr>
              <tr>
                <td>5 ರುದ್ರಹೋಮದ ಸಂಕಲ್ಪ</td>
                <td>10,000.00  </td>
              </tr>
              <tr>
                <td>6 ದಂಪತಿ ಪೂಜೆ</td>
                <td>2,000.00</td>
              </tr><tr>
                <td rowspan="4">
                  ದಿನಾಂಕ : 10.06.2023 ರ ಶುಕ್ರವಾರ 6-00 ಗಂಟೆಗೆ ಅರುಣಾ ಪೂರ್ವಕ ಸೂರ್ಯ ನಮಸ್ಕಾರ, ಧನ್ವಂತರಿ ಹೋಮ, ದಂಪತಿ ಪೂಜೆ, ಸುವಾಸಿನಿ ಪೂಜೆ, ಕುಮಾರಿ ಪೂಜೆ, ಸುದರ್ಶನ ಹೋಮ, ಪೂರ್ಣಹತಿ ಮಧ್ಯಾಹ್ನ 1-00 ಗಂಟೆಗೆ ಮಹಾಮಂಗಳಾರತಿ ತೀರ್ಥ ಪ್ರಸಾದ ವಿನಿಯೋಗ ಅನ್ನದಾನ ಸಾಂಜೆ 6-30 ರಿಂದ 8-30 ರವರೆಗೆ ವಿಷ್ಣು ಸಹಸ್ರನಾಮ ಪಾರಾಯಣ, ಸುದರ್ಶನ ಜಪ.
                </td>
                <td>7 ಕುಮಾರಿ ಪೂಜೆ</td>
                <td>2,000.00</td>
              </tr>
              <tr>
                <td>8 ಸುವಾಸಿನಿ ಪೂಜೆ</td>
                <td>2,000.00 </td>
              </tr>
              <tr>
                <td>9 ಸಹಸ್ರನಾಮ ಪಾರಾಯಣ</td>
                <td>1,000.00</td>
              </tr>
              <tr>

                <td>10 ಒಂದು ದಿನದ ಅಣ್ಣ ಸಂತರ್ಪಣೆ</td>
                <td>1,00,000.00</td>
              </tr>
              <tr >
                <td rowspan="2">
                  ದಿನಾಂಕ : 11.06.2023 ರ ಶುಕ್ರವಾರ 8-00 ಗಂಟೆಗೆ ಮಹಾ ಸುದರ್ಶನ ಹೋಮ, 12-30 ಕ್ಕೆ ಗಂಟೆಗೆ ಮಹಾ ಪೂರ್ಣಾಹುತಿ, ಮಹಾ ಮಂಗಳಾರತಿ, ಆಶೀರ್ವಾದ, ಯತ್ವಿಕ್ ಸಂಭಾವನೆ, ತೀರ್ಥ ಪ್ರಸಾದ ವಿನಿಯೋಗ, ಅನ್ನದಾನ.
                </td>
                <td>11 ಸಂಕಲ್ಪ</td>
                <td>500.00  </td>
              </tr>
              <tr>
                <td center colspan="2">ಪ್ರತಿ ದಿನ 1 ಲಕ್ಷ ಜಪ 10 ಸಾವಿರ ಆಹುತಿ ಬೆಳಿಗ್ಗೆ ಮತ್ತು ಸಂಜೆ ನಡೆಯಲಿದೆ</td>

              </tr>
            </table>
            :
            <table>
              <tr>
                <th>Program list of Shri Sudarshan Koti Mahayaga Puja</th>
                <th>Service Details</th>
                <th>Service amount</th>
              </tr>
              <tr>
                <td rowspan="3">
                  Date : Thursday 08.06.2023 at 5-00 PM Ganga Puja, Yagashala Entry, Ganapati Puja, Swasti Punyaha:, Panchagavya, Ritvikavaruna, Vastu Homa Sudarshan Japa at 8-30 PM Mangalarati.
                </td>
                <td>1 Maha Sudarshan Homa Day Maha Seva</td>
                <td>2,00,00.00.00</td>
              </tr>
              <tr>
                <td>2 Kalasa service</td>
                <td>51,000.00  </td>
              </tr>
              <tr>
                <td>3 Sahasra Modaka Ganapati Seva</td>
                <td>25,000.00</td>
              </tr>
              <tr>
                <td rowspan="3">
                  Date : 09.06.2023 Friday 8-00 AM Ganapati Puja, Installation of Kalsa, Modaka Gapati Homa, Navagraha Homa, Sudarshan Homa 1-00 PM Distribution of Mahamangalarathi Theertha Prasad.
                </td>
                <td>4 Srinivasa kalyana</td>
                <td>25,000.00</td>
              </tr>
              <tr>
                <td>5 Sankalpa of Rudrahoma</td>
                <td>10,000.00  </td>
              </tr>
              <tr>
                <td>6 Dampathi Pooja</td>
                <td>2,000.00</td>
              </tr><tr>
                <td rowspan="4">
                  Date : 10.06.2023 Friday 6-00 AM Aruna Purvaka Surya Namaskara, Dhanvantari Homa, Dampathi Puja, Suvasini Puja, Kumari Puja, Sudarshan Homam, Purnahati 1-00 PM Distribution of Mahamangalarathi Tirtha Prasada, Annadana, 6-30 to 8-30 PM Vishnu Sahasranama Parayana, Sudarshan Japa.
                </td>
                <td>7 Kumari Pooja</td>
                <td>2,000.00</td>
              </tr>
              <tr>
                <td>8 Suvasini Pooja</td>
                <td>2,000.00 </td>
              </tr>
              <tr>
                <td>9 Sahasranama Parayana</td>
                <td>1,000.00</td>
              </tr><tr>

                <td>10 One Day Anna Santarpana</td>
                <td>1,00,000.00</td>
              </tr>
              <tr >
                <td rowspan="2">
                  Date : 11.06.2023 Friday at 8-00 AM Maha Sudarshan Homa, 12-30 PM Maha Poornahuti, Maha Mangalarati, Blessings, Yatvik Sambhavane, Distribution of Tirtha Prasad, Annadana.
                </td>
                <td>11 Sankalpa</td>
                <td>500.00  </td>
              </tr>
              <tr>
                <td center colspan="2">Every Day 1 Lakh Japa, 10 Thousand Ahuti will be held in the morning and evening</td>

              </tr>
            </table>
        }
      </Box>
      {/* </Grid> */}
    </Grid >
  );
};

export default Content;
