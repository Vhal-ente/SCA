import { Navigate, useLocation } from "react-router-dom";

// Results are shown on the matches page; old links to a match page land there.
export default function TournMatches2() {
  const { search } = useLocation();
  return <Navigate to={`/tournamentspage/matches${search}`} replace/>;
}
