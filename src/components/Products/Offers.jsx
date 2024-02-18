import React from "react";
import { Typography, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PercentIcon from "@mui/icons-material/Percent";
import { TextField, InputAdornment, Button } from "@mui/material";
import { ProgressBar } from "primereact/progressbar";
const sizes = [30, 32, 34, 36, 38, 40, 42];
const imageUrls = [
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
];
export const Offers = () => {
  const customColorStyle = {
    backgroundColor: "green",
    color: "white",
    fontSize: "12px",
    paddingLeft: "200px",
    paddingRight: "200px",
    textWrap: "nowrap",
    width: "100%",
  };
  return (
    <>
      <Typography
        variant="subtitle2"
        style={{ fontWeight: "bold", paddingTop: 10 }}
      >
        OFFERS
      </Typography>
      <div style={{ margin: 10 }}>
        <Card
          style={{
            display: "flex",
            flexDirection: "row",
            height: 50,
            width: 300,
            //borderWidth: 20,
            padding: 5,
            borderColor: "#0000FF",
            borderRadius: 20,
            border: "1px solid #00FFFF",
            boxShadow: "-9px 25px 18px #00FFFF,9px -9px 18px #ffffff;",
          }}
        >
          <CardContent
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <PercentIcon style={{ paddingTop: 5 }} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 25,
                }}
              >
                <Typography variant="body2" color="#00FFFF">
                  Buy 2 Tees at just Rs.999
                </Typography>
                <Typography variant="caption" color="gray">
                  Buy 2 Tees at just Rs.999
                </Typography>
              </div>
              <div
                style={{
                  marginLeft: 25,
                  display: "flex",
                }}
              >
                <Typography
                  variant="body1"
                  color="#00FFFF"
                  style={{ paddingTop: 5 }}
                >
                  1/3
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Typography
        variant="subtitle2"
        style={{ fontWeight: "bold", paddingTop: 10 }}
      >
        COLOR-BEIGE
      </Typography>

      <div>
        {imageUrls.map((i, k) => {
          return (
            <img src={i.link} style={{ width: 70, height: 90, padding: 5 }} />
          );
        })}
      </div>
      <Typography variant="subtitle2" style={{ fontWeight: "bold" }}>
        SELECT SIZE
      </Typography>
      <div style={{ display: "flex", flexDirection: "row", padding: 5 }}>
        {sizes.map((i, j) => (
          <div style={{ padding: 10 }}>
            <Card
              style={{
                display: "flex",
                height: 20,
                width: 30,
                borderWidth: 20,
                padding: 5,
                borderColor: "gray",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardContent
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {i}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <Button
        variant="contained"
        style={customColorStyle}
        onClick={console.log("handle click")}
        size="large"
      >
        ADD TO CART
      </Button>
      <Typography
        variant="subtitle2"
        style={{ fontWeight: "bold", paddingTop: 10 }}
      >
        CHECK FOR DELIVERY DETAILS
      </Typography>
      <div style={{ marginTop: 10 }}>
        <TextField
          label="Enter pincode"
          variant="outlined"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={console.log("handle click")}
                >
                  CHECK
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </div>
    </>
  );
};
