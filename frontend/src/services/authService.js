export const getToken = () => {
  const match = document.cookie.match(/token=([^;]+)/);
  return sessionStorage.getItem("token") || (match ? match[1] : null);
};

export const getUserRole = () => {
  return sessionStorage.getItem("role") || null;
};

export const clearAuth = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("role");
  sessionStorage.removeItem("selectedAvatarIndex");
  sessionStorage.removeItem("selectedProfileId");

  // מוחק את ה-cookie של הטוקן
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};
