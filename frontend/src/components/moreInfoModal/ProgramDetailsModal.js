// src/components/moreInfoModal/MoreInfoModal.js

import React from "react";
import PropTypes from "prop-types";
import { Dialog, DialogContent, Divider, Slide } from "@mui/material";
import ModalHeader from "./ModalHeader";
import EpisodesList from "./EpisodesList";
import TrailersSection from "./TrailersSection";
import AboutSection from "./AboutSection";

// Animate from left
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const MoreInfoModal = ({ open, onClose, details = {} }) => {
  const {
    isSeries,
    episodes = [],
    trailers = [],
    director,
    aboutMaturityRating,
    disclaimers,
  } = details;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      fullWidth
      maxWidth="md"
      sx={{
        "& .MuiDialog-container": { alignItems: "flex-start" },
      }}
      PaperProps={{
        sx: {
          backgroundColor: "#141414",
          color: "#fff",
          borderRadius: 0,
          maxHeight: "none",
          overflow: "hidden",
        },
      }}
    >
      {/* Modal Header */}
      <ModalHeader details={details} onClose={onClose} />
      <Divider sx={{ borderColor: "#333" }} />
      <DialogContent
        sx={{
          px: 2,
          pt: 2,
          pb: 2,
          overflow: "visible",
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {isSeries && episodes.length > 0 && (
          <EpisodesList episodes={episodes} title={details.title} />
        )}
        {trailers.length > 0 && <TrailersSection trailers={trailers} />}
        <AboutSection
          title={details.title}
          director={director}
          aboutMaturityRating={aboutMaturityRating}
          disclaimers={disclaimers}
          cast={details.cast}
          genresList={details.genresList}
          showIs={details.showIs}
        />
      </DialogContent>
    </Dialog>
  );
};

MoreInfoModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  details: PropTypes.shape({
    heroImage: PropTypes.string,
    isSeries: PropTypes.bool,
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
    episodes: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        runtime: PropTypes.string,
      })
    ),
    trailers: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        caption: PropTypes.string,
      })
    ),
    director: PropTypes.string,
    aboutMaturityRating: PropTypes.string,
    disclaimers: PropTypes.string,
  }),
};

export default MoreInfoModal;
