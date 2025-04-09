// src/components/moreInfoModal/AboutSection.js

import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const AboutSection = ({
  title = "House of Ninjas",
  director = "Dave Boyle",
  cast = "Kento Kaku, Yosuke Eguchi, Tae Kimura, ...",
  genresList = "TV Dramas, Japanese, TV Thrillers",
  showIs = "Dark, Suspenseful, Exciting",
  aboutMaturityRating = "TV-MA For Mature Audiences",
  disclaimers = "smoking, violence For Mature Audiences",
}) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        About {title}
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 }}>
        <strong>Director:</strong> {director}
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 }}>
        <strong>Cast:</strong> {cast}
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 }}>
        <strong>Genres:</strong> {genresList}
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 }}>
        <strong>This show is:</strong> {showIs}
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 }}>
        <strong>Maturity rating:</strong> {aboutMaturityRating}
      </Typography>
      <Typography variant="body2" sx={{ mb: 1, color: "#ccc" }}>
        {disclaimers}
      </Typography>
    </Box>
  );
};

AboutSection.propTypes = {
  title: PropTypes.string,
  director: PropTypes.string,
  cast: PropTypes.string,
  genresList: PropTypes.string,
  showIs: PropTypes.string,
  aboutMaturityRating: PropTypes.string,
  disclaimers: PropTypes.string,
};

export default AboutSection;
