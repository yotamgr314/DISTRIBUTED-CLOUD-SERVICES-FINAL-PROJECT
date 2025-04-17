import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../../services/authService";

const ProtectedRoute = ({ children }) => {
  const token = getToken();

  if (!token) {
    // משתמש לא מזוהה – שלח לעמוד התחברות
    return <Navigate to="/SignIn" replace />;
  }

  // משתמש מחובר – אפשר להמשיך לדף המבוקש
  return children;
};

export default ProtectedRoute;
