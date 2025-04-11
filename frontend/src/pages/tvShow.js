import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import FooterAccountHomePage from "../components/shared/footerAccountHomePage";
import Navbar from "../components/shared/navbar";
import ProgramDetailsModal from "../components/moreInfoModal/ProgramDetailsModal";

// Demo content
const tvSections = [
  {
    title: "TV shows we think you'll love",
    images: new Array(10).fill("/assets/newOnNetFlix.svg"),
  },
  {
    title: "New TV shows on Netflix",
    images: new Array(9).fill("/assets/newOnNetFlix.svg"),
  },
  {
    title: "Top 10 TV shows in the U.S. today",
    images: new Array(9).fill("/assets/newOnNetFlix.svg"),
  },
  {
    title: "Recently rated TV shows",
    images: new Array(9).fill("/assets/newOnNetFlix.svg"),
  },
  {
    title: "Most popular TV shows",
    images: new Array(9).fill("/assets/newOnNetFlix.svg"),
  },
  {
    title: "Animation TV shows",
    images: new Array(9).fill("/assets/newOnNetFlix.svg"),
  },
  {
    title: "Action TV shows",
    images: new Array(9).fill("/assets/newOnNetFlix.svg"),
  },
  {
    title: "My TV shows list",
    images: new Array(9).fill("/assets/newOnNetFlix.svg"),
  },
];

const SectionRow = ({
  title,
  images,
  imageWidth = 218,
  imageHeight = 123,
  borderRadius = 2,
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
              }}
              onClick={onImageClick}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const TvShowsPage = () => {
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);

  const handleOpenDetailsModal = () => {
    setDetailsModalOpen(true);
  };
  const handleCloseDetailsModal = () => {
    setDetailsModalOpen(false);
  };

  const sampleDetails = {
    title: "Example TV Show",
    description:
      "This is an example TV show with mock data. In the real version we'll load show info from API.",
    isSeries: true,
    episodes: [],
    trailers: [],
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
      <Navbar />

      {/* Main Content */}
      <Box sx={{ px: "58px", pt: 12, pb: 4 }}>
        {tvSections.map((section, idx) => (
          <SectionRow
            key={idx}
            title={section.title}
            images={section.images}
            onImageClick={handleOpenDetailsModal}
          />
        ))}
      </Box>

      <FooterAccountHomePage />

      <ProgramDetailsModal
        open={detailsModalOpen}
        onClose={handleCloseDetailsModal}
        details={sampleDetails}
      />
    </Box>
  );
};

export default TvShowsPage;
