// src/components/moreInfoModal/AboutSection.js

import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const AboutSection = ({
  title,
  director,
  cast,
  genresList,
  showIs,
  aboutMaturityRating,
  disclaimers,           // no default here
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

      {/* Maturity rating always shows if provided */}
      {aboutMaturityRating && (
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Maturity rating:</strong> {aboutMaturityRating}
        </Typography>
      )}

      {/* Only render disclaimers if the program actually has one */}
      {disclaimers && (
        <Typography variant="body2" sx={{ mb: 1, color: "#ccc" }}>
          {disclaimers}
        </Typography>
      )}
    </Box>
  );
};

AboutSection.propTypes = {
  title: PropTypes.string.isRequired,
  director: PropTypes.string,
  cast: PropTypes.string,
  genresList: PropTypes.string,
  showIs: PropTypes.string,
  aboutMaturityRating: PropTypes.string,
  disclaimers: PropTypes.string,  // now optional
};

export default AboutSection;
