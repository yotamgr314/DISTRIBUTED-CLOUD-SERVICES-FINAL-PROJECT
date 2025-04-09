import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogContent,
  Slide,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import EpisodesList from "./EpisodesList";
import AboutSection from "./AboutSection";
import TrailersSection from "./TrailersSection";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const ProgramDetailsModal = ({ open, onClose, details = {} }) => {
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
          overflow: "hidden",
        },
      }}
    >
      {/* IMAGE SECTION */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 350, md: 450 },
        }}
      >
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

        {/* OVERLAY HEADER (on image) */}
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

        {/* EPISODES SECTION */}
        {episodes.length > 0 && (
          <EpisodesList episodes={episodes} title={title} />
        )}

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
