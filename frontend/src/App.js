// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import ProfileSelectionPage from "./pages/ProfileSelectionPage";
import AccountHomePage from "./pages/AccountHomePage";
import ReviewProgram from "./pages/ReviewProgram";
import MyListPage from "./pages/myList";
import NewAndPopular from "./pages/newAndPopular";
import MoviesPage from "./pages/movies";
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
        <Route path="/MyListPage" element={<MyListPage />} />
        <Route path="/NewAndPopular" element={<NewAndPopular />} />
        <Route path="/MoviesPage" element={<MoviesPage />} />
      </Routes>
    </Router>
  );
}
/* HELLO */
export default App;
