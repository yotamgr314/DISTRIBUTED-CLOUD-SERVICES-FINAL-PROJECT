// src/components/moreInfoModal/ProgramDetailsModal.js
import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Dialog, DialogContent, Slide } from "@mui/material";

import AboutSection from "./AboutSection";
import TrailersSection from "./programImagesSection";
import ModalHeader from "./ModalHeader";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const ProgramDetailsModal = ({ open, onClose, details }) => {
  const d = details || {};

  // שדות דינמיים מה־API
  const {
    title = "Unknown Title",
    description,
    releaseDate,
    cast: castArr = [],
    genres: genresArr = [],
    crew: crewArr = [],
    trailers = [],
  } = d;

  // סטטיים שנשמרו
  const hdAvailable = true;
  const adAvailable = true;

  const summary = description || "No description available.";
  const cast = castArr.join(", ") || "No cast information.";
  const genresList = genresArr.join(", ") || "No genres available.";
  const director = crewArr.length > 0 ? crewArr[0] : "Unknown Director";
  const year = releaseDate ? new Date(releaseDate).getFullYear() : "";

  // ברירת מחדל ל־disclaimers
  const aboutMaturityRating = "TV-MA For Mature Audiences";
  const disclaimers = "smoking, violence For Mature Audiences";

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      fullWidth
      maxWidth="md"
      scroll="body"
      sx={{
        "& .MuiDialog-container": {
          alignItems: "flex-start",
        },
      }}
      PaperProps={{
        sx: {
          backgroundColor: "#141414",
          color: "#fff",
          borderRadius: 0,
          maxHeight: "none",
          overflow: "visible",
        },
      }}
    >
      {/* Header Image + Overlay */}
      <ModalHeader details={d} onClose={onClose} />

      {/* MAIN CONTENT */}
      <DialogContent
        sx={{
          px: 3,
          pt: 3,
          pb: 4,
          overflow: "visible",
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {/* METADATA + SUMMARY */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: 4,
            mb: 4,
          }}
        >
          {/* LEFT SIDE */}
          <Box sx={{ flex: 1.3, display: "flex", flexDirection: "column", gap: 1.5 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                color: "#bcbcbc",
                fontSize: 14,
              }}
            >
              {year && <Typography>{year}</Typography>}
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

          {/* RIGHT SIDE */}
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
              <strong style={{ color: "#fff" }}>Director:</strong> {director}
            </Typography>
            <Typography>
              <strong style={{ color: "#fff" }}>Maturity rating:</strong>{" "}
              {aboutMaturityRating}
            </Typography>
            <Typography sx={{ color: "#ccc" }}>{disclaimers}</Typography>
          </Box>
        </Box>

        {/* TRAILERS SECTION */}
        {trailers.length > 0 && <TrailersSection trailers={trailers} />}

        {/* ABOUT SECTION */}
        <AboutSection
          title={title}
          director={director}
          cast={cast}
          genresList={genresList}
          showIs={d.type === "tv" ? "TV Show" : "Movie"}
          aboutMaturityRating={aboutMaturityRating}
          disclaimers={disclaimers}
        />
      </DialogContent>
    </Dialog>
  );
};

ProgramDetailsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  details: PropTypes.object,
};

export default ProgramDetailsModal;
