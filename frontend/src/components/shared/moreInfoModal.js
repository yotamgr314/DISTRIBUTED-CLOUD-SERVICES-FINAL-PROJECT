// src/components/shared/ProgramDetailsModal.js

import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogContent,
  Grid,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RateReviewIcon from "@mui/icons-material/RateReview";
import AddIcon from "@mui/icons-material/Add";

// מעבר – אנימציה שמגיעה משמאל (Slide עם direction="left" גורמת לתוכן להחליק משמאל לימין)
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const MoreInfoModal = ({ open, onClose, details }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          backgroundColor: "#141414",
          color: "#fff",
          borderRadius: 0,
          p: 2,
        },
      }}
    >
      {/* כותרת המודאל + כפתור סגירה */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {details.title || "כותרת התכנית"}
        </Typography>
        <IconButton onClick={onClose} sx={{ color: "#fff" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent sx={{ p: 0 }}>
        {/* כפתורי פעולה */}
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <Button
            variant="outlined"
            startIcon={<RateReviewIcon />}
            sx={{ color: "#fff", borderColor: "#fff" }}
            onClick={() => {
              // כאן תתווסף הפונקציונליות לעמוד ביקורת
              console.log("מעבר לעמוד ביקורת");
            }}
          >
            ביקורת
          </Button>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            sx={{ color: "#fff", borderColor: "#fff" }}
            onClick={() => {
              // כאן תתווסף הפונקציונליות להוספה לרשימת הצפייה
              console.log("נוספה לרשימת הצפייה");
            }}
          >
            רשימת הצפייה שלי
          </Button>
        </Box>

        {/* תיאור התכנית */}
        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
          {details.description ||
            "כאן יופיע תיאור מפורט של התכנית, הסיפור, הסגנון ועוד. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        </Typography>

        {/* רשימת פרקים (במקרה של סדרה) */}
        {details.isSeries &&
          details.episodes &&
          details.episodes.length > 0 && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                פרקים
              </Typography>
              {/* כל פרק מוצג בשורה נפרדת */}
              {details.episodes.map((episode, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 2,
                    p: 1,
                    backgroundColor: "#222",
                    borderRadius: 1,
                  }}
                >
                  {/* שימוש ב-newOnNetFlix.svg כקובץ תמונה */}
                  <Box
                    component="img"
                    src="/assets/newOnNetFlix.svg"
                    alt={`פרק ${index + 1}`}
                    sx={{
                      width: 60,
                      height: 60,
                      objectFit: "cover",
                    }}
                  />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      {episode.title || `פרק ${index + 1}`}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#ccc" }}>
                      {episode.description || "תיאור קצר של הפרק..."}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          )}

        {/* מידע נוסף */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            מידע נוסף
          </Typography>
          {/* שלוש תמונות מהתכנית */}
          {details.additionalImages && details.additionalImages.length > 0 && (
            <Grid container spacing={2} sx={{ mb: 2 }}>
              {details.additionalImages.slice(0, 3).map((img, idx) => (
                <Grid item xs={4} key={idx}>
                  <Box
                    component="img"
                    src={img}
                    alt={`תמונה נוספת ${idx + 1}`}
                    sx={{ width: "100%", borderRadius: 1 }}
                  />
                </Grid>
              ))}
            </Grid>
          )}
          {/* פרטי צוות */}
          {details.crew && (
            <Typography variant="body2" sx={{ color: "#ccc", lineHeight: 1.6 }}>
              {details.crew}
            </Typography>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

MoreInfoModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  details: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    isSeries: PropTypes.bool,
    episodes: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
      })
    ),
    additionalImages: PropTypes.arrayOf(PropTypes.string),
    crew: PropTypes.string,
  }),
};

export default MoreInfoModal;
