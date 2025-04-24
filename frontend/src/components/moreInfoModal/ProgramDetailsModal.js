import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Dialog, DialogContent, Slide } from "@mui/material";

import AboutSection from "./AboutSection";
import TrailersSection from "./programImagesSection";
import ModalHeader from "./ModalHeader";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const ProgramDetailsModal = ({ open, onClose, details = {} }) => {
  // pull everything we actually store in Mongo
  const {
    title = "",
    description = "",
    cast: castArr = [],
    genres: genresArr = [],
    crew: crewArr = [],
    releaseDate = "",
    trailers = [],
  } = details;

  // derive the bits we need
  const summary = description;
  const cast = castArr.join(", ");
  const genresList = genresArr.join(", ");
  const director = crewArr[0] || "";
  const year = releaseDate
    ? new Date(releaseDate).getFullYear()
    : "";

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
      {/* banner + close button */}
      <ModalHeader details={details} onClose={onClose} />

      <DialogContent
        sx={{
          px: 3,
          pt: 3,
          pb: 4,
          overflow: "visible",
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {/* top metadata + summary */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: 4,
            mb: 4,
          }}
        >
          {/* left */}
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
              <Typography sx={{ color: "#46D369" }}>New</Typography>
              <Typography>{`${year}`}</Typography>
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

          {/* right */}
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
          </Box>
        </Box>

        {/* trailers if any */}
        {trailers.length > 0 && <TrailersSection trailers={trailers} />}

        {/* about section: now fully dynamic for the fields we have */}
        <AboutSection
          title={title}
          director={director}
          cast={cast}
          genresList={genresList}
          showIs={genresList /* or derive something else */}
          aboutMaturityRating={details.adult ? "Adult" : "All Ages"}
          disclaimers={details.adult ? "Contains adult themes" : ""}
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
