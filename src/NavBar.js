import React from "react";
import useStyles from "./styles";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import { Typography, AppBar, Button, Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Signuppage from "./Signuppage";
import Checkout from "./Checkout";
import InputBase from "@mui/material/InputBase";

import { styled, alpha } from "@mui/material/styles";

function NavBar() {
  const classes = useStyles();
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  return (
    <div>
      {" "}
      <AppBar position="relative">
        <Toolbar className={classes.navigationBar}>
          <div className={classes.sectionone}>
            {" "}
            <BedroomBabyIcon
              sx={{ display: { xs: "block", sm: "none" } }}
              className={classes.icontop}
            />
            <Typography
              variant="h4"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Cuddlez{" "}
            </Typography>{" "}
          </div>

          <div className={classes.sectiontwo}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <search></search>
            <Button variant="contained" className={classes.buttontwo}>
              Newsletter
            </Button>
            <Button
              variant="contained"
              startIcon={<ShoppingCartOutlinedIcon fontSize="sx" />}
              className={classes.buttonone}
            >
              Cart
            </Button>
            <Button variant="contained" className={classes.buttonthree}>
              <DarkModeTwoToneIcon fontSize="medium" />
            </Button>
          </div>
        </Toolbar>
      </AppBar>{" "}
    </div>
  );
}

export default NavBar;
