// src/components/moreInfoModal/TrailersSection.js

import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Grid } from "@mui/material";

const TrailersSection = ({ trailers = [] }) => {
  if (trailers.length === 0) return null;

  return (
    <Box sx={{ mb: 4 }}>
      <Grid container spacing={2}>
        {trailers.slice(0, 3).map((tr, i) => (
          <Grid item xs={12} sm={4} md={4} key={i}>
            <Box
              component="img"
              src={
                tr.image || `${process.env.PUBLIC_URL}/assets/newOnNetFlix.svg`
              }
              alt={`Trailer ${i + 1}`}
              sx={{
                width: "100%",
                height: 150,
                objectFit: "cover",
                borderRadius: 1,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

TrailersSection.propTypes = {
  trailers: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      caption: PropTypes.string,
    })
  ),
};

export default TrailersSection;
