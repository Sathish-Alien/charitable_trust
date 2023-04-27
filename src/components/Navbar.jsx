import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  Typography,
  styled,
  ListItemButton,
  ListItemText,
  ClickAwayListener,
  Button,
} from "@mui/material";
// menu
import DrawerItem from "./DrawerItem";
// rotas
import { Link } from "react-router-dom";
import Logo from "../assets/logo2.png"
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "../common/action";

// personalizacao
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const ListMenu = styled(List)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

//rotas

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()
  const getLang = useSelector((state) => state.setLangReducerResult);
  const { lang } = getLang;

  const itemList = [
    {
      text: "Home",
      to: "/",
    },
    {
      text: "Yaga",
      to: "/yaga",
    },
    {
      text: "About us",
      to: "/about-us",
    },
    // {
    //   text: "Devotee",
    //   to: "/devotee",
    // },
    {
      text: "Contact",
      to: "/contact",
    },
  ];

  const handleTranslate = () => {
    dispatch(setLang(!lang))
  }

  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{
        // backgroundColor: 'orange',
        /* Created with https://www.css-gradient.com */
        background: "#000"
        // background: "-webkit-linear-gradient(top left, #390AF7, #AD77C5)",
        // backgroundImage: "linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)"
        // background: -moz-linear-gradient(top left, #390AF7, #AD77C5);
        // background: linear-gradient(to bottom right, #390AF7, #AD77C5);
      }}
      elevation={0}
    >
      <StyledToolbar>
        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
          <img src={Logo} alt='' width={"8%"} style={{ marginRight: "8px", padding: "2%" }} />
          {/* <Typography variant="h6" component="h2">
            CHARITABLE TRUST
          </Typography> */}
        </div>
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <DrawerItem open={open} setOpen={setOpen} />
          </Box>
        </ClickAwayListener>
        {/* <Button variant="outlined" sx={{width : "50%"}} className="" onClick={() => dispatch(setLang(!lang))}>
          {
            lang ? "English" : "Kannada"
          }
        </Button > */}
        <ListMenu>
          {itemList.map((item) => {
            const { text } = item;
            return (
              <ListItem key={text} onClick={() => setOpen(false)}>
                <ListItemButton
                  component={Link}
                  to={item.to}
                  sx={{
                    "white-space": "nowrap", 
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#fff",
                    },
                  }}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </ListMenu>
      </StyledToolbar>
    </AppBar >
  );
};

export default Navbar;
