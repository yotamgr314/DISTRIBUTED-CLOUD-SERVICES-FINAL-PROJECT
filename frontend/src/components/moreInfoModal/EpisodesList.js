// src/components/moreInfoModal/EpisodesList.js

import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const EpisodesList = ({ episodes, title }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Episodes
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "bold", opacity: 0.8 }}>
          {title}
        </Typography>
      </Box>
      {episodes.map((ep, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
            mb: 2,
            p: 1,
            backgroundColor: "#222",
            borderRadius: 1,
          }}
        >
          <Box
            component="img"
            src={
              ep.image || `${process.env.PUBLIC_URL}/assets/newOnNetFlix.svg`
            }
            alt={`Episode ${index + 1}`}
            sx={{
              width: 120,
              height: 70,
              objectFit: "cover",
              borderRadius: 1,
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {ep.title || `Episode ${index + 1}`}
            </Typography>
            <Typography variant="body2" sx={{ color: "#ccc" }}>
              {ep.description || "Short episode summary..."}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              {ep.runtime || "53m"}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

EpisodesList.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      runtime: PropTypes.string,
    })
  ).isRequired,
  title: PropTypes.string,
};

export default EpisodesList;
