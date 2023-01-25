import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import useStyles from "./styles";
import { Typography, CssBaseline } from "@mui/material";
function Footer() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <footer className={classes.footer}>
        <Typography variant="h5" align="center" gutterBottom>
          {" "}
          Follow Us On Social Media For More Updates <br />{" "}
          <FacebookIcon color="action" />
          <InstagramIcon color="action" />
          <LinkedInIcon color="action" />
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          {" "}
          Made with Love by Emna in 2022
        </Typography>
      </footer>{" "}
    </div>
  );
}

export default Footer;
