import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getToken } from "../../services/authService";

// This file protects ALL routes (admin + user) based on token, role, and selected profile
const ProtectedRoute = ({ children }) => {
  const token = getToken();
  const role = sessionStorage.getItem("role");
  const profileId = sessionStorage.getItem("selectedProfileId");
  const location = useLocation();

  // אם אין טוקן בכלל – שלח תמיד לעמוד התחברות
  if (!token) {
    return <Navigate to="/SignIn" replace />;
  }

  // אם זה משתמש רגיל ועדיין לא בחר פרופיל
  if (
    role === "user" &&
    !profileId &&
    location.pathname !== "/ProfileSelectionPage"
  ) {
    return <Navigate to="/ProfileSelectionPage" replace />;
  }

  // אחרת – הכל תקין
  return children;
};

export default ProtectedRoute;
