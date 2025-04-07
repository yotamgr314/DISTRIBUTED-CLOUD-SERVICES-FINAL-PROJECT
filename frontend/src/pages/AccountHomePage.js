// src/pages/AccountHomePage.js

import React from "react";
import { Box, Typography } from "@mui/material";

// Example image arrays (replace these with your actual image paths)
const newOnNetflixImages = [
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
];
const top10Images = [
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
];
const weThinkYoullLoveImages = [
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
  "/assets/newOnNetFlix.svg",
];

// Reusable row component
const SectionRow = ({
  title,
  images,
  // By default, images are 218×123, with a 2px borderRadius
  imageWidth = 218,
  imageHeight = 123,
  borderRadius = 2,
}) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h6"
        sx={{ mb: 2, fontWeight: "bold", fontSize: "1.2rem" }}
      >
        {title}
      </Typography>
      {/* 
        A grid layout so images wrap instead of scrolling horizontally.
        "repeat(auto-fill, minmax(218px, 1fr))" ensures each item is at least 218px wide,
        but can expand if there's extra space. 
      */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(218px, auto))",
          gap: "20px",
        }}
      >
        {images.map((img, idx) => (
          <Box
            key={idx}
            component="img"
            src={img}
            alt={`${title} ${idx}`}
            sx={{
              width: `${imageWidth}px`,
              height: `${imageHeight}px`,
              borderRadius: `${borderRadius}px`,
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
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
        // Hide any accidental horizontal scroll
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* TOP NAVBAR */}
      <Box
        sx={{
          // Let it stretch full width and attach to the left
          width: "100%",
          height: "68px",
          display: "flex",
          alignItems: "center",
          px: "58px", // left/right padding if needed
          // remove margin between Netflix brand & first nav item
          // so they are "attached"
          gap: "20px",
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
        <Box sx={{ display: "flex", gap: "20px", ml: "20px" }}>
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
          src="/assets/house-of-ninjas-cover.jpg"
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
        {/* Example rows */}
        <SectionRow title="New on Netflix" images={newOnNetflixImages} />
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
        {/* Repeat more rows as needed */}
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
