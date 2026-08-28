import { useState } from "react";
import { ArrowRight, Eye, EyeOff, LockKeyhole, UserRound } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [ign, setIgn] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!ign.trim() || !password.trim()) { setError("Enter your IGN / Gamer Tag and password."); return; }
    setError(""); setSubmitting(true);
    try {
      await login(ign.trim(), password);
      const destination=location.state?.from;navigate(destination?`${destination.pathname}${destination.search||""}${destination.hash||""}`:"/dashboard", { replace: true });
    } catch (loginError) { setError(loginError.message); }
    finally { setSubmitting(false); }
  };
  return <div className="auth-card"><div className="auth-card-heading"><p className="eyebrow">Welcome back</p><h2>Log in to SCA</h2><p>Access your competitions, teams, and match updates.</p></div>{location.state?.accountCreated && !error && <div className="auth-error" role="status">Your account is ready. Log in to continue.</div>}{location.state?.passwordChanged && !error && <div className="auth-error" role="status">Your password was updated. Log in with your new password.</div>}{error && <div className="auth-error" role="alert">{error}</div>}<form onSubmit={handleSubmit} noValidate><label className="auth-field" htmlFor="login-ign"><span>IGN / Gamer Tag</span><div><UserRound/><input id="login-ign" type="text" autoComplete="username" value={ign} onChange={(event) => setIgn(event.target.value)} placeholder="Enter your gamer tag" required/></div></label><label className="auth-field" htmlFor="login-password"><span>Password</span><div><LockKeyhole/><input id="login-password" type={showPassword ? "text" : "password"} autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password" required/><button type="button" onClick={() => setShowPassword(value => !value)} aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff/> : <Eye/>}</button></div></label><div className="auth-form-options"><label><input type="checkbox"/> Remember me</label><Link to="/forgot-password">Forgot password?</Link></div><button className="button auth-submit" type="submit" disabled={submitting}>{submitting ? "Logging in…" : <>Log in <ArrowRight/></>}</button></form><p className="auth-switch">New to SCA? <Link to="/signup">Create an account</Link></p></div>;
}
