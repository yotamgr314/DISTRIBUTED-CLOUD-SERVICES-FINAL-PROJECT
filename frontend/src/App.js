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
import TvShowsPage from "./pages/tvShow";
import AddProgram from "./pages/AddProgram";
import ProtectedRoute from "./components/shared/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route
          path="/ProfileSelectionPage"
          element={
            <ProtectedRoute>
              <ProfileSelectionPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/AddProgram"
          element={
            <ProtectedRoute>
              <AddProgram />
            </ProtectedRoute>
          }
        />

        <Route path="/AccountHomePage" element={<AccountHomePage />} />
        <Route path="/ReviewProgram" element={<ReviewProgram />} />
        <Route path="/MyListPage" element={<MyListPage />} />
        <Route path="/NewAndPopular" element={<NewAndPopular />} />
        <Route path="/MoviesPage" element={<MoviesPage />} />
        <Route path="/TvShowsPage" element={<TvShowsPage />} />
      </Routes>
    </Router>
  );
}
/* HELLO */
export default App;
