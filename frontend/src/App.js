// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import ProfileSelectionPage from "./pages/ProfileSelectionPage";
import AccountHomePage from "./pages/AccountHomePage";
import ReviewProgram from "./pages/ReviewProgram";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route
          path="/ProfileSelectionPage"
          element={<ProfileSelectionPage />}
        />
        <Route path="/AccountHomePage" element={<AccountHomePage />} />
        <Route path="/ReviewProgram" element={<ReviewProgram />} />
      </Routes>
    </Router>
  );
}
/* HELLO */
export default App;
