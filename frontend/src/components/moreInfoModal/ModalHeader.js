import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Button, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router-dom";

const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const ModalHeader = ({ details = {}, onClose }) => {
  const navigate = useNavigate();
  const {
    backdropPath,
    posterPath,
    title = "",
    type = "",
  } = details;

  // pick backdrop if available, else poster, else a default
  const heroImage = backdropPath
    ? `${BACKDROP_BASE_URL}${backdropPath}`
    : posterPath
    ? `${IMAGE_BASE_URL}${posterPath}`
    : `${process.env.PUBLIC_URL}/assets/houseOfNinjasCover.png`;

  // show "N SERIES" badge for TV
  const nSeriesLabel = type === "tv";

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 350, md: 450 },
      }}
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

      {/* Title + Controls */}
      <Box
        sx={{
          position: "absolute",
          bottom: 32,
          left: "5%",
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          width: { xs: "90%", md: "auto" },
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
            onClick={() => navigate("/reviewProgram")}
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
      </Box>
    </Box>
  );
};

ModalHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
  details: PropTypes.shape({
    backdropPath: PropTypes.string,
    posterPath: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
  }),
};

export default ModalHeader;
