import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { getAchievementPreferences, saveAchievementPreferences } from "@/data/achievements";

export default function AchievementPrivacySetting(){const{user}=useAuth();const identifier=user?.ign||user?.name||user?.email||"player";const[enabled,setEnabled]=useState(()=>getAchievementPreferences(identifier).globalVisible);const change=event=>{const globalVisible=event.target.checked;setEnabled(globalVisible);saveAchievementPreferences(identifier,{...getAchievementPreferences(identifier),globalVisible})};return <label><span><strong>Show Achievements &amp; Badges</strong><small>Allow earned achievements and badges to appear on your public SCA profile.</small></span><input type="checkbox" checked={enabled} onChange={change}/></label>}
