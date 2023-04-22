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
  Avatar,
  Button,
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
import FirePit from "../assets/FirePit2.gif";
import Chakra1 from "../assets/chakra1.png";
import Chakra2 from "../assets/shanka2.png";
import God from "../assets/god.jpeg"
import { useSelector } from "react-redux";
import Pdf from "../assets/pdf.pdf"
import Devotee1 from "../assets/devotee1.jpg"
import Devotee2 from "../assets/devotee2.jpg";
import Namam from "../assets/namam.png"

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
        py: 4,
        px: 2,
        position: "relative",
      }}
    >
      {/* <Grid item xs={12} sm={12} md={5} component="section"> */}
      <Avatar src={God} alt="" className="godImg" />
      <Box className="aboutHeader mt-12">
        <img src={Chakra1} className="chakraImg" />
        {/* <Box className="centeringFlex">


        </Box> */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={5} sx={{ display: "grid", placeItems: "center" }}><h4 style={{ marginRight: "6px" }}>ಲೋಕ ಕಲ್ಯಾಣಾರ್ಥಕ್ಕಾಗಿ </h4></Grid>
          <Grid item xs={12} md={12} lg={2} sx={{ display: "grid", placeItems: "center" }}><img src={Namam} alt="" width={"72px"} /></Grid>
          <Grid item xs={12} md={12} lg={5} sx={{ display: "grid", placeItems: "center" }}><h4 style={{ marginLeft: "6px" }}>ಶ್ರೀ ಸುದರ್ಶನ ಮಹಾಯಾಗ</h4></Grid>
        </Grid>
        <img src={Chakra2} className="chakraImg" />
      </Box>
      <Box className="dateWrapper">
        {
          lang ? <h4>ದಿನಾಂಕ: 09.06.2023 ರಿಂದ 11.06.2023</h4> : <h4>Date : 09.06.2023 to 11.06.2023</h4>
        }

      </Box>
      <Box sx={{ pb: "2%" }}>
        <div className="centeringElementMain">
          <img src={FirePit} className="aboutFirePit" />
        </div>
      </Box>
      <Box className="dateWrapper">
        {
          lang ? <h4>ಓಂ ವಿಶ್ವ ಮಹಾಗುರು ಭಗವಾನ್ ರವರ ಪ್ರೇರಣೆಯಿಂದ ನವಗ್ರಹದ ಗುರುದೇವರ ದೇವಸ್ಥಾನವನ್ನು ಐತಿಹಾಸಿಕ ಪ್ರಸಿದ್ದವಾದ ಶ್ರೀರಂಗಪಟ್ಟಣದಲ್ಲಿ ಸ್ಥಾಪನೆ ಮಾಡುತ್ತಿದ್ದೇವೆ. ಎಲ್ಲರಿಗೂ ಗುರು ಬಲವು ಮುಖ್ಯವಾಗಿ ಬೇಕಾಗಿರುತ್ತದೆ. ಆದುದರಿಂದ ಗುರುಪೂಜೆಯನ್ನು ಮಾಡಲಾಗುತ್ತದೆ. ಈ ಗುರು ದೇವರ ದೇವಸ್ಥಾನವನ್ನು ಮಾಡಲು ಓಂ ವಿಶ್ವ ಮಹಾಗುರು ಭಗವಾನ್ ಕ್ಷೇತ್ರ ಚಾರಿಟೇಬಲ್ ಟ್ರಸ್ಟ್ (ರಿ) ಸಂಸ್ಥೆಯಿಂದ ಆಯೋಜನೆ ಮಾಡುತ್ತಿದ್ದೇವೆ. ಶ್ರೀರಂಗಪಟ್ಟಣದಲ್ಲಿ ಶ್ರೀ ರಂಗನಾಥಸ್ವಾಮಿಯ ಶಕ್ತಿಯು ಅಪಾರವಾದುದ್ದು. ಇಲ್ಲಿ 30 ವರ್ಷಗಳ ಹಿಂದೆ ಯಾಗವನ್ನು ಮಾಡಿದ್ದು ಎಂದು ತಿಳಿದು ಬಂದಿದೆ. ಈ ಸಂಸ್ಥೆಯು ಇದೇ ಸ್ಥಳದಲ್ಲಿ ಯಾಗವನ್ನು ಮಾಡಲು ಹಾಗು ಇಲ್ಲಿ ಶ್ರೀ ರಂಗನಾಥ್ ಸ್ವಾಮಿ ನೆಲಸಿಕೊಡುವದರಿಂದ ಶ್ರೀ ಸುಧರ್ಶನ್ ಮಹಾಯಾಗವನ್ನು ಮಾಡಲು ಆಯೋಜಿಸಲಾಗಿದೆ ಈ ಮಹಾಯಾಗದಲ್ಲಿ ಐದು ನದಿಗಳ್ ಜಲಭರಿತ್ 108 ಕೇಶಗಲ್ಲಿದ್ದು 11 ಹೋಮ ಕುಂಡಲಗಳನ್ನು ಸ್ಥಾಪಿಸಿ ಸುಮಾರು 130  ಜನ ಪ್ರಸಿದ್ಧ ಪುರೋಹಿತರಿಂದ್ ಪ್ರತಿ ದಿನವೂ ಬೇರೆ ಬೇರೆ ಪೂಜೆ ಹೋಮಗಳು ನಡೆಯಲಿದೆ .ಪ್ರತಿದಿನವೂ ಪ್ರಸಾದ್ ವಿನಿಯೋಗ  ಇರಲಿದ್ದು. ಮಧ್ಯಾಹ್ನ ಅನ್ನದಾನ ಇರುತ್ತದೆ. ಈ ಜನ್ಮದಲ್ಲಿ ಒಮ್ಮೆ ದೋರೆಯಬಹುದಾದ 4 ದಿನಗಳವರೆಗೆ ಈ ಮಹಾ ಮಹತ್ವ ಕಾರ್ಯದಲ್ಲಿ ಪರಮ ಪೂಜ್ಯರಾದ ಜಗದ್ಗುರು ಶ್ರೀ ಶ್ರೀ ಶ್ರೀ ಭಾರತಿ ತೀರ್ಥ ಮಹಾಸ್ವಾಮೀಜಿಗಳು ಶೃಂಗೇರಿ ಮಹಾಸಂಸ್ಥಾನ ಮಠ ಮತ್ತು ಪೂಜ್ಯರಾದ ಡಾ|| ಡಿ. ವೀರೇಂದ್ರ ಹೆಗ್ಗಡೆ ರವರು ಧರ್ಮಾಧಿಕಾರಿಗಳು ಶ್ರೀ ಕ್ಷೇತ್ರ ಧರ್ಮಸ್ಥಳ ಇವರುಗಳ ಆಶೀರ್ವಾದಗಳೊಂದಿಗೆ ನಡೆಯಲಿರುವ ಕಾರ್ಯದಲ್ಲಿ ಲಕ್ಷಾಂತರ ಸಂಖ್ಯೆಯ ಭಕ್ತಾಧಿಗಳು ಭಾಗವಹಿಸಲಿದ್ದಾರೆ. ಭಗವದ್ಭಕ್ತರು ಲೋಕ ಕಲ್ಯಾಣಾರ್ಥಕ್ಕಾಗಿ ನಡೆಯಲಿರುವ ಶ್ರೀ ಸುದರ್ಶನ ಮಹಾಯಾಗ ಎಂಬ ದೈವ ಕಾರ್ಯಕ್ಕೆ ಅನ್ನದಾನಕ್ಕಾಗಿ ತಮ್ಮ ಕೈಲಾದಷ್ಟು ಧನ ಸಹಾಯ ಮಾಡಿ ತಮ್ಮ ತಾನು ಮನ ಧನ ಸಹಾಯದೊಂದಿಗೆ ಈ ಪುಣ್ಯಕಾರ್ಯದಲ್ಲಿ ಭಾಗವಹಿಸಿ ಓಂ ಗುರು ಭಗವಾನ್ ರವರ ಹಾಗೂ ಶ್ರೀ
            ರಂಗನಾಥಸ್ವಾಮಿ ಕೃಪಾಶೀರ್ವಾದಗಳಿಗೆ ಪಾತ್ರರಾಗಿ ಪುನೀತರಾಗಬೇಕೆಂದು ವಿನಂತಿಸಿಕೊಳ್ಳುತ್ತೇವೆ.</h4> : <h4>With the inspiration of Om Vishwa Mahaguru Bhagavan, we are establishing Navagraha Gurudeva Temple in the historic Srirangapatna. Guru Bala is essential for everyone. Hence Guru Puja is done. Om Vishwa Mahaguru Bhagavan Kshetra Charitable Trust (R) is planning to make this Guru Deva temple. Sri Ranganathaswamy's power in Srirangapatna was immense. It is known that Yaga was performed here 30 years ago. This organization is organized to do Yaga at this place and Sri Sudharshan Mahayaga is organized here because of Sri Ranganath Swami. In this Mahayaga there are five rivers flowing in 108 keshas and 11 Homa Kundals are established and around 130 famous priests will perform different puja homas every day. There will be refreshments in the afternoon. For 4 days which can only be visited once in this life, in this great important work, the most revered Jagadguru Sri Sri Bharati Theertha Mahaswamiji of Sringeri Mahasansthan Math and revered Dr|| D. Lakhs of devotees will participate in the function to be held with the blessings of Virendra Heggade's Dharmadhikari Sri Kshetra Dharmasthala. We request the devotees to donate as much money as they can for the food donation for the divine work of Shri Sudarshan Mahayaga to be held for the welfare of the world and participate in this meritorious work with the help of mana dhan and get blessed by the blessings of Lord Om Guru and Sri Ranganathaswamy.</h4>
        }

      </Box>
      <Box sx={{ px: "12%", width: "100%" }}>
        <Grid container spacing={2} sx={{ placeContent: "flex-start" }}>
          <Grid item xs={6} md={6} lg={4}>
            <div className="devoteeWrapper">
              <img src={Devotee1} alt="" className="devoteeImg" />
              {
                lang ? <><h4>ವೇದ ಬ್ರಹ್ಮ  ಶ್ರೀ ಸಿ. ಹೆಚ್. ಕೃಷ್ಣ ಶರ್ಮ
                  ಶ್ರೀ ಲಕ್ಷ್ಮಿ ದೇವಸ್ಥಾನ
                </h4></> : <><h4>Veda Brahma Shri C. H. Krishna Sharma
                  Shri Lakshmi Temple</h4></>
              }
            </div>
          </Grid>
          <Grid item xs={6} md={6} lg={4}>
            <div className="devoteeWrapper">
              <img src={Devotee2} alt="" className="devoteeImg" />
              {
                lang ? <><h4>ಪ್ರಸಿದ್ಧ ಜ್ಯೋತಿಷ್ಯರು</h4><br /><h4>ವೇದ ಬ್ರಹ್ಮ ಶ್ರೀ ಡಾ| ಭಾನು ಪ್ರಕಾಶ್ ಶರ್ಮ
                </h4></> : <><h4>Popular jyotishi</h4><br /><h4>Veda Brahma Shri Dr. Bhanu Prakash Sharma</h4></>
              }
            </div>
          </Grid>
          {/* <Grid item xs={4}></Grid> */}
        </Grid>
      </Box>
      <Box sx={{ p: "12% 12% 0 12%" }}>
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
      <Box className="btnWrapper">
        <a href={Pdf}
          target="_blank"
          rel="noopener noreferrer"><Button download="Pamplet" className="dwnldBtn" >Download</Button></a>
      </Box>

      {/* </Grid> */}
    </Grid >
  );
};

export default Content;