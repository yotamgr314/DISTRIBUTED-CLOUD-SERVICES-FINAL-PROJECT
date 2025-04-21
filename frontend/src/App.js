import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import AdminReviewsPage from "./pages/adminReviews";
import ProtectedRoute from "./components/shared/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate replace to="/SignIn" />} />

        {/* Public routes */}
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />

        {/* Protected routes */}
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
        <Route
          path="/AdminReviewsPage"
          element={
            <ProtectedRoute>
              <AdminReviewsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/AccountHomePage"
          element={
            <ProtectedRoute>
              <AccountHomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ReviewProgram"
          element={
            <ProtectedRoute>
              <ReviewProgram />
            </ProtectedRoute>
          }
        />
        <Route
          path="/MyListPage"
          element={
            <ProtectedRoute>
              <MyListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/NewAndPopular"
          element={
            <ProtectedRoute>
              <NewAndPopular />
            </ProtectedRoute>
          }
        />
        <Route
          path="/MoviesPage"
          element={
            <ProtectedRoute>
              <MoviesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/TvShowsPage"
          element={
            <ProtectedRoute>
              <TvShowsPage />
            </ProtectedRoute>
          }
        />

        {/* Catch-all: כל שאר הכתובות יפנו ל-SignIn */}
        <Route path="*" element={<Navigate replace to="/SignIn" />} />
      </Routes>
    </Router>
  );
}

export default App;
