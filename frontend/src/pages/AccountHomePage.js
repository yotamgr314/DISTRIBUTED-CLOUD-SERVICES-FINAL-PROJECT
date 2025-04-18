// src/pages/AccountHomePage.js
import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import FooterAccountHomePage from "../components/shared/footerAccountHomePage";
import Navbar from "../components/shared/navbar";
import ProgramDetailsModal from "../components/moreInfoModal/ProgramDetailsModal";

// Example image arrays
const newOnNetflixImages = new Array(9).fill("/assets/newOnNetFlix.svg");
const top10Images = new Array(10).fill("/assets/newOnNetFlix.svg");
const weThinkYoullLoveImages = new Array(9).fill("/assets/newOnNetFlix.svg");
const continueForYotamImages = new Array(6).fill("/assets/newOnNetFlix.svg");
const weekInOneWeekendImages = new Array(6).fill("/assets/newOnNetFlix.svg");
const criticallyAcclaimedImages = new Array(6).fill("/assets/newOnNetFlix.svg");
const inspiringMoviesImages = new Array(6).fill("/assets/newOnNetFlix.svg");
const adultAnimationImages = new Array(6).fill("/assets/newOnNetFlix.svg");

/**
 * SectionRow: Generic component to display images in a horizontal scroll.
 */
const SectionRow = ({
  title,
  images,
  imageWidth = 218,
  imageHeight = 123,
  borderRadius = 2,
  showProgressBar = false,
  onImageClick,
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
              onClick={onImageClick}
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
  // State to control opening of the modal with program details
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);

  const handleOpenDetailsModal = () => {
    setDetailsModalOpen(true);
  };
  const handleCloseDetailsModal = () => {
    setDetailsModalOpen(false);
  };

  // Sample details with a non-empty trailers array so that the Trailers & More section renders.
  const sampleDetails = {
    title: "House of Ninjas",
    description:
      "תיאור התכנית: כאן יופיע תיאור מפורט של התכנית, הסיפור, הסגנון ועוד. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isSeries: true,
    episodes: [
      { title: "פרק 1", description: "תיאור קצר של פרק 1", runtime: "55m" },
      { title: "פרק 2", description: "תיאור קצר של פרק 2", runtime: "53m" },
      { title: "פרק 3", description: "תיאור קצר של פרק 3", runtime: "55m" },
    ],
    additionalImages: [
      "/assets/example1.jpg",
      "/assets/example2.jpg",
      "/assets/example3.jpg",
    ],
    crew: "במאי: דוגמה, מפיק: דוגמה, ועוד...",
    // Added trailers array so TrailersSection will render
    trailers: [
      {
        image: "/assets/newOnNetFlix.svg",
        caption: "Season 1 Trailer 1: House of Ninjas",
      },
      {
        image: "/assets/newOnNetFlix.svg",
        caption: "Season 1 Trailer 2: House of Ninjas",
      },
      {
        image: "/assets/newOnNetFlix.svg",
        caption: "Season 1 Trailer 3: House of Ninjas",
      },
    ],
  };

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
        {/* Navbar as a reusable component */}
        <Navbar />
        {/* HERO IMAGE */}
        <Box
          component="img"
          src="/assets/houseOfNinjasCover.png"
          alt="House of Ninjas"
          sx={{
            display: "block",
            width: "100%",
            height: "auto",
            cursor: "pointer",
          }}
          onClick={handleOpenDetailsModal}
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
        <Box sx={{ position: "absolute", bottom: "20%", left: "5%" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "1.5rem", md: "3rem" },
            }}
          >
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
              onClick={handleOpenDetailsModal}
            >
              More Info
            </Button>
          </Box>
        </Box>
      </Box>

      {/* MAIN CONTENT */}
      <Box sx={{ px: "58px", py: 4 }}>
        <SectionRow
          title="We think You'll Love These"
          images={newOnNetflixImages}
          imageWidth={218}
          imageHeight={123}
          borderRadius={2}
          onImageClick={handleOpenDetailsModal}
        />
        <SectionRow
          title="New on Netflix"
          images={top10Images}
          imageWidth={215}
          imageHeight={154}
          borderRadius={0}
          onImageClick={handleOpenDetailsModal}
        />
        <SectionRow
          title="Top 10 in the U.S. today"
          images={weThinkYoullLoveImages}
          onImageClick={handleOpenDetailsModal}
        />
        <SectionRow
          title="Recently rated"
          images={continueForYotamImages}
          showProgressBar
          onImageClick={handleOpenDetailsModal}
        />
        <SectionRow
          title="Most popular"
          images={weekInOneWeekendImages}
          onImageClick={handleOpenDetailsModal}
        />
        <SectionRow
          title="Animation"
          images={criticallyAcclaimedImages}
          onImageClick={handleOpenDetailsModal}
        />
        <SectionRow
          title="Action"
          images={inspiringMoviesImages}
          onImageClick={handleOpenDetailsModal}
        />
        <SectionRow
          title="My list"
          images={adultAnimationImages}
          onImageClick={handleOpenDetailsModal}
        />
      </Box>

      {/* FOOTER */}
      <FooterAccountHomePage />

      {/* Program Details Modal */}
      <ProgramDetailsModal
        open={detailsModalOpen}
        onClose={handleCloseDetailsModal}
        details={sampleDetails}
      />
    </Box>
  );
};

export default AccountHomePage;
