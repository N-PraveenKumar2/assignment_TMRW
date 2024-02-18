import React from "react";
import { Divider, Typography } from "@mui/material";
import { Rating } from "primereact/rating";
import { LinearProgress } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const OverallRating = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h1" align="center">
            4.0
          </Typography>
          <p>84 Reviews</p>
          <div className="card flex justify-content-center">
            <Rating value={4} cancel={false} style={{ color: "yellowgreen" }} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {[1, 2, 3, 4, 5].map((i, j) => (
            <div
              style={{
                padding: 5,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography variant="caption" align="center">
                1
              </Typography>
              <LinearProgress
                variant="determinate" // "determinate" or "indeterminate"
                value={j} // Set the progress value (0 to 100) for determinate variant
                color="secondary" // "primary", "secondary", or a custom color
                style={{ width: 100 }}
              />
            </div>
          ))}
        </div>
      </div>
      <Divider style={{ margin: 5 }} />
    </>
  );
};

export default OverallRating;
