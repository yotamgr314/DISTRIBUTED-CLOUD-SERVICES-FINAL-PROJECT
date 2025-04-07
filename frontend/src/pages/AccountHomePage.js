// src/pages/AccountHomePage.js

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import FooterAccountHomePage from "../components/shared/footerAccountHomePage";

// מערכי תמונות לדוגמה
const newOnNetflixImages = new Array(9).fill("/assets/newOnNetFlix.svg");
const top10Images = new Array(10).fill("/assets/newOnNetFlix.svg");
const weThinkYoullLoveImages = new Array(9).fill("/assets/newOnNetFlix.svg");
const continueForYotamImages = new Array(6).fill("/assets/newOnNetFlix.svg");
const weekInOneWeekendImages = new Array(6).fill("/assets/newOnNetFlix.svg");
const criticallyAcclaimedImages = new Array(6).fill("/assets/newOnNetFlix.svg");
const inspiringMoviesImages = new Array(6).fill("/assets/newOnNetFlix.svg");
const adultAnimationImages = new Array(6).fill("/assets/newOnNetFlix.svg");
const freshPicksImages = new Array(6).fill("/assets/newOnNetFlix.svg");

/**
 * SectionRow: רכיב שורה גנרי להצגת תמונות בגלילה אופקית
 */
const SectionRow = ({
  title,
  images,
  imageWidth = 218,
  imageHeight = 123,
  borderRadius = 2,
  showProgressBar = false,
}) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: "20px",
          scrollBehavior: "smooth",
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {images.map((img, idx) => (
          <Box key={idx} sx={{ flex: "0 0 auto" }}>
            <Box
              component="img"
              src={img}
              alt={`${title} ${idx}`}
              sx={{
                width: `${imageWidth}px`,
                height: `${imageHeight}px`,
                borderRadius: `${borderRadius}px`,
                objectFit: "cover",
                cursor: "pointer",
                display: "block",
                mb: showProgressBar ? 1 : 0,
              }}
            />
            {showProgressBar && (
              <Box
                sx={{
                  width: "132px",
                  height: "3px",
                  backgroundColor: "#E50914",
                }}
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const AccountHomePage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* HERO / COVER SECTION */}
      <Box sx={{ position: "relative", width: "100%" }}>
        {/* Navbar moved inside the hero section as an absolute element */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "68px",
            display: "flex",
            alignItems: "center",
            px: "58px",
            gap: "20px",
            backgroundColor: "transparent",
            zIndex: 999,
          }}
        >
          <Typography
            sx={{
              color: "#E50914",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            NETFLIX
          </Typography>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Typography>Home</Typography>
            <Typography>TV Shows</Typography>
            <Typography>Movies</Typography>
            <Typography>New &amp; Popular</Typography>
            <Typography>My List</Typography>
            <Typography>Browse</Typography>
          </Box>
        </Box>

        {/* HERO IMAGE */}
        <Box
          component="img"
          src="/assets/houseOfNinjasCover.png"
          alt="House of Ninjas"
          sx={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "50%",
            background: "linear-gradient(to top, #000, transparent)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "20%",
            left: "5%",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            HOUSE OF NINJAS
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgba(109,109,110,0.7)",
                color: "#fff",
                fontWeight: "bold",
              }}
              startIcon={<InfoIcon />}
            >
              More Info
            </Button>
          </Box>
        </Box>
      </Box>

      {/* MAIN CONTENT */}
      <Box sx={{ px: "58px", py: 4 }}>
        <SectionRow
          title="New on Netflix"
          images={newOnNetflixImages}
          imageWidth={218}
          imageHeight={123}
          borderRadius={2}
        />
        <SectionRow
          title="Top 10 in the U.S. Today"
          images={top10Images}
          imageWidth={215}
          imageHeight={154}
          borderRadius={0}
        />
        <SectionRow
          title="We Think You'll Love These"
          images={weThinkYoullLoveImages}
        />
        <SectionRow
          title="Continue Watching for Yotam"
          images={continueForYotamImages}
          showProgressBar
        />
        <SectionRow
          title="Week In One Weekend"
          images={weekInOneWeekendImages}
        />
        <SectionRow
          title="Critically Acclaimed Movies"
          images={criticallyAcclaimedImages}
        />
        <SectionRow
          title="Inspiring Movies"
          images={inspiringMoviesImages}
        />
        <SectionRow
          title="Adult Animation"
          images={adultAnimationImages}
        />
        <SectionRow
          title="Todays Fresh Picks for You"
          images={freshPicksImages}
        />
      </Box>

      {/* FOOTER */}
      <FooterAccountHomePage />
    </Box>
  );
};

export default AccountHomePage;
