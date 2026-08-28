import { useEffect, useState } from "react";
import { Check, KeyRound, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { api } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

export default function PasswordSettings() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [open,setOpen]=useState(false);
  const [form,setForm]=useState({current:"",next:"",confirm:""});
  const [error,setError]=useState("");
  const [saved,setSaved]=useState(false);
  const [saving,setSaving]=useState(false);

  useEffect(()=>{
    if(!open)return;
    const close=event=>event.key==="Escape"&&setOpen(false);
    document.addEventListener("keydown",close);
    document.body.style.overflow="hidden";
    return()=>{document.removeEventListener("keydown",close);document.body.style.overflow=""};
  },[open]);

  const close=()=>{setOpen(false);setError("");setForm({current:"",next:"",confirm:""})};
  const update=event=>setForm(current=>({...current,[event.target.name]:event.target.value}));
  const submit=async event=>{
    event.preventDefault();
    if(form.next.length<8){setError("Your new password must contain at least 8 characters.");return;}
    if(form.next!==form.confirm){setError("The new passwords do not match.");return;}
    setError("");setSaving(true);
    try{
      await api.post("/me/password",{currentPassword:form.current,newPassword:form.next});
      setSaved(true);close();
      // Changing the password signs every session out, including this one.
      await logout();
      navigate("/login",{state:{passwordChanged:true}});
    }catch(passwordError){setError(passwordError.message)}
    finally{setSaving(false)}
  };

  return <><section className="dashboard-panel settings-password-panel"><div><KeyRound/><div><h2>Password</h2><p>Update the password used to access your SCA account.</p></div></div><button className="button button-secondary button-small" type="button" onClick={()=>{setSaved(false);setOpen(true)}}>Change Password</button>{saved&&<p className="dashboard-success" role="status"><Check/>Password updated successfully.</p>}</section>{open&&<div className="dashboard-modal-backdrop" role="presentation" onMouseDown={event=>event.target===event.currentTarget&&close()}><div className="dashboard-modal password-modal" role="dialog" aria-modal="true" aria-labelledby="password-dialog-title"><button className="dashboard-modal-close" type="button" onClick={close} aria-label="Close change password dialog"><X/></button><div className="dashboard-section-title"><div><h2 id="password-dialog-title">Change Password</h2><p>Enter your current password and choose a secure new password. You will be signed out on every device.</p></div></div><form className="dashboard-form" onSubmit={submit}><div className="password-form-fields"><label>Current password<input type="password" name="current" value={form.current} onChange={update} autoComplete="current-password" autoFocus required/></label><label>New password<input type="password" name="next" value={form.next} onChange={update} autoComplete="new-password" placeholder="At least 8 characters" required/></label><label>Confirm new password<input type="password" name="confirm" value={form.confirm} onChange={update} autoComplete="new-password" required/></label></div>{error&&<p className="dashboard-error" role="alert">{error}</p>}<div className="dashboard-form-actions"><button className="button" type="submit" disabled={saving}>{saving?"Updating…":"Update Password"}</button><button className="button button-secondary" type="button" onClick={close}>Cancel</button></div></form></div></div>}</>;
}
