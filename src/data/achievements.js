import { playerSlug } from "./playerProfiles";

export const FEATURED_ACHIEVEMENT_LIMIT = 3;

// Award records are read-only player data. Visibility preferences are stored separately.
const awardHistory = {
  mightyness: [
    {id:"ach-coach-first-win",title:"First Tournament Win — Coach",description:"Coached F4 Sides Academy to a verified tournament victory.",category:"Coaching",role:"Assistant Coach",team:"F4 Sides Academy",dateEarned:"June 28, 2026",competition:"SCA Academy Cup",rarity:"Epic",awardSource:"Verified competition staff roster",awardedBy:"SCA Competition Operations"},
    {id:"ach-team-captain",title:"Team Captain",description:"Leads F4 Sides in SCA competition.",category:"Team",dateEarned:"August 4, 2026",competition:"Path of Legends · Season 3",rarity:"Rare",awardSource:"Verified team roster",awardedBy:"SCA Competition Operations"},
    {id:"ach-first-tournament",title:"First Tournament",description:"Completed a first verified SCA tournament appearance.",category:"Milestone",dateEarned:"July 19, 2026",competition:"SCA EA FC Open",rarity:"Common",awardSource:"Verified tournament result",awardedBy:"SCA System"},
    {id:"ach-fair-play",title:"Fair Play Award",description:"Recognized for exemplary conduct during competition.",category:"Fair Play",dateEarned:"July 20, 2026",competition:"SCA EA FC Open",rarity:"Epic",awardSource:"Organizer award",awardedBy:"SCA Tournament Admin"},
  ],
  "giyu-san": [
    {id:"ach-event-champion",title:"Event Champion",description:"Won a verified SCA Call of Duty Mobile event.",category:"Tournament",dateEarned:"August 12, 2026",competition:"Yami no Takai · Season 1",rarity:"Legendary",awardSource:"Verified final result",awardedBy:"SCA Competition Operations"},
    {id:"ach-mvp",title:"MVP",description:"Named the event's most valuable player.",category:"Performance",dateEarned:"August 12, 2026",competition:"Yami no Takai · Season 1",rarity:"Epic",awardSource:"Organizer award",awardedBy:"SCA Tournament Admin"},
  ],
};

const keyFor = identifier => `sca-achievement-preferences:${playerSlug(identifier)}`;
export const getAchievementAwards = identifier => awardHistory[playerSlug(identifier)] || [];
export const getAchievementPreferences = identifier => {
  const awards=getAchievementAwards(identifier);
  const defaults={globalVisible:true,items:Object.fromEntries(awards.map((item,index)=>[item.id,{visible:true,featured:index<Math.min(2,FEATURED_ACHIEVEMENT_LIMIT)}]))};
  try{return {...defaults,...JSON.parse(localStorage.getItem(keyFor(identifier))||"{}"),items:{...defaults.items,...JSON.parse(localStorage.getItem(keyFor(identifier))||"{}").items}}}catch{return defaults}
};
export const saveAchievementPreferences = (identifier,preferences) => localStorage.setItem(keyFor(identifier),JSON.stringify(preferences));
export const getVisibleAchievements = identifier => {
  const preferences=getAchievementPreferences(identifier);
  if(!preferences.globalVisible)return [];
  return getAchievementAwards(identifier).filter(item=>preferences.items[item.id]?.visible!==false).sort((a,b)=>Number(preferences.items[b.id]?.featured)-Number(preferences.items[a.id]?.featured));
};
