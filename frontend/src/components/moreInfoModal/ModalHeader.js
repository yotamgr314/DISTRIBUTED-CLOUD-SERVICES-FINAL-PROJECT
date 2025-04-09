// src/components/moreInfoModal/ModalHeader.js

import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Button, IconButton } from "@mui/material";

const ModalHeader = ({ details, onClose }) => {
  const {
    heroImage = "/assets/houseOfNinjasCover.png",
    title = "House of Ninjas",
    nSeriesLabel = true,
    newSeasons = "New 3 Seasons",
    year = "2024",
    hdAvailable = true,
    adAvailable = true,
    maturityRating = "TV-MA  smoking, violence",
    top10Rank = "#2 in TV Shows Today",
    summary = `Years after retiring from their formidable ninja lives, a dysfunctional family must 
      return to shadowy missions to counter a string of looming threats.`,
    cast = "Kento Kaku, Yosuke Eguchi, Tae Kimura, ...",
    genresList = "TV Dramas, Japanese, TV Thrillers",
    showIs = "Dark, Suspenseful, Exciting",
  } = details;

  return (
    <Box
      sx={{ position: "relative", width: "100%", height: { xs: 350, md: 450 } }}
    >
      {/* Hero Image */}
      <Box
        component="img"
        src={heroImage}
        alt={title}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "50%",
          background: "linear-gradient(to top, #141414, transparent)",
        }}
      />

      {/* Close Button */}
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          p: 0.5,
          zIndex: 10,
        }}
      >
        <Box
          component="img"
          src={`${process.env.PUBLIC_URL}/assets/xButtonIcon.svg`}
          alt="Close"
          sx={{ width: 24, height: 24 }}
        />
      </IconButton>

      {/* Content Overlay */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "10%", md: "15%" },
          left: { xs: "5%", md: "5%" },
          zIndex: 2,
          width: { xs: "90%", md: "70%" },
        }}
      >
        {nSeriesLabel && (
          <Typography
            variant="body2"
            sx={{
              color: "#E50914",
              mb: 1,
              fontWeight: "bold",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            N SERIES
          </Typography>
        )}

        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 1,
            fontSize: { xs: "1.8rem", md: "2.8rem" },
          }}
        >
          {title}
        </Typography>

        {/* Buttons Row */}
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgba(109,109,110,0.7)",
              color: "#fff",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Review
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgba(109,109,110,0.7)",
              color: "#fff",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            My List
          </Button>
        </Box>

        {/* Info Row */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 1,
            mb: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            {newSeasons}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            {year}
          </Typography>
          {hdAvailable && (
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/assets/hdIcon.svg`}
              alt="HD"
              sx={{ width: 24, height: 16 }}
            />
          )}
          {adAvailable && (
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/assets/adIcon.svg`}
              alt="AD"
              sx={{ width: 24, height: 16 }}
            />
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 1,
            mb: 2,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            {maturityRating}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/assets/top10Icon.svg`}
              alt="Top 10"
              sx={{ width: 24, height: 24 }}
            />
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {top10Rank}
            </Typography>
          </Box>
        </Box>

        {/* Two-column Layout */}
        <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          {/* Left Column: Summary */}
          <Box sx={{ flex: 2, minWidth: { xs: "100%", md: "55%" } }}>
            <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
              {summary}
            </Typography>
          </Box>
          {/* Right Column: Extra Details */}
          <Box sx={{ flex: 1, minWidth: { xs: "100%", md: "40%" } }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Cast:</strong> {cast}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Genres:</strong> {genresList}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>This show is:</strong> {showIs}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

ModalHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
  details: PropTypes.shape({
    heroImage: PropTypes.string,
    title: PropTypes.string,
    nSeriesLabel: PropTypes.bool,
    newSeasons: PropTypes.string,
    year: PropTypes.string,
    hdAvailable: PropTypes.bool,
    adAvailable: PropTypes.bool,
    maturityRating: PropTypes.string,
    top10Rank: PropTypes.string,
    summary: PropTypes.string,
    cast: PropTypes.string,
    genresList: PropTypes.string,
    showIs: PropTypes.string,
  }),
};

export default ModalHeader;
