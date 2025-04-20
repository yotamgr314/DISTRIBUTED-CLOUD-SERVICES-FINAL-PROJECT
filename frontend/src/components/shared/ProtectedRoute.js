// src/components/shared/ProtectedRoute.js

import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getToken } from "../../services/authService";

// This file protects ALL routes (admin + user) based on token, role, and selected profile
const ProtectedRoute = ({ children }) => {
  const token = getToken();
  const role = sessionStorage.getItem("role");
  const profileId = sessionStorage.getItem("selectedProfileId");
  const location = useLocation();

  // אין טוקן בכלל – שלח תמיד לעמוד התחברות
  if (!token) {
    return <Navigate to="/SignIn" replace />;
  }

  // משתמש רגיל שעדיין לא בחר פרופיל – הפנה לבחירת פרופיל
  if (
    role === "user" &&
    !profileId &&
    location.pathname !== "/ProfileSelectionPage"
  ) {
    return <Navigate to="/ProfileSelectionPage" replace />;
  }

  // user trying to access pages belongs to admin.

  if (
    role === "user" &&
    profileId &&
    (location.pathname === "/AddProgram" ||
      location.pathname === "/AdminReviewsPage")
  ) {
    return <Navigate to="/AccountHomePage" replace />;
  }

  // מנהל מערכת שמנסה להיכנס לעמודים שלא רלוונטיים עבורו
  if (
    role === "admin" &&
    location.pathname !== "/AddProgram" &&
    location.pathname !== "/AdminReviewsPage"
  ) {
    return <Navigate to="/AdminReviewsPage" replace />;
  }

  // אחרת – הכל תקין
  return children;
};

export default ProtectedRoute;
