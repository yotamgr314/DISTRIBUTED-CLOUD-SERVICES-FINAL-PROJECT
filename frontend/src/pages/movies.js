// 📁 src/pages/movies.js
import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
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

      {/* Hero Section */}
      <Box sx={{ position: "relative", width: "100%" }}>
        <Box
          component="img"
          src="/assets/houseOfNinjasCover.png"
          alt="Movie Cover"
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
        {/* Title + button */}
        <Box sx={{ position: "absolute", bottom: "20%", left: "5%" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "1.5rem", md: "3rem" },
            }}
          >
            The Movie Example
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

      {/* Content */}
      <Box sx={{ px: "58px", py: 4 }}>
        {movieSections.map((section, idx) => (
          <Box key={idx} sx={{ mb: 4 }}>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontWeight: "bold", fontSize: "1.2rem" }}
            >
              {section.title}
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
              {section.images.map((img, index) => (
                <Box key={index} sx={{ flex: "0 0 auto" }}>
                  <Box
                    component="img"
                    src={img}
                    alt={`${section.title} ${index}`}
                    sx={{
                      width: "218px",
                      height: "123px",
                      borderRadius: "8px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    onClick={handleOpenDetailsModal}
                  />
                </Box>
              ))}
            </Box>
          </Box>
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
