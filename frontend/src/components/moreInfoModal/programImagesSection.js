import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const ProgramImagesSection = ({ programImages = [] }) => {
  if (programImages.length === 0) return null;

  return (
    <Box sx={{ mb: 4 }}>
      <Grid container spacing={2}>
        {programImages.slice(0, 3).map((imgPath, i) => (
          <Grid item xs={12} sm={4} md={4} key={i}>
            <Box
              component="img"
              src={
                imgPath
                  ? `${IMAGE_BASE_URL}${imgPath}`
                  : `${process.env.PUBLIC_URL}/assets/newOnNetFlix.svg`
              }
              alt={`Program Image ${i + 1}`}
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

ProgramImagesSection.propTypes = {
  programImages: PropTypes.arrayOf(PropTypes.string),
};

export default ProgramImagesSection;
