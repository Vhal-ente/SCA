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
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
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
import LeaguePageRules from "./pages/LeaguesPage/LeaguePageRules";
import LeaguePageStandings from "./pages/LeaguesPage/LeaguePageStandings";
import TournamentList from "./components/Tournaments/TournamentList";
import LeagueList from "./components/Leagues/LeagueList";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import UserWrapper from "./components/User/UserWrapper";
import UserPageOverview from "./pages/UserPage/UserPageOverview";
import ComingSoonPage from "./pages/ComingSoonPage";
import NewsPage from "./pages/NewsPage";
import NewsArticlePage from "./pages/NewsArticlePage";
import ScrollManager from "./components/ScrollManager";
import ShogunPage from "./pages/ShogunPage";
import ShogunRosterPage from "./pages/ShogunRosterPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import RefundPolicyPage from "./pages/RefundPolicyPage";
import FairPlayPolicyPage from "./pages/FairPlayPolicyPage";
import CommunityPage from "./pages/CommunityPage";
import CareersPage from "./pages/CareersPage";
import CareerDetailPage from "./pages/CareerDetailPage";
import SponsorProgramPage from "./pages/SponsorProgramPage";
import PressKitPage from "./pages/PressKitPage";
import DashboardLayout from "./components/DashboardLayout";
import { DashboardCreateTeam, DashboardLeagues, DashboardMatchDetail, DashboardMatches, DashboardNotifications, DashboardOverview, DashboardRewards, DashboardTeamDetail, DashboardTeams, DashboardTournaments } from "./pages/DashboardPages";
import DashboardProfile from "./pages/DashboardProfilePage";
import DashboardSettings from "./pages/DashboardSettingsPage";
import PublicPlayerPage from "./pages/PublicPlayerPage";
import TeamPreviewPage from "./pages/TeamPreviewPage";
import TournamentJoinPage from "./pages/TournamentJoinPage";
import LeagueJoinPage from "./pages/LeagueJoinPage";
import RecruitmentPage from "./pages/RecruitmentPage";
import RecruitmentDetailPage from "./pages/RecruitmentDetailPage";
import { AdminRecruitment, DashboardApplications, DashboardRecruitmentCreate, DashboardTeamRecruitment } from "./pages/RecruitmentDashboardPages";
import { DashboardRefundDetail, DashboardRefunds } from "./pages/DashboardRefunds";
import DashboardAchievements from "./pages/DashboardAchievements";
import DashboardCoaching from "./pages/DashboardCoaching";
import CoachDirectoryPage from "./pages/CoachDirectoryPage";
import LoadoutsPage from "./pages/LoadoutsPage";
import LoadoutDetailPage from "./pages/LoadoutDetailPage";
import DashboardLoadouts from "./pages/DashboardLoadouts";
import LoadoutEditorPage from "./pages/LoadoutEditorPage";
import AdminLoadoutsPage from "./pages/AdminLoadoutsPage";

export default function App() {
  return (
       <BrowserRouter>
    <AuthProvider>
        <ScrollManager />
        <Routes>
          {/* Temporary launch page. Restore <LandingPage /> here after launch. */}
          <Route path="/" element={<ComingSoonPage />} />
          <Route path="landingpage" element={<LandingPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/:slug" element={<NewsArticlePage />} />
          <Route path="shogun" element={<ShogunPage />} />
          <Route path="shogun/:division" element={<ShogunRosterPage />} />
          <Route path="terms-of-service" element={<TermsPage />} />
          <Route path="privacy-policy" element={<PrivacyPage />} />
          <Route path="refund-policy" element={<RefundPolicyPage />} />
          <Route path="fair-play-policy" element={<FairPlayPolicyPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="careers/:slug" element={<CareerDetailPage />} />
          <Route path="sponsor-program" element={<SponsorProgramPage />} />
          <Route path="press-kit" element={<PressKitPage />} />
          <Route path="players/:username" element={<PublicPlayerPage />} />
          <Route path="coaches" element={<CoachDirectoryPage />} />
          <Route path="loadouts" element={<LoadoutsPage />} />
          <Route path="loadouts/:slug" element={<LoadoutDetailPage />} />
          <Route path="teams/:teamSlug" element={<TeamPreviewPage />} />
          <Route path="recruitment" element={<RecruitmentPage />} />
          <Route path="recruitment/:id" element={<RecruitmentDetailPage />} />
          <Route path="tournamentspage/join" element={<ProtectedRoute><TournamentJoinPage /></ProtectedRoute>} />
          <Route path="leaguespage/join" element={<ProtectedRoute><LeagueJoinPage /></ProtectedRoute>} />
          <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
            <Route path="dashboard" element={<DashboardOverview />} />
            <Route path="dashboard/profile" element={<DashboardProfile />} />
            <Route path="dashboard/coaching" element={<DashboardCoaching />} />
            <Route path="dashboard/achievements" element={<DashboardAchievements />} />
            <Route path="dashboard/teams" element={<DashboardTeams />} />
            <Route path="dashboard/loadouts" element={<DashboardLoadouts />} />
            <Route path="dashboard/loadouts/create" element={<LoadoutEditorPage />} />
            <Route path="dashboard/loadouts/:id/edit" element={<LoadoutEditorPage />} />
            <Route path="dashboard/teams/create" element={<DashboardCreateTeam />} />
            <Route path="dashboard/teams/:teamId" element={<DashboardTeamDetail />} />
            <Route path="dashboard/teams/:teamId/recruitment" element={<DashboardTeamRecruitment />} />
            <Route path="dashboard/teams/:teamId/recruitment/create" element={<DashboardRecruitmentCreate />} />
            <Route path="dashboard/teams/:teamId/recruitment/:postId/edit" element={<DashboardRecruitmentCreate />} />
            <Route path="dashboard/applications" element={<DashboardApplications />} />
            <Route path="dashboard/tournaments" element={<DashboardTournaments />} />
            <Route path="dashboard/leagues" element={<DashboardLeagues />} />
            <Route path="dashboard/matches" element={<DashboardMatches />} />
            <Route path="dashboard/matches/:matchId" element={<DashboardMatchDetail />} />
            <Route path="dashboard/rewards" element={<DashboardRewards />} />
            <Route path="dashboard/refunds" element={<DashboardRefunds />} />
            <Route path="dashboard/refunds/:id" element={<DashboardRefundDetail />} />
            <Route path="dashboard/notifications" element={<DashboardNotifications />} />
            <Route path="dashboard/settings" element={<DashboardSettings />} />
            <Route path="admin/recruitment" element={<AdminRecruitment />} />
            <Route path="admin/loadouts" element={<AdminLoadoutsPage />} />
          </Route>

          {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}

          <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
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
            <Route path="leaguespage/leaguepagerules" element={<LeaguePageRules />} />
            <Route path="leaguespage/leaguepagestandings" element={<LeaguePageStandings />} />
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
