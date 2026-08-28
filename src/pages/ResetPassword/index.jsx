import { useState } from "react";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { api } from "@/lib/api";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token") || "";
  const [form, setForm] = useState({ password: "", confirm: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const update = (event) => setForm(current => ({ ...current, [event.target.name]: event.target.value }));
  const submit = async (event) => {
    event.preventDefault();
    if (form.password.length < 8) { setError("Your new password must contain at least 8 characters."); return; }
    if (form.password !== form.confirm) { setError("The new passwords do not match."); return; }
    setError(""); setSubmitting(true);
    try {
      await api.post("/auth/password/reset", { token, password: form.password });
      navigate("/login", { replace: true, state: { passwordChanged: true } });
    } catch (resetError) { setError(resetError.message); }
    finally { setSubmitting(false); }
  };
  if (!token) return <div className="auth-card"><div className="auth-card-heading"><p className="eyebrow">Account recovery</p><h2>Reset link needed</h2><p>Open the reset link from your email to choose a new password.</p></div><Link className="button auth-submit" to="/forgot-password">Request a new link</Link></div>;
  return <div className="auth-card"><div className="auth-card-heading"><p className="eyebrow">Account recovery</p><h2>Choose a new password</h2><p>Your new password signs you in everywhere else out.</p></div>{error && <div className="auth-error" role="alert">{error}</div>}<form onSubmit={submit} noValidate><label className="auth-field" htmlFor="reset-password"><span>New password</span><div><LockKeyhole/><input id="reset-password" name="password" type="password" autoComplete="new-password" value={form.password} onChange={update} placeholder="At least 8 characters" required/></div></label><label className="auth-field" htmlFor="reset-confirm"><span>Confirm new password</span><div><LockKeyhole/><input id="reset-confirm" name="confirm" type="password" autoComplete="new-password" value={form.confirm} onChange={update} required/></div></label><button className="button auth-submit" type="submit" disabled={submitting}>{submitting ? "Updating…" : <>Update password <ArrowRight/></>}</button></form><p className="auth-switch">Back to <Link to="/login">log in</Link></p></div>;
}
