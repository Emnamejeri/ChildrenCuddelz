import React from "react";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";

import EuroIcon from "@mui/icons-material/Euro";
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

const database = [
  {
    id: "3233",
    productName: "Red Dress",
    price: 50.99,
    key: require("./photos/clothes1.jpg").default,
  },
  {
    id: "3435",
    productName: "Colors Pattern Dress",
    price: 64.99,
    key: require("./photos/clothes2.jpg").default,
  },

  {
    id: "3637",
    productName: "Boy Blue Set",
    price: 87.99,
    key: require("./photos/clothes7.jpg").default,
  },
  {
    id: "3839",
    productName: "Patterned T-Shirt Flannel",
    price: 24.55,
    key: require("./photos/clothes8.jpg").default,
  },
  {
    id: "4041",
    productName: "Paw Patrol Set",
    price: 55.99,
    key: require("./photos/clothes9.jpg").default,
  },
  {
    id: "4243",
    productName: "Pinky New Born Set",
    price: 13.99,
    key: require("./photos/clothes15.jpg").default,
  },
  {
    id: "4445",
    productName: "White Cotton Dress",
    price: 29.99,
    key: require("./photos/clothes3.jpg").default,
  },
  {
    id: "4647",
    productName: "Dark blue Flannel",
    price: 32.99,
    key: require("./photos/clothes16.jpg").default,
  },
  {
    id: "4849",
    productName: "Aqua Girl Set",
    price: 56.99,
    key: require("./photos/clothes11.jpg").default,
  },
  {
    id: "5051",
    productName: "Pink Skirt ",
    price: 18.99,
    key: require("./photos/clothes5.jpg").default,
  },
  {
    id: "5253",
    productName: "Green Dinosaur Set",
    price: 60.99,
    key: require("./photos/clothes17.jpg").default,
  },
  {
    id: "5455",
    productName: "Beige Rain Coat",
    price: 74.99,
    key: require("./photos/clothes4.jpg").default,
  },
  {
    id: "5657",
    productName: "Baby Bath Cap",
    price: 20.99,
    key: require("./photos/clothes22.jpg").default,
  },
  {
    id: "5859",
    productName: "Cotton T-Shirt",
    price: 16.99,
    key: require("./photos/clothes18.jpg").default,
  },
  {
    id: "6061",
    productName: "Disney Princess Dress",
    price: 37.99,
    key: require("./photos/clothes14.jpg").default,
  },
  {
    id: "6263",
    productName: "White Cotton Flannel",
    price: 18.99,
    key: require("./photos/clothes19.jpg").default,
  },
  {
    id: "6465",
    productName: "Boy Lego Set",
    price: 45.99,
    key: require("./photos/clothes20.jpg").default,
  },
  {
    id: "6667",
    productName: "Cotton T-Shirt",
    price: 19.99,
    key: require("./photos/clothes21.jpg").default,
  },
  {
    id: "6869",
    productName: "Polka Dot Bbay Shower Cap",
    price: 22.99,
    key: require("./photos/clothes23.jpg").default,
  },
  {
    id: "7071",
    productName: "Pink Dress",
    price: 55.99,
    key: require("./photos/clothes12.jpg").default,
  },
  {
    id: "7273",
    productName: "Cotton Flower Set",
    price: 30.99,
    key: require("./photos/clothes10.jpg").default,
  },
  {
    id: "7475",
    productName: "Blue T-Shirt",
    price: 18.99,
    key: require("./photos/clothes24.jpg").default,
  },
  {
    id: "7677",
    productName: "Green Girl Dress",
    price: 56.99,
    key: require("./photos/clothes26.jpg").default,
  },
  {
    id: "7879",
    productName: "Grey Cotton Flannel",
    price: 25.99,
    key: require("./photos/clothes25.jpg").default,
  },
];

function Clothes() {
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
                    <img src={card.key} className={classes.theimage} alt="" />{" "}
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

export default Clothes;
