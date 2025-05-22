import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LandingPage from "./pages/LandingPage";
import PageWrapper from "./components/PageWrapper";
import Overview from "./pages/TournamentsPage/Overview";
import Watch from "./pages/TournamentsPage/Watch";
import Matches from "./pages/TournamentsPage/Matches";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}

          <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          <Route element={<PageWrapper />}>
            <Route path="tournamentspage/overview" element={<Overview />} />
            <Route path="tournamentspage/watch" element={<Watch />} />
            <Route path="tournamentspage/matches" element={<Matches />} />
            {/* <Route path="tournamentspage/rules" element={<Rules />} />
            <Route path="tournamentspage/standings" element={<Standings />} /> */}
          </Route>

          {/* Protected/authenticated routes */}
          {/* <Route element={<PageWrapper />}>
            <Route
              path="tournamentspage/overview"
              element={
                <ProtectedRoute>
                  <Overview />
                </ProtectedRoute>
              }
            />
          </Route> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

// export default function App() {
//   return (
//     <div>
//       <LandingPage />
//       {/* <PageWrapper /> */}
//       {/* <AuthLayout /> */}
//     </div>
//   );
// }
