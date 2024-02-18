import React from "react";
import { Typography } from "@mui/material";
import { Rating } from "primereact/rating";
import OverallRating from "./OverallRating";
import Reviews from "./Reviews";

const CustomerReviews = () => {
  return (
    <>
      <Typography
        variant="subtitle2"
        style={{ fontWeight: "bold", paddingTop: 10 }}
        align="start"
      >
        CUSTOMER REVIEWS AND RATINGS
      </Typography>
      <OverallRating />
      <Reviews />
    </>
  );
};

export default CustomerReviews;
