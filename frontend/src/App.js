// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import ProfileSelectionPage from "./pages/profileSelectionPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route
          path="/ProfileSelectionPage"
          element={<ProfileSelectionPage />}
        />
      </Routes>
    </Router>
  );
}
/* HELLO */
export default App;
