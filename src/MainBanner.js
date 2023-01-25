import React from "react";

import useStyles from "./styles";

import { Typography, Container } from "@mui/material";

function MainBanner() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Cuddlez Store
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Only Premium Products For Your Little Ones
        </Typography>{" "}
      </Container>
    </div>
  );
}

export default MainBanner;
