import React from "react";

import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  InputAdornment,
  Link,
  Paper,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const categoies = [
  "NEW ARRIVALS",
  "BEST SELLERS",
  "WINTER-WEAR",
  "T-SHIRTS",
  "SHORTS",
];
const company = ["ABOUT US", "BLOG", "PRIVACY POLICY", "TERMS", "JOIN US"];
const forus = ["CONTACT US", "FAQ'S", "TRACK", "RETURN", "SHIPPING"];

const Footer = () => {
  const Item = styled(Paper)(({ theme }) => ({
    padding: 5,
    textAlign: "center",
    backgroundColor: "#00AA68",
  }));
  return (
    <footer style={{ backgroundColor: "#00AA68" }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h3" gutterBottom style={{ color: "white" }}>
                JOIN OUR VEIRDO FAM
              </Typography>

              <Typography
                variant="subtitle2"
                gutterBottom
                style={{ color: "white" }}
              >
                Here is the space for marketing bro's to use some combination of
                alphabets to convince people to give their email
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="abc@gmail.com"
              variant="outlined"
              fullWidth
              style={{ backgroundColor: "white" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={console.log("handle click")}
                    >
                      SUBSCRIBE
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Container>
      {/* Socail Media */}

      <Grid
        container
        spacing={2}
        style={{ marginTop: 10, marginBottom: 10, backgroundColor: "#00AA68" }}
      >
        <Grid item xs={6} md={3} style={{ border: "1px solid black" }}>
          <Typography
            variant="subtitle2"
            style={{ fontWeight: "bold", paddingBottom: 10 }}
            align="center"
          >
            INSTAGRAM
          </Typography>
        </Grid>
        <Grid item xs={6} md={3} style={{ border: "1px solid black" }}>
          <Typography
            variant="subtitle2"
            style={{ fontWeight: "bold", paddingBottom: 10 }}
            align="center"
          >
            LINKEDIN
          </Typography>
        </Grid>
        <Grid item xs={6} md={3} style={{ border: "1px solid black" }}>
          <Typography
            variant="subtitle2"
            style={{ fontWeight: "bold", paddingBottom: 10 }}
            align="center"
          >
            WHATSAPP
          </Typography>
        </Grid>
        <Grid item xs={6} md={3} style={{ border: "1px solid black" }}>
          <Typography
            variant="subtitle2"
            style={{ fontWeight: "bold", paddingBottom: 10 }}
            align="center"
          >
            TWITTER
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        style={{ marginTop: 10, marginBottom: 10, backgroundColor: "#00AA68" }}
      >
        <Grid item xs={12} md={3}>
          <Typography
            variant="subtitle2"
            style={{ fontWeight: "bold" }}
            align="center"
          >
            CATEGORIES
          </Typography>

          {categoies.map((i, j) => {
            return <ul>{i}</ul>;
          })}
        </Grid>
        <Grid item xs={12} md={3}>
          {categoies.map((i, j) => {
            return <ul>{i}</ul>;
          })}
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography
            variant="subtitle2"
            style={{ fontWeight: "bold" }}
            align="center"
          >
            COMPANY
          </Typography>
          {company.map((i, j) => {
            return <ul>{i}</ul>;
          })}
        </Grid>
        <Grid item xs={12} md={3} style={{ alignContent: "center" }}>
          <Typography
            variant="subtitle2"
            style={{ fontWeight: "bold" }}
            align="center"
          >
            FOR CUSTOMERS
          </Typography>
          {forus.map((i, j) => {
            return <ul>{i}</ul>;
          })}
        </Grid>
      </Grid>
      <Divider style={{ backgroundColor: "black" }} />
      <Typography variant="body2" style={{ padding: 10 }}>
        &copy; 2024 Your Company. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
