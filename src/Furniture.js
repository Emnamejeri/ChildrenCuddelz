import React from "react";
import {
  Typography,
  CssBaseline,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Container,
  Grid,
} from "@material-ui/core";
import useStyles from "./styles";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import EuroIcon from "@mui/icons-material/Euro";
const database = [
  {
    id: "8081",
    productName: "Baby and Toddler Crib",
    price: 300,
    key: require("./photos/furniture1.jpg").default,
  },
  {
    id: "8283",
    productName: "Baby Wood Crib ",
    price: 289,
    key: require("./photos/furniture2.jpg").default,
  },
  {
    id: "8485",
    productName: "Closet Items",
    price: 450,
    key: require("./photos/furniture3.jpg").default,
  },
  {
    id: "8687",
    productName: "White Wooden wardrobe",
    price: 189,
    key: require("./photos/furniture5.jpg").default,
  },
  {
    id: "8889",
    productName: "Sofa Chair",
    price: 115,
    key: require("./photos/furniture6.jpg").default,
  },
  {
    id: "9091",
    productName: "Long Sofa Chair",
    price: 220,
    key: require("./photos/furniture7.jpg").default,
  },
  {
    id: "1001",
    productName: "Rectangular Low Wardrobe",
    price: 190,
    key: require("./photos/furniture8.jpg").default,
  },
  {
    id: "1002",
    productName: "Circular Wooden Crib",
    price: 490,
    key: require("./photos/furniture9.jpg").default,
  },
  {
    id: "1003",
    productName: "Book Holder Set",
    price: 55,
    key: require("./photos/furniture10.jpg").default,
  },
  {
    id: "1004",
    productName: "Binky Jar",
    price: 25,
    key: require("./photos/furniture11.jpg").default,
  },
  {
    id: "1005",
    productName: "Indoor Small Tipi",
    price: 110,
    key: require("./photos/furniture12.jpg").default,
  },
  {
    id: "1006",
    productName: "Rectangular Grey Wardrobe",
    price: 189,
    key: require("./photos/furniture13.jpg").default,
  },
  {
    id: "1007",
    productName: "Study desk",
    price: 299,
    key: require("./photos/furniture16.jpg").default,
  },
  {
    id: "1008",
    productName: "Blue Whale Wardrobe",
    price: 210,
    key: require("./photos/furniture15.jpg").default,
  },
  {
    id: "1009",
    productName: "Decorative Lamps",
    price: 32,
    key: require("./photos/furniture14.jpg").default,
  },
];
function Furniture() {
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
export default Furniture;
