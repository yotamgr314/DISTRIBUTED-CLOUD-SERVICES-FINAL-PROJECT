// 📁 src/components/shared/ModalHeader.js

import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Button, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const ModalHeader = ({ details, onClose }) => {
  const {
    heroImage = "/assets/houseOfNinjasCover.png",
    title = "House of Ninjas",
    nSeriesLabel = true,
  } = details;

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

      {/* Overlay Content */}
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
    heroImage: PropTypes.string,
    title: PropTypes.string,
    nSeriesLabel: PropTypes.bool,
  }),
};

export default ModalHeader;
