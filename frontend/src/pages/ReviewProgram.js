// 📁 src/pages/ReviewProgram.js

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Switch,
  Button,
  Rating,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Navbar from "../components/shared/navbar";
import FooterAccountHomePage from "../components/shared/footerAccountHomePage";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const dummyReviews = [
  {
    user: "Jane",
    content: "Beautiful visuals and strong characters.",
    rating: 5,
  },
  {
    user: "Bob",
    content: "A bit predictable but entertaining overall.",
    rating: 3,
  },
  {
    user: "Alice",
    content:
      "It started slow but picked up quickly. I loved the suspense and twists!",
    rating: 4,
  },
  {
    user: "Dan",
    content: "It was okay, not amazing but watchable.",
    rating: 2,
  },
];

const ReviewProgram = () => {
  const { programId } = useParams();
  const navigate = useNavigate();

  const [reviewText, setReviewText] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [rating, setRating] = useState(0);
  const [exitDialogOpen, setExitDialogOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      programId,
      reviewText,
      isPublic,
      rating,
    };
    console.log("Review submitted:", review);
    navigate("/AccountHomePage");
  };

  const handleExit = () => {
    setExitDialogOpen(true);
  };

  const confirmExit = () => {
    navigate("/AccountHomePage");
  };

  return (
    <Box
      id="review-root"
      sx={{
        minHeight: "100vh",
        backgroundImage: 'url("/assets/hero-image.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />

      {/* Navbar */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Navbar />
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          minHeight: "calc(100vh - 150px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
          pt: 10,
          pb: 6,
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: "100%",
            maxWidth: "960px",
            backgroundColor: "rgba(20,20,20,0.95)",
            p: 4,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            gap: 3,
            color: "#fff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Exit Button */}
          <IconButton
            onClick={handleExit}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "#fff",
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#fff", textAlign: "center" }}
          >
            Leave a Review
          </Typography>

          <TextField
            multiline
            minRows={4}
            label="What did you think about the program?"
            variant="filled"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            fullWidth
            InputProps={{ sx: { color: "#fff" } }}
            InputLabelProps={{ sx: { color: "#aaa" } }}
            sx={{ backgroundColor: "#1f1f1f" }}
          />

          <FormControlLabel
            control={
              <Switch
                checked={isPublic}
                onChange={(e) => setIsPublic(e.target.checked)}
                sx={{
                  "& .MuiSwitch-thumb": {
                    backgroundColor: isPublic ? "#E50914" : "#888",
                  },
                }}
              />
            }
            label={
              <Typography sx={{ color: "#fff" }}>
                {isPublic ? "Public Review" : "Private Review"}
              </Typography>
            }
          />

          <Box>
            <Typography sx={{ mb: 1, fontWeight: "bold" }}>Rating</Typography>
            <Rating
              name="program-rating"
              value={rating}
              onChange={(e, newValue) => setRating(newValue)}
              precision={1}
              size="large"
              sx={{
                "& .MuiRating-iconEmpty": {
                  color: "#888",
                },
              }}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#E50914",
              fontWeight: "bold",
              textTransform: "none",
              mt: 2,
              "&:hover": { backgroundColor: "#b81d24" },
            }}
          >
            Submit Review
          </Button>

          {/* REVIEWS CAROUSEL INSIDE MODAL */}
          <Box sx={{ mt: 4, px: 1 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
            >
              What Others Are Saying
            </Typography>

            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation]}
              style={{ paddingBottom: "4rem" }}
            >
              {dummyReviews.map((review, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    width: 300,
                    backgroundColor: "#1f1f1f",
                    borderRadius: "16px",
                    padding: "20px",
                    color: "#fff",
                    boxSizing: "border-box",
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {review.user}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.95rem",
                      color: "#ccc",
                      mb: 2,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {review.content}
                  </Typography>
                  <Rating
                    value={review.rating}
                    readOnly
                    sx={{ color: "#fbc02d" }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Box>

      {/* Exit Confirmation Dialog */}
      <Dialog
        open={exitDialogOpen}
        onClose={() => setExitDialogOpen(false)}
        container={document.getElementById("review-root")}
      >
        <DialogTitle>Are you sure you wish to leave?</DialogTitle>
        <DialogContent>
          <Typography>The review will not be saved.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setExitDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmExit} color="error" variant="contained">
            Leave
          </Button>
        </DialogActions>
      </Dialog>

      {/* Footer */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <FooterAccountHomePage />
      </Box>
    </Box>
  );
};

export default ReviewProgram;
