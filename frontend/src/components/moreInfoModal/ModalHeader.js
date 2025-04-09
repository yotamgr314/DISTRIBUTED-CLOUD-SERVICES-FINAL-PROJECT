import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Button, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

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
    summary = `Years after retiring from their formidable ninja lives, a dysfunctional family must return to shadowy missions to counter a string of looming threats.`,
    cast = "Kento Kaku, Yosuke Eguchi, Tae Kimura, more",
    genresList = "TV Dramas, Japanese, TV Thrillers",
    showIs = "Dark, Suspenseful, Exciting",
  } = details;

  return (
    <Box
      sx={{ position: "relative", width: "100%", height: { xs: 400, md: 500 } }}
    >
      {/* Background image */}
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

      {/* Gradient */}
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
        sx={{ position: "absolute", top: 16, right: 16, zIndex: 10 }}
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
          bottom: 40,
          left: "5%",
          right: "5%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 4,
          zIndex: 5,
        }}
      >
        {/* LEFT COLUMN */}
        <Box
          sx={{
            maxWidth: 500,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          {nSeriesLabel && (
            <Typography
              sx={{
                color: "#E50914",
                fontWeight: "bold",
                letterSpacing: 2,
                fontSize: 12,
                textTransform: "uppercase",
              }}
            >
              N SERIES
            </Typography>
          )}

          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              color: "#fff",
              textTransform: "uppercase",
            }}
          >
            {title}
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
            <Button
              variant="contained"
              startIcon={<PlayArrowIcon />}
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                backgroundColor: "#fff",
                color: "#000",
                "&:hover": { backgroundColor: "#e6e6e6" },
              }}
            >
              Review
            </Button>
            <IconButton
              sx={{
                border: "1px solid #fff",
                color: "#fff",
                width: 36,
                height: 36,
              }}
            >
              <Typography variant="h5" sx={{ lineHeight: 1 }}>
                +
              </Typography>
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              color: "#bcbcbc",
              fontSize: 14,
              mt: 1,
            }}
          >
            <Typography sx={{ color: "#46D369", fontWeight: 400 }}>
              New
            </Typography>
            <Typography>{newSeasons}</Typography>
            <Typography>{year}</Typography>
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

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Typography
              sx={{
                fontSize: 13,
                backgroundColor: "#141414",
                border: "1px solid #bcbcbc",
                color: "#bcbcbc",
                px: "6px",
                py: "2px",
              }}
            >
              TV-MA
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#fff" }}>
              smoking, violence
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                backgroundColor: "#F50723",
                borderRadius: "4px",
                px: 1,
              }}
            >
              <Typography
                sx={{ fontSize: 12, color: "#fff", fontWeight: "bold" }}
              >
                TOP 10
              </Typography>
            </Box>
            <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#fff" }}>
              {top10Rank}
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: 16,
              lineHeight: "26px",
              color: "#fff",
              maxWidth: 480,
            }}
          >
            {summary}
          </Typography>
        </Box>

        {/* RIGHT COLUMN */}
        <Box
          sx={{
            width: 240,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            gap: "14px",
            fontSize: 14,
            lineHeight: "20px",
            color: "#A3A3A3",
          }}
        >
          <Typography>
            <strong style={{ color: "#fff" }}>Cast:</strong> {cast}
          </Typography>
          <Typography>
            <strong style={{ color: "#fff" }}>Genres:</strong> {genresList}
          </Typography>
          <Typography>
            <strong style={{ color: "#fff" }}>This show is:</strong> {showIs}
          </Typography>
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
