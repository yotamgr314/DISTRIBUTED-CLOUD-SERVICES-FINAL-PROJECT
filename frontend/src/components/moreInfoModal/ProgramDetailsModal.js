// 📁 src/components/moreInfoModal/ProgramDetailsModal.js

import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Dialog, DialogContent, Slide } from "@mui/material";

import AboutSection from "./AboutSection";
import TrailersSection from "./TrailersSection";
import ModalHeader from "./ModalHeader";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const ProgramDetailsModal = ({ open, onClose, details = {} }) => {
  const {
    title = "House of Ninjas",
    newSeasons = "New 3 Seasons",
    year = "2024",
    hdAvailable = true,
    adAvailable = true,
    top10Rank = "#2 in TV Shows Today",
    summary = `Years after retiring from their formidable ninja lives, a dysfunctional family must return to shadowy missions to counter a string of looming threats.`,
    cast = "Kento Kaku, Yosuke Eguchi, Tae Kimura, more",
    genresList = "TV Dramas, Japanese, TV Thrillers",
    showIs = "Dark, Suspenseful, Exciting",
    director = "Dave Boyle",
    aboutMaturityRating = "TV-MA For Mature Audiences",
    disclaimers = "smoking, violence For Mature Audiences",
    episodes = [],
    trailers = [],
  } = details;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      fullWidth
      maxWidth="md"
      scroll="body" // ✅ let the modal grow and scroll with the body
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
      <ModalHeader details={details} onClose={onClose} />

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
          <Box
            sx={{
              flex: 1.3,
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                color: "#bcbcbc",
                fontSize: 14,
              }}
            >
              <Typography sx={{ color: "#46D369" }}>New</Typography>
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
              <strong style={{ color: "#fff" }}>This show is:</strong> {showIs}
            </Typography>
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
          showIs={showIs}
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
