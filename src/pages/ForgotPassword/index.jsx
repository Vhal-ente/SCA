import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { api } from "@/lib/api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const submit = async (event) => {
    event.preventDefault();
    if (!email.trim()) { setError("Enter the email address on your account."); return; }
    setError(""); setSubmitting(true);
    try {
      const data = await api.post("/auth/password/forgot", { email: email.trim() });
      setStatus(data.status);
    } catch (resetError) { setError(resetError.message); }
    finally { setSubmitting(false); }
  };
  return <div className="auth-card"><div className="auth-card-heading"><p className="eyebrow">Account recovery</p><h2>Reset your password</h2><p>Enter your email address and we will send you a reset link.</p></div>{error && <div className="auth-error" role="alert">{error}</div>}{status ? <p className="auth-switch" role="status">{status}</p> : <form onSubmit={submit} noValidate><label className="auth-field" htmlFor="forgot-email"><span>Email address</span><div><Mail/><input id="forgot-email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" required/></div></label><button className="button auth-submit" type="submit" disabled={submitting}>{submitting ? "Sending…" : <>Send reset link <ArrowRight/></>}</button></form>}<p className="auth-switch">Remembered it? <Link to="/login">Log in</Link></p></div>;
}
