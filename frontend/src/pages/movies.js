import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import FooterAccountHomePage from "../components/shared/footerAccountHomePage";
import Navbar from "../components/shared/navbar";
import ProgramDetailsModal from "../components/moreInfoModal/ProgramDetailsModal";

// Demo content
const movieSections = [
  {
    title: "Top Movies Today",
    images: new Array(10).fill("/assets/newOnNetFlix.svg"),
  },
  {
    title: "New Releases",
    images: new Array(9).fill("/assets/newOnNetFlix.svg"),
  },
  {
    title: "Critically Acclaimed",
    images: new Array(9).fill("/assets/newOnNetFlix.svg"),
  },
  {
    title: "Action & Adventure",
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

const MoviesPage = () => {
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);

  const handleOpenDetailsModal = () => {
    setDetailsModalOpen(true);
  };
  const handleCloseDetailsModal = () => {
    setDetailsModalOpen(false);
  };

  const sampleDetails = {
    title: "The Movie Example",
    description:
      "Here you would show detailed info about the movie. This is mock content.",
    isSeries: false,
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
        {movieSections.map((section, idx) => (
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

export default MoviesPage;
