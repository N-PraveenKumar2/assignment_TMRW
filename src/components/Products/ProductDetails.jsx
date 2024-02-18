import React from "react";
import { Grid, Paper } from "@mui/material";
import { Typography } from "@mui/material";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Offers } from "./Offers";
import ProductInfo from "./ProductInfo";
import CustomerReviews from "./CustomerReviews";

const imagePaths = [
  "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/15672228/2021/12/8/d978cc85-8d45-4951-9e86-2f075c1e5ff41638960565332-Van-Heusen-Men-Grey-Melange-Solid-Pure-Cotton-Lounge-T-Shirt-1.jpg",
];

const ProductDetails = () => {
  const container = {
    padding: 10,
  };

  const divp2 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  };
  const div2pI = {
    width: "100%",
    height: "100%",
  };

  return (
    <>
      <Grid container spacing={2} style={container}>
        <Grid item xs={12} md={6}>
          <Paper>
            {imagePaths.map((path, index) => (
              <Grid xs={12} md={8} key={index}>
                <img src={path} alt={`Image ${index + 1}`} style={div2pI} />
              </Grid>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <CurrencyRupeeRoundedIcon
                  style={{ paddingTop: 5, fontSize: "20px" }}
                />
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  1299
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    textDecoration: "line-through",
                    paddingLeft: 3,
                    color: "gray",
                  }}
                >
                  2499
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ color: "red", paddingLeft: 5 }}
                >
                  50% OFF
                </Typography>
              </div>
              <FavoriteRoundedIcon style={{ color: "brown" }} />
            </div>
            <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
              Flower printed oversized Fit
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <StarRateRoundedIcon
                style={{ fontSize: 20, color: "yellowgreen" }}
              />
              <Typography variant="body2">|</Typography>
              <Typography variant="body1" style={{ marginLeft: 2 }}>
                {" "}
                2K
              </Typography>
            </div>
            <Offers />
            <ProductInfo />
            <CustomerReviews />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetails;
