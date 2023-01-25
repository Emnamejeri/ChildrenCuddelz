import React from "react";
import Clothes from "./Clothes";
import Furniture from "./Furniture";
import Learning from "./Learning";
import Toys from "./Toys";
import Footer from "./Footer";

import ButtonBases from "./ButtonBases";

import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import AbcOutlinedIcon from "@mui/icons-material/AbcOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import NavBar from "./NavBar";
import MainBanner from "./MainBanner";
import { Typography, Container } from "@mui/material";
import useStyles from "./styles";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline /> <NavBar />
      <main>
        <MainBanner />
        <Container>
          <ButtonBases />
        </Container>
        <div>
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
            className={classes.subjecttitle}
          >
            {" "}
            Education <AbcOutlinedIcon />
          </Typography>
          <Learning />
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
            className={classes.subjecttitle}
          >
            {" "}
            Decoration & Design <ChairOutlinedIcon />
          </Typography>
          <Furniture />
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
            className={classes.subjecttitle}
          >
            {" "}
            Fashion & Style <DiamondOutlinedIcon />
          </Typography>
          <Clothes />

          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
            className={classes.subjecttitle}
          >
            {" "}
            Fun & Games <SmartToyOutlinedIcon />
          </Typography>
          <Toys />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
