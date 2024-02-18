import React from "react";
import { Typography, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import ProductInfo from "./ProductInfo";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CustomerReviews from "./CustomerReviews";
import { Offers } from "./Offers";
import { Grid, Paper, makeStyles } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
// import Paper from "@mui/material/Paper";
// import HighlightedCode from "docs/src/modules/components/HighlightedCode";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

const imagePaths = [
  {
    id: 1,
    link: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw44a823b6/original/90_1012564-1A09063_1B000_10_90sVintageLogoHoodie-Clothing-Versace-online-store_2_9.jpg?sw=850&q=85&strip=true",
  },
  {
    id: 2,
    link: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwfda37dc3/original/90_1008661-1A06213_1W000_10_LaMedusaHoodie-Sweatshirts-Versace-online-store_0_3.jpg?sw=850&q=85&strip=true",
  },
  {
    id: 3,
    link: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwd6b6a9e4/original/90_1008661-1A06213_1UF90_10_LaMedusaHoodie-Sweatshirts-Versace-online-store_0_7.jpg?sw=850&q=85&strip=true",
  },
  {
    id: 4,
    link: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwd6b6a9e4/original/90_1008661-1A06213_1UF90_10_LaMedusaHoodie-Sweatshirts-Versace-online-store_0_7.jpg?sw=850&q=85&strip=true",
  },
  {
    id: 5,
    link: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwd6b6a9e4/original/90_1008661-1A06213_1UF90_10_LaMedusaHoodie-Sweatshirts-Versace-online-store_0_7.jpg?sw=850&q=85&strip=true",
  },
  {
    id: 6,
    link: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwd6b6a9e4/original/90_1008661-1A06213_1UF90_10_LaMedusaHoodie-Sweatshirts-Versace-online-store_0_7.jpg?sw=850&q=85&strip=true",
  },
  {
    id: 1,
    link: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw44a823b6/original/90_1012564-1A09063_1B000_10_90sVintageLogoHoodie-Clothing-Versace-online-store_2_9.jpg?sw=850&q=85&strip=true",
  },
  {
    id: 2,
    link: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwfda37dc3/original/90_1008661-1A06213_1W000_10_LaMedusaHoodie-Sweatshirts-Versace-online-store_0_3.jpg?sw=850&q=85&strip=true",
  },
  {
    id: 3,
    link: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwd6b6a9e4/original/90_1008661-1A06213_1UF90_10_LaMedusaHoodie-Sweatshirts-Versace-online-store_0_7.jpg?sw=850&q=85&strip=true",
  },
  {
    id: 4,
    link: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwd6b6a9e4/original/90_1008661-1A06213_1UF90_10_LaMedusaHoodie-Sweatshirts-Versace-online-store_0_7.jpg?sw=850&q=85&strip=true",
  },
  {
    id: 5,
    link: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwd6b6a9e4/original/90_1008661-1A06213_1UF90_10_LaMedusaHoodie-Sweatshirts-Versace-online-store_0_7.jpg?sw=850&q=85&strip=true",
  },
  {
    id: 6,
    link: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwd6b6a9e4/original/90_1008661-1A06213_1UF90_10_LaMedusaHoodie-Sweatshirts-Versace-online-store_0_7.jpg?sw=850&q=85&strip=true",
  },
  {
    id: 1,
    link: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw44a823b6/original/90_1012564-1A09063_1B000_10_90sVintageLogoHoodie-Clothing-Versace-online-store_2_9.jpg?sw=850&q=85&strip=true",
  },
  {
    id: 2,
    link: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwfda37dc3/original/90_1008661-1A06213_1W000_10_LaMedusaHoodie-Sweatshirts-Versace-online-store_0_3.jpg?sw=850&q=85&strip=true",
  },
  {
    id: 3,
    link: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwd6b6a9e4/original/90_1008661-1A06213_1UF90_10_LaMedusaHoodie-Sweatshirts-Versace-online-store_0_7.jpg?sw=850&q=85&strip=true",
  },
  {
    id: 4,
    link: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwd6b6a9e4/original/90_1008661-1A06213_1UF90_10_LaMedusaHoodie-Sweatshirts-Versace-online-store_0_7.jpg?sw=850&q=85&strip=true",
  },
  {
    id: 5,
    link: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwd6b6a9e4/original/90_1008661-1A06213_1UF90_10_LaMedusaHoodie-Sweatshirts-Versace-online-store_0_7.jpg?sw=850&q=85&strip=true",
  },
  {
    id: 6,
    link: "https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwd6b6a9e4/original/90_1008661-1A06213_1UF90_10_LaMedusaHoodie-Sweatshirts-Versace-online-store_0_7.jpg?sw=850&q=85&strip=true",
  },
];

const SimiliarProducts = () => {
  const [spacing, setSpacing] = React.useState(2);

  return (
    <>
      <Typography
        variant="subtitle2"
        style={{ fontWeight: "bold" }}
        align="center"
      >
        Similar Products
      </Typography>

      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            {[0, 1, 2, 4, 5, 6, 7, 8].map((value) => (
              <Grid key={value} item>
                <Card
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 450,
                    width: 250,
                    margin: 15,
                  }}
                >
                  <CardMedia
                    style={{ width: 180, height: 250, borderRadius: 10 }}
                    image={
                      "https://assets.ajio.com/medias/sys_master/root/20231121/3GQY/655ca2cbafa4cf41f59593cc/-473Wx593H-469569666-green-MODEL.jpg"
                    }
                    title={"title"}
                  />
                  <CardContent>
                    <Typography variant="h6" color="primary">
                      ${"50"}
                    </Typography>
                    <Typography variant="h6" component="div">
                      {"title"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Rating: {"5"}
                    </Typography>
                  </CardContent>

                  <CardActions
                    style={{
                      marginTop: "auto",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", gap: 12 }}>
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={console.log("B")}
                      >
                        ADD TO CART
                      </Button>
                      <IconButton
                        color="secondary"
                        aria-label="Add to Wishlist"
                        onClick={console.log("k")}
                      >
                        <FavoriteIcon />
                      </IconButton>
                    </div>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Typography
        variant="subtitle2"
        style={{ fontWeight: "bold" }}
        align="center"
      >
        RECENTLY VIEWED PRODUCTS
      </Typography>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            {[0, 1, 2, 4].map((value) => (
              <Grid key={value} item>
                <Card
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 450,
                    width: 250,
                    margin: 15,
                  }}
                >
                  <CardMedia
                    style={{ width: 180, height: 250, borderRadius: 10 }}
                    image={
                      "https://assets.ajio.com/medias/sys_master/root/20231121/3GQY/655ca2cbafa4cf41f59593cc/-473Wx593H-469569666-green-MODEL.jpg"
                    }
                    title={"title"}
                  />
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="subtitle1">${"1299"}</Typography>
                      <Typography
                        variant="subtitle1"
                        component="div"
                        style={{
                          textDecoration: "line-through",
                          paddingLeft: 3,
                          color: "gray",
                          marginLeft: 5,
                          marginRight: 5,
                        }}
                      >
                        {"2499"}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        style={{
                          paddingLeft: 3,
                          color: "gray",
                          marginLeft: 5,
                          marginRight: 5,
                        }}
                      >
                        20% OFF
                      </Typography>
                    </div>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{
                        color: "gray",
                        marginLeft: 5,
                        marginRight: 5,
                      }}
                    >
                      Checkered shirt
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    ></div>
                  </CardContent>

                  <CardActions
                    style={{
                      marginTop: "auto",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", gap: 12 }}>
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={console.log("B")}
                      >
                        ADD TO CART
                      </Button>
                      <IconButton
                        color="secondary"
                        aria-label="Add to Wishlist"
                        onClick={console.log("k")}
                      >
                        <FavoriteIcon />
                      </IconButton>
                    </div>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SimiliarProducts;
