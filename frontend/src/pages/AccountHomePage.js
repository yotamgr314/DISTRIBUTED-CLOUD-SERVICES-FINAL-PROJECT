// src/pages/AccountHomePage.js
import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import FooterAccountHomePage from "../components/shared/footerAccountHomePage";
import Navbar from "../components/shared/navbar";
import ProgramDetailsModal from "../components/moreInfoModal/ProgramDetailsModal";
import { getToken } from "../services/authService";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

/**
 * SectionRow: Generic component to display images in a horizontal scroll.
 */
const SectionRow = ({
  title,
  images,
  imageWidth = 218,
  imageHeight = 123,
  borderRadius = 2,
  showProgressBar = false,
  onImageClick,
}) => (
  <Box sx={{ mb: 4 }}>
    <Typography
      variant="h6"
      sx={{ mb: 2, fontWeight: "bold", fontSize: "1.2rem" }}
    >
      {title}
    </Typography>
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        gap: "20px",
        scrollBehavior: "smooth",
        "::-webkit-scrollbar": { display: "none" },
      }}
    >
      {images.map((img, idx) => (
        <Box key={idx} sx={{ flex: "0 0 auto" }}>
          <Box
            component="img"
            src={img}
            alt={`${title} ${idx}`}
            sx={{
              width: `${imageWidth}px`,
              height: `${imageHeight}px`,
              borderRadius: `${borderRadius}px`,
              objectFit: "cover",
              cursor: "pointer",
              display: "block",
              mb: showProgressBar ? 1 : 0,
            }}
            onClick={onImageClick}
          />
          {showProgressBar && (
            <Box
              sx={{ width: "132px", height: "3px", backgroundColor: "#E50914" }}
            />
          )}
        </Box>
      ))}
    </Box>
  </Box>
);

const AccountHomePage = () => {
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [newOnNetflix, setNewOnNetflix] = useState([]);
  const [animation, setAnimation] = useState([]);
  const [action, setAction] = useState([]);
  const [myList, setMyList] = useState([]);

  const handleOpenDetailsModal = () => setDetailsModalOpen(true);
  const handleCloseDetailsModal = () => setDetailsModalOpen(false);

  useEffect(() => {
    const token = getToken();
    const profileId = sessionStorage.getItem("selectedProfileId");

    // 1) Fetch homepage rows
    fetch("http://localhost:5000/api/programs/homepage", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setNewOnNetflix(data.newOnNetflix || []);
        setAnimation(data.animation || []);
        setAction(data.action || []);
      })
      .catch((err) => console.error("Failed loading homepage:", err));

    // 2) Fetch My List (latest 10)
    fetch("http://localhost:5000/api/mylist/me", {
      headers: {
        Authorization: `Bearer ${token}`,
        "X-Profile-Id": profileId,
      },
    })
      .then((res) => res.json())
      .then((items) => {
        setMyList(items.slice(0, 10));
      })
      .catch((err) => console.error("Failed loading My List:", err));
  }, []);

  // Build the image URLs
  const newOnNetflixImages = newOnNetflix.map(
    (p) => `${IMAGE_BASE_URL}${p.posterPath}`
  );
  const animationImages = animation.map(
    (p) => `${IMAGE_BASE_URL}${p.posterPath}`
  );
  const actionImages = action.map((p) => `${IMAGE_BASE_URL}${p.posterPath}`);
  const myListImages = myList.map(
    (item) => `${IMAGE_BASE_URL}${item.program.posterPath}`
  );

  // Keep the original sampleDetails for the modal
  const sampleDetails = {
    title: "House of Ninjas",
    description:
      "תיאור התכנית: כאן יופיע תיאור מפורט של התכנית, הסיפור, הסגנון ועוד.",
    isSeries: true,
    episodes: [
      { title: "פרק 1", description: "תיאור קצר של פרק 1", runtime: "55m" },
      { title: "פרק 2", description: "תיאור קצר של פרק 2", runtime: "53m" },
      { title: "פרק 3", description: "תיאור קצר של פרק 3", runtime: "55m" },
    ],
    trailers: [
      {
        image: "/assets/newOnNetFlix.svg",
        caption: "Season 1 Trailer 1: House of Ninjas",
      },
      {
        image: "/assets/newOnNetFlix.svg",
        caption: "Season 1 Trailer 2: House of Ninjas",
      },
      {
        image: "/assets/newOnNetFlix.svg",
        caption: "Season 1 Trailer 3: House of Ninjas",
      },
    ],
  };

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* HERO / COVER SECTION */}
      <Box sx={{ position: "relative", width: "100%" }}>
        <Navbar />
        <Box
          component="img"
          src="/assets/houseOfNinjasCover.png"
          alt="House of Ninjas"
          sx={{ display: "block", width: "100%", cursor: "pointer" }}
          onClick={handleOpenDetailsModal}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "50%",
            background: "linear-gradient(to top, #000, transparent)",
          }}
        />
        <Box sx={{ position: "absolute", bottom: "20%", left: "5%" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "1.5rem", md: "3rem" },
            }}
          >
            HOUSE OF NINJAS
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              startIcon={<InfoIcon />}
              onClick={handleOpenDetailsModal}
              sx={{
                backgroundColor: "rgba(109,109,110,0.7)",
                color: "#fff",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "rgba(109,109,110,0.9)" },
              }}
            >
              More Info
            </Button>
          </Box>
        </Box>
      </Box>

      {/* MAIN CONTENT */}
      <Box sx={{ px: "58px", py: 4 }}>
        {/* שורה 2: New on Netflix */}
        <SectionRow
          title="New on Netflix"
          images={newOnNetflixImages}
          imageWidth={215}
          imageHeight={154}
          borderRadius={0}
          onImageClick={handleOpenDetailsModal}
        />

        {/* שורה 6: Animation */}
        <SectionRow
          title="Animation"
          images={animationImages}
          onImageClick={handleOpenDetailsModal}
        />

        {/* שורה 7: Action */}
        <SectionRow
          title="Action"
          images={actionImages}
          onImageClick={handleOpenDetailsModal}
        />

        {/* שורה 8: My List */}
        <SectionRow
          title="My List"
          images={myListImages}
          onImageClick={handleOpenDetailsModal}
        />
      </Box>

      {/* FOOTER */}
      <FooterAccountHomePage />

      {/* Program Details Modal */}
      <ProgramDetailsModal
        open={detailsModalOpen}
        onClose={handleCloseDetailsModal}
        details={sampleDetails}
      />
    </Box>
  );
};

export default AccountHomePage;
