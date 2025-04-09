// src/pages/AccountHomePage.js

import React from "react";
import { Box, Typography } from "@mui/material";

const newOnNetflixImages = [
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
];

// 2) "Top 10 in the U.S. Today" (215×154, no border radius)
const top10Images = [
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
];

// 3) "We Think You'll Love These"
const weThinkYoullLoveImages = [
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
];

// 4) "Continue Watching for Yotam" (progress bar shown)
const continueForYotamImages = [
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
];

// 5) "Week In One Weekend"
const weekInOneWeekendImages = [
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
];

// 6) "Critically Acclaimed Movies"
const criticallyAcclaimedImages = [
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
];

// 7) "Inspiring Movies"
const inspiringMoviesImages = [
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
];

// 8) "Adult Animation"
const adultAnimationImages = [
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
];

// 9) "Todays Fresh Picks for You"
const freshPicksImages = [
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
];

/**
 * SectionRow: Reusable row component that uses a responsive grid layout.
 * @param {string} title - The row title
 * @param {string[]} images - An array of image paths
 * @param {number} imageWidth - default 218
 * @param {number} imageHeight - default 123
 * @param {number} borderRadius - default 2
 * @param {boolean} showProgressBar - if true, show a small 132×3 bar under each image
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
          // A responsive grid so there's no horizontal scroll
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(218px, 1fr))",
          gap: "20px",
        }}
      >
        {images.map((img, idx) => (
          <Box key={idx}>
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
              // A small progress bar 132×3
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
        overflowX: "hidden", // Hide any accidental horizontal scroll
      }}
    >
      {/* TOP NAVBAR */}
      <Box
        sx={{
          width: "100%",
          height: "68px",
          display: "flex",
          alignItems: "center",
          px: "58px",
          gap: "20px", // gap between brand and nav items
        }}
      >
        {/* Netflix Brand */}
        <Typography
          sx={{
            color: "#E50914",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          NETFLIX
        </Typography>

        {/* Nav Items */}
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Typography>Home</Typography>
          <Typography>TV Shows</Typography>
          <Typography>Movies</Typography>
          <Typography>New &amp; Popular</Typography>
          <Typography>My List</Typography>
          <Typography>Browse</Typography>
        </Box>
      </Box>

      {/* HERO / COVER SECTION */}
      <Box sx={{ position: "relative", width: "100%", mt: 2 }}>
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

        <SectionRow title="Inspiring Movies" images={inspiringMoviesImages} />

        <SectionRow title="Adult Animation" images={adultAnimationImages} />

        <SectionRow
          title="Todays Fresh Picks for You"
          images={freshPicksImages}
        />
      </Box>

      {/* FOOTER (Optional) */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#141414",
          py: 4,
          px: "58px",
          mt: 2,
        }}
      >
        <Typography variant="body2" sx={{ color: "#999" }}>
          Footer content here...
        </Typography>
      </Box>
    </Box>
  );
};

export default AccountHomePage;
