import React from "react";
import { Typography, Divider } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import AddIcon from "@mui/icons-material/Add";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SyncIcon from "@mui/icons-material/Sync";

const linkInfo = [
  {
    icon: <DescriptionIcon />,
    desc: "Product Description",
    subDesc: "Manufactire, Care and Fit",
  },
  {
    icon: <LocalShippingIcon />,
    desc: "Free Shipping",
    subDesc: "We offer free shipping across India",
  },
  {
    icon: <SyncIcon />,
    desc: "14 Days Returns & Exchange",
    subDesc: "Know about return & exchange policy",
  },
];
const ProductInfo = () => {
  return (
    <>
      <div>
        <Typography
          variant="subtitle2"
          style={{ fontWeight: "bold", paddingTop: 10 }}
          align="start"
        >
          PRODUCT INFORMATION
        </Typography>
      </div>

      {linkInfo.map((i, j) => (
        <>
          <div
            style={{
              //width: 320,
              padding: 12,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 8,
              marginBottom: 5,
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
              }}
            >
              {i.icon}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textWrap: "nowrap",
                flexDirection: "column",
                marginLeft: 0,
              }}
            >
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                {i.desc}
              </Typography>

              <Typography variant="caption">{i.subDesc}</Typography>
            </div>
            <div class="info__close">
              <AddIcon />
            </div>
          </div>
          <Divider style={{ backgroundColor: "black" }} />
        </>
      ))}
    </>
  );
};

export default ProductInfo;
