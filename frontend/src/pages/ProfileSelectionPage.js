// src/pages/ProfileSelectionPage.js

import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { getToken } from "../services/authService";

const avatars = [
  "/assets/redIcon.svg",
  "/assets/blueIcon.svg",
  "/assets/purpleIcon.svg",
  "/assets/yellowIcon.svg",
];

const ProfileSelectionPage = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    const role = sessionStorage.getItem("role");

    if (!token) {
      navigate("/SignIn", { replace: true });
      return;
    }
    if (role !== "user") {
      navigate("/AccountHomePage", { replace: true });
      return;
    }

    fetchProfiles();
  }, [navigate]);

  const fetchProfiles = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/profiles/me", {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      if (!res.ok) throw new Error("Failed to fetch profiles");
      const data = await res.json();
      setProfiles(data.map((p) => ({ ...p, isEditing: false })));
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectProfile = (profileId) => {
    console.log("Selected profile:", profileId);
    navigate("/AccountHomePage");
  };

  const handleDeleteProfile = async (profileId) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/profiles/${profileId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      );
      if (!res.ok) throw new Error("Delete failed");
      setProfiles((prev) => prev.filter((p) => p._id !== profileId));
    } catch (err) {
      alert(err.message);
    }
  };

  const handleEditName = (profileId) => {
    setProfiles((prev) =>
      prev.map((p) => (p._id === profileId ? { ...p, isEditing: true } : p))
    );
  };

  const handleNameChange = (profileId, newName) => {
    setProfiles((prev) =>
      prev.map((p) => (p._id === profileId ? { ...p, name: newName } : p))
    );
  };

  const handleNameKeyDown = async (e, profileId) => {
    if (e.key === "Enter") {
      const profile = profiles.find((p) => p._id === profileId);
      try {
        const res = await fetch(
          `http://localhost:5000/api/profiles/${profileId}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${getToken()}`,
            },
            body: JSON.stringify({ name: profile.name }),
          }
        );
        if (!res.ok) throw new Error("Rename failed");
        setProfiles((prev) =>
          prev.map((p) =>
            p._id === profileId ? { ...p, isEditing: false } : p
          )
        );
      } catch (err) {
        alert(err.message);
      }
    }
  };

  const handleAddProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/profiles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ name: "New Profile" }),
      });
      if (!res.ok) throw new Error("Add profile failed");
      const newProfile = await res.json();
      setProfiles((prev) => [...prev, { ...newProfile, isEditing: false }]);
    } catch (err) {
      alert(err.message);
    }
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
            key={profile._id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "144px",
                height: "144px",
                mb: 1,
              }}
            >
              <IconButton
                onClick={() => handleDeleteProfile(profile._id)}
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
                onClick={() => handleSelectProfile(profile._id)}
              />
            </Box>

            {profile.isEditing ? (
              <TextField
                variant="outlined"
                size="small"
                value={profile.name}
                onChange={(e) => handleNameChange(profile._id, e.target.value)}
                onKeyDown={(e) => handleNameKeyDown(e, profile._id)}
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
                onClick={() => handleEditName(profile._id)}
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
