import React from "react";

import {
  Typography,
  CssBaseline,
  Button,
  ButtonGroup,
  Card,
  Grid,
  Container,
  CardContent,
} from "@material-ui/core";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import EuroIcon from "@mui/icons-material/Euro";
import useStyles from "./styles";
const database = [
  {
    id: "1010",
    productName: "Fruits and Vegetables Book",
    price: 6.99,
    key: require("./photos/book1.jpeg").default,
  },
  {
    id: "1011",
    productName: "Fun with Numbers and Shapes",
    price: 9.99,
    key: require("./photos/book2.jpeg").default,
  },
  {
    id: "1012",
    productName: "Coloring Book ",
    price: 7.89,
    key: require("./photos/book3.jpeg").default,
  },
  {
    id: "1013",
    productName: "Toddler Coloring Book",
    price: 7.89,
    key: require("./photos/book4.jpeg").default,
  },
  {
    id: "1014",
    productName: "Easy Coloring Book",
    price: 7.89,
    key: require("./photos/book5.jpeg").default,
  },
  {
    id: "1015",
    productName: "Rescue at Lake Wild Book",
    price: 9.99,
    key: require("./photos/book6.png").default,
  },
  {
    id: "1016",
    productName: "Charlotte's Web",
    price: 10.99,
    key: require("./photos/book7.jpeg").default,
  },
  {
    id: "1017",
    productName: "My Quiet Imagination",
    price: 8.99,
    key: require("./photos/book8.jpeg").default,
  },
  {
    id: "1018",
    productName: "The Voyage to Magical North",
    price: 13.99,
    key: require("./photos/book9.jpeg").default,
  },
  {
    id: "1019",
    productName: "Peter Pan",
    price: 10.99,
    key: require("./photos/book10.png").default,
  },
  {
    id: "1020",
    productName: "Skycircus",
    price: 5.89,
    key: require("./photos/book11.jpeg").default,
  },
  {
    id: "1021",
    productName: "Susie Won't Back Down",
    price: 16.99,
    key: require("./photos/book12.jpeg").default,
  },
  {
    id: "1022",
    productName: "Red Riding Hood",
    price: 9.99,
    key: require("./photos/book13.jpeg").default,
  },
  {
    id: "1023",
    productName: "Alphabet Book",
    price: 13.89,
    key: require("./photos/book14.jpeg").default,
  },
  {
    id: "1024",
    productName: "Having A Friend",
    price: 8.99,
    key: require("./photos/book15.jpeg").default,
  },
];
function Learning() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />{" "}
      <Container className={classes.cardGrid}>
        <Grid container spacing={2}>
          {database.map((card) => {
            return (
              <Grid item key={card.id} xs={12} md={4} sm={6}>
                <Card className={classes.card}>
                  {" "}
                  <CardContent className={classes.cardContent}>
                    <img src={card.key} className={classes.theimage} alt="" />
                    <Typography gutterBottom variant="h6">
                      {" "}
                      <h5 className={classes.producttitle}>
                        {card.productName}
                      </h5>
                      <h6>
                        Price {card.price} <EuroIcon fontSize="sx" />
                      </h6>
                    </Typography>
                    <ButtonGroup variant="text" aria-label="text button group">
                      <Button>Add to Cart</Button>
                      <Button>
                        Save <FavoriteTwoToneIcon color="success" />
                      </Button>
                    </ButtonGroup>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}{" "}
        </Grid>
      </Container>
    </div>
  );
}
export default Learning;
