import React from "react";
import {
  BrowserRouter,
  Router,
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
import Matches2 from "./pages/TournamentsPage/Matches2";
import Rules from "./pages/TournamentsPage/Rules";
import Standings from "./pages/TournamentsPage/Standings";
import LeaguePageWrapper from "./components/LeaguePageWrapper";
import LeaguesPageOverview from "./pages/LeaguesPage/LeaguePageOverview";
import LeaguePageWatch from "./pages/LeaguesPage/LeaguePageWatch";
import LeaguePageMatches from "./pages/LeaguesPage/LeaguePageMatches";
import TournamentList from "./components/Tournaments/TournamentList";
import LeagueList from "./components/Leagues/LeagueList";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import UserWrapper from "./components/User/UserWrapper";
import UserPageOverview from "./pages/UserPage/UserPageOverview";

export default function App() {
  return (
       <BrowserRouter basename="/SCA/">
    <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}

          <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          <Route
            path="tournaments/tournamentlist"
            element={<TournamentList />}
          />
          <Route path="leagues/leaguelist" element={<LeagueList />} />

          <Route element={<PageWrapper />}>
            <Route path="tournamentspage/overview" element={<Overview />} />
            <Route path="tournamentspage/watch" element={<Watch />} />
            <Route path="tournamentspage/matches" element={<Matches />} />
            <Route path="tournamentspage/matches2" element={<Matches2 />} />
            <Route path="tournamentspage/rules" element={<Rules />} />
            <Route path="tournamentspage/standings" element={<Standings />} />
          </Route>

          <Route element={<LeaguePageWrapper />}>
            <Route
              path="leaguespage/leaguepageoverview"
              element={<LeaguesPageOverview />}
            />
            <Route
              path="leaguespage/leaguepagewatch"
              element={<LeaguePageWatch />}
            />
            <Route
              path="leaguespage/leaguepagematches"
              element={<LeaguePageMatches />}
            />
            {/* <Route path="leaguespage/matches2" element={<Matches2 />} />
            <Route path="leaguespage/rules" element={<Rules />} />
            <Route path="leaguespage/standings" element={<Standings />} /> */}
          </Route>

          <Route element={<UserWrapper />}>
            <Route
              path="userpage/userpageoverview"
              element={<UserPageOverview />}
            />
            {/* <Route path="tournamentspage/watch" element={<Watch />} />
            <Route path="tournamentspage/matches" element={<Matches />} />
            <Route path="tournamentspage/matches2" element={<Matches2 />} />
            <Route path="tournamentspage/rules" element={<Rules />} />
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
    </AuthProvider>
      </BrowserRouter>
  );
}


