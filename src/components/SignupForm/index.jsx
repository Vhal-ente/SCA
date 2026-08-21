import { useState } from "react";
import { ArrowRight, CalendarDays, Eye, EyeOff, LockKeyhole, Mail, UserRound } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function SignupForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ ign: "", email: "", password: "", dob: "" });
  const [accepted, setAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const update = (event) => setForm(current => ({ ...current, [event.target.name]: event.target.value }));
  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.values(form).some(value => !value.trim())) { setError("Complete every field to create your account."); return; }
    if (form.password.length < 8) { setError("Your password must contain at least 8 characters."); return; }
    if (!accepted) { setError("Accept the Terms of Service and Privacy Policy to continue."); return; }
    setError("");
    navigate("/login", { state: { accountCreated: true } });
  };
  return <div className="auth-card auth-card-signup"><div className="auth-card-heading"><p className="eyebrow">Join the arena</p><h2>Create your account</h2><p>Set up your player profile and get ready to compete.</p></div>{error && <div className="auth-error" role="alert">{error}</div>}<form onSubmit={handleSubmit} noValidate><div className="auth-field-grid"><label className="auth-field" htmlFor="signup-ign"><span>IGN / Gamer Tag</span><div><UserRound/><input id="signup-ign" name="ign" value={form.ign} onChange={update} autoComplete="nickname" placeholder="Your gamer tag" required/></div></label><label className="auth-field" htmlFor="signup-email"><span>Email address</span><div><Mail/><input id="signup-email" name="email" type="email" value={form.email} onChange={update} autoComplete="email" placeholder="you@example.com" required/></div></label></div><label className="auth-field" htmlFor="signup-password"><span>Password</span><div><LockKeyhole/><input id="signup-password" name="password" type={showPassword ? "text" : "password"} value={form.password} onChange={update} autoComplete="new-password" placeholder="At least 8 characters" required/><button type="button" onClick={() => setShowPassword(value => !value)} aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff/> : <Eye/>}</button></div></label><label className="auth-field" htmlFor="signup-dob"><span>Date of birth</span><div><CalendarDays/><input id="signup-dob" name="dob" type="date" value={form.dob} onChange={update} autoComplete="bday" required/></div></label><label className="auth-consent"><input type="checkbox" checked={accepted} onChange={(event) => setAccepted(event.target.checked)}/><span>I agree to the <Link to="/terms-of-service">Terms of Service</Link> and <Link to="/privacy-policy">Privacy Policy</Link>.</span></label><button className="button auth-submit" type="submit">Create account <ArrowRight/></button></form><p className="auth-switch">Already have an account? <Link to="/login">Log in</Link></p></div>;
}
