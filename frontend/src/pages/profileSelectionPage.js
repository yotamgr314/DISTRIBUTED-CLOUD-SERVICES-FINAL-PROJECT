// src/pages/ProfileSelectionPage.js

import React, { useState } from "react";
import { Box, Typography, IconButton, TextField, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

// עדכון הנתיבים לתמונות האוואטר בהתאם לשמות שבחרת
const avatars = [
  "/assets/redIcon.svg",
  "/assets/blueIcon.svg",
  "/assets/purpleIcon.svg",
  "/assets/yellowIcon.svg",
];

function getRandomAvatarIndex() {
  return Math.floor(Math.random() * avatars.length);
}

const ProfileSelectionPage = () => {
  const navigate = useNavigate();

  // מצב מקומי של רשימת הפרופילים
  const [profiles, setProfiles] = useState([
    { id: 1, name: "Jennifer", avatarIndex: 0, isEditing: false },
    { id: 2, name: "Bill", avatarIndex: 1, isEditing: false },
    { id: 3, name: "Alice", avatarIndex: 2, isEditing: false },
    { id: 4, name: "James", avatarIndex: 3, isEditing: false },
  ]);

  // לחיצה על תמונת הפרופיל בוחרת את הפרופיל ומעבירה לדף הבית
  const handleSelectProfile = (profileId) => {
    console.log("Selected profile:", profileId);
    navigate("/home");
  };

  // מחיקה של פרופיל
  const handleDeleteProfile = (profileId) => {
    setProfiles((prev) => prev.filter((p) => p.id !== profileId));
  };

  // לחיצה על שם הפרופיל לעריכה
  const handleEditName = (profileId) => {
    setProfiles((prev) =>
      prev.map((p) => (p.id === profileId ? { ...p, isEditing: true } : p))
    );
  };

  // שינוי שם הפרופיל
  const handleNameChange = (profileId, newName) => {
    setProfiles((prev) =>
      prev.map((p) => (p.id === profileId ? { ...p, name: newName } : p))
    );
  };

  // שמירת שם בפרופיל בעת לחיצה על Enter
  const handleNameKeyDown = (e, profileId) => {
    if (e.key === "Enter") {
      setProfiles((prev) =>
        prev.map((p) => (p.id === profileId ? { ...p, isEditing: false } : p))
      );
    }
  };

  // הוספת פרופיל חדש
  const handleAddProfile = () => {
    const newId = Date.now();
    const randomAvatar = getRandomAvatarIndex();
    setProfiles((prev) => [
      ...prev,
      {
        id: newId,
        name: "New Profile",
        avatarIndex: randomAvatar,
        isEditing: false,
      },
    ]);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 8,
      }}
    >
      {/* כותרת */}
      <Typography
        sx={{
          fontFamily: "ABeeZee",
          fontWeight: 400,
          fontSize: "50px",
          lineHeight: "100%",
          color: "#FFFFFF",
          mb: 6,
        }}
      >
        Who's watching?
      </Typography>

      {/* אזור הבחירה של הפרופילים */}
      <Box
        sx={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {profiles.map((profile) => (
          <Box
            key={profile.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* תמונת אוואטר + כפתור מחיקה */}
            <Box
              sx={{
                position: "relative",
                width: "144px",
                height: "144px",
                mb: 1,
              }}
            >
              <IconButton
                onClick={() => handleDeleteProfile(profile.id)}
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  color: "#fff",
                }}
              >
                <DeleteIcon />
              </IconButton>
              <Box
                component="img"
                src={avatars[profile.avatarIndex]}
                alt="Profile Avatar"
                sx={{
                  width: "144px",
                  height: "144px",
                  cursor: "pointer",
                }}
                onClick={() => handleSelectProfile(profile.id)}
              />
            </Box>

            {/* שם הפרופיל - עריכה או טקסט */}
            {profile.isEditing ? (
              <TextField
                variant="outlined"
                size="small"
                value={profile.name}
                onChange={(e) => handleNameChange(profile.id, e.target.value)}
                onKeyDown={(e) => handleNameKeyDown(e, profile.id)}
                sx={{
                  width: "144px",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#fff",
                    color: "#000",
                  },
                }}
              />
            ) : (
              <Typography
                sx={{
                  cursor: "pointer",
                  fontFamily: "ABeeZee",
                  fontSize: "16px",
                  textAlign: "center",
                  width: "144px",
                }}
                onClick={() => handleEditName(profile.id)}
              >
                {profile.name}
              </Typography>
            )}
          </Box>
        ))}

        {/* כפתור הוספת פרופיל אם פחות מ-5 */}
        {profiles.length < 5 && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={handleAddProfile}
          >
            <Box
              component="img"
              src="/assets/addIcon.svg"
              alt="Add Profile"
              sx={{
                width: "144px",
                height: "144px",
                mb: 1,
              }}
            />
            <Typography
              sx={{
                fontFamily: "ABeeZee",
                fontSize: "16px",
                textAlign: "center",
                width: "144px",
              }}
            >
              Add Profile
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProfileSelectionPage;
