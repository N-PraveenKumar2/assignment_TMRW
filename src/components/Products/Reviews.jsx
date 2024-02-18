import React from "react";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import StarIcon from "@mui/icons-material/Star";
import { Typography } from "@mui/material";

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

const Reviews = () => {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <Typography variant="caption">Shravya</Typography>
            <VerifiedUserIcon style={{ fontSize: 15 }} />
            <Typography variant="caption">Verified Buyer</Typography>
          </div>
          <div>
            <Typography variant="caption">7 Months ago</Typography>
          </div>
        </div>
        <StarIcon style={{ fontSize: 15 }} />
        <Typography variant="caption">4</Typography>
        <Typography variant="caption">Powder Blue, Size L</Typography>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>Super product, Good Quality, comfort</p>
          <div>
            {imageUrls.map((i, k) => {
              return (
                <img
                  src={i.link}
                  style={{ width: 70, height: 90, padding: 5 }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
