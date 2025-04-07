// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import ProfileSelectionPage from "./pages/ProfileSelectionPage";
import AccountHomePage from "./pages/AccountHomePage";

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
      </Routes>
    </Router>
  );
}
/* HELLO */
export default App;
