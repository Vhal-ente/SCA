import { Save } from "lucide-react";
import { useState } from "react";

const socialPlatforms = [
  ["Instagram URL","instagram","https://instagram.com/"],
  ["Facebook URL","facebook","https://facebook.com/"],
  ["TikTok URL","tiktok","https://tiktok.com/@"],
  ["YouTube URL","youtube","https://youtube.com/@"],
  ["Twitch URL","twitch","https://twitch.tv/"],
  ["Kick URL","kick","https://kick.com/"],
];

export default function ProfileSocialLinks() {
  const [saved,setSaved]=useState(false);
  return <section className="dashboard-panel dashboard-form profile-social-panel"><div className="dashboard-section-title"><div><h2>Social &amp; Streaming Links</h2><p>Add the public channels you want displayed on your player profile.</p></div></div><form onSubmit={(event)=>{event.preventDefault();setSaved(true)}}><div className="dashboard-form-grid">{socialPlatforms.map(([label,name,placeholder])=><label key={name}>{label}<input type="url" name={name} placeholder={placeholder} inputMode="url"/></label>)}</div><button className="button button-small" type="submit"><Save/>Save Social Links</button>{saved&&<p className="dashboard-success" role="status">Social links saved locally for this session.</p>}</form></section>;
}
