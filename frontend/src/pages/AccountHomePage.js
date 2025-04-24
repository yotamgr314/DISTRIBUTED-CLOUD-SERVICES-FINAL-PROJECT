import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import FooterAccountHomePage from "../components/shared/footerAccountHomePage";
import Navbar from "../components/shared/navbar";
import ProgramDetailsModal from "../components/moreInfoModal/ProgramDetailsModal";
import { getToken } from "../services/authService";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";

/**
 * SectionRow: Generic component to display images in a horizontal scroll.
 * Expects `images` to be an array of { url: string, id: string }.
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
      {images.map(({ url, id }, idx) => (
        <Box key={idx} sx={{ flex: "0 0 auto" }} onClick={() => onImageClick(id)}>
          <Box
            component="img"
            src={url}
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
  const [cover, setCover] = useState([]);
  const [coverIndex, setCoverIndex] = useState(0);
  const [newOnNetflix, setNewOnNetflix] = useState([]);
  const [animation, setAnimation] = useState([]);
  const [action, setAction] = useState([]);
  const [myList, setMyList] = useState([]);

  const [selectedProgramId, setSelectedProgramId] = useState(null);
  const [programDetails, setProgramDetails] = useState(null);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);

  const handleOpenDetailsModal = (programId) => {
    setSelectedProgramId(programId);
    setDetailsModalOpen(true);
  };
  const handleCloseDetailsModal = () => {
    setDetailsModalOpen(false);
    setSelectedProgramId(null);
    setProgramDetails(null);
  };

  useEffect(() => {
    const token = getToken();
    const profileId = sessionStorage.getItem("selectedProfileId");

    // 1) Fetch homepage rows
    fetch("http://localhost:5000/api/programs/homepage", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setCover(data.cover || []);
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
      .then((items) => setMyList(items.slice(0, 10)))
      .catch((err) => console.error("Failed loading My List:", err));
  }, []);

  // rotate the cover every 5 seconds
  useEffect(() => {
    if (cover.length < 2) return;
    const id = setInterval(() => {
      setCoverIndex((i) => (i + 1) % cover.length);
    }, 5000);
    return () => clearInterval(id);
  }, [cover]);

  // fetch selected program details
  useEffect(() => {
    if (!selectedProgramId) return;
    const token = getToken();
    fetch(`http://localhost:5000/api/programs/${selectedProgramId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Program not found");
        return res.json();
      })
      .then((data) => setProgramDetails(data))
      .catch((err) => {
        console.error("Failed loading program details:", err);
        setProgramDetails(null);
      });
  }, [selectedProgramId]);

  // prepare image arrays
  const newOnNetflixItems = newOnNetflix
    .filter((p) => p.posterPath)
    .map((p) => ({ url: `${IMAGE_BASE_URL}${p.posterPath}`, id: p._id }));

  const animationItems = animation
    .filter((p) => p.posterPath)
    .map((p) => ({ url: `${IMAGE_BASE_URL}${p.posterPath}`, id: p._id }));

  const actionItems = action
    .filter((p) => p.posterPath)
    .map((p) => ({ url: `${IMAGE_BASE_URL}${p.posterPath}`, id: p._id }));

  const myListItems = myList
    .filter((item) => item.program?.posterPath)
    .map((item) => ({
      url: `${IMAGE_BASE_URL}${item.program.posterPath}`,
      id: item.program._id,
    }));

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
          src={
            cover.length
              ? `${BACKDROP_BASE_URL}${cover[coverIndex].backdropPath}`
              : "/assets/houseOfNinjasCover.png"
          }
          alt={cover[coverIndex]?.title || "Cover"}
          sx={{ display: "block", width: "100%", cursor: "pointer" }}
          onClick={() => handleOpenDetailsModal(cover[coverIndex]?._id)}
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
            {cover[coverIndex]?.title?.toUpperCase() || "HOUSE OF NINJAS"}
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              startIcon={<InfoIcon />}
              onClick={() =>
                handleOpenDetailsModal(cover[coverIndex]?._id)
              }
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
        <SectionRow
          title="New on Netflix"
          images={newOnNetflixItems}
          imageWidth={215}
          imageHeight={154}
          borderRadius={0}
          onImageClick={handleOpenDetailsModal}
        />
        <SectionRow
          title="Animation"
          images={animationItems}
          onImageClick={handleOpenDetailsModal}
        />
        <SectionRow
          title="Action"
          images={actionItems}
          onImageClick={handleOpenDetailsModal}
        />
        <SectionRow
          title="My List"
          images={myListItems}
          onImageClick={handleOpenDetailsModal}
        />
      </Box>

      <FooterAccountHomePage />

      <ProgramDetailsModal
        open={detailsModalOpen}
        onClose={handleCloseDetailsModal}
        details={programDetails || {}}  // <-- guard against null
      />
    </Box>
  );
};

export default AccountHomePage;
