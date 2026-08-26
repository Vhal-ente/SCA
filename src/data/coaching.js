import { configuredGames } from "./recruitment";
import { playerSlug } from "./playerProfiles";

export { configuredGames };
export const coachingRoles=["Head Coach","Assistant Coach","Analyst","Strategic Coach","Performance Coach","Team Manager / Coach"];
export const coachingStatuses=["Available","Currently Coaching","Not Available"];
const PROFILE_KEY="sca-coaching-profiles";
const INVITE_KEY="sca-coach-invitations";

const seed=[{id:"coach-mightyness",slug:"mightyness",userId:"demo-player",ign:"MightyNess",displayName:"Coach Mighty",avatar:"/assets/admins/mightyness.svg",enabled:true,status:"Available",games:["EA FC","Call of Duty Mobile"],roles:["Head Coach","Strategic Coach"],experience:"4 years",bio:"Competitive coach focused on preparation, calm communication, and repeatable match systems.",currentTeam:"",previousTeams:["F4 Sides Academy"],availability:"Evenings and weekends",country:"Nigeria",languages:["English"],specialties:["Match preparation","VOD review","Team communication"],publicContact:true,history:[{team:"F4 Sides Academy",game:"EA FC",role:"Assistant Coach",joined:"2024-02-10",left:"2025-11-03",competitions:3}]}];
const read=(key,fallback=[])=>{try{return JSON.parse(localStorage.getItem(key))||fallback}catch{return fallback}};
const write=(key,value)=>localStorage.setItem(key,JSON.stringify(value));
export const getCoachingProfiles=()=>{const stored=read(PROFILE_KEY,[]);return [...seed,...stored].reduce((all,item)=>all.some(existing=>existing.slug===item.slug)?all:[...all,item],[])};
export const getCoachingProfile=id=>{const item=getCoachingProfiles().find(profile=>profile.slug===playerSlug(id)||profile.userId===id);return item?{enabled:false,status:"Available",games:[],roles:[],displayName:"",experience:"",bio:"",currentTeam:"",previousTeams:[],availability:"",country:"",languages:[],specialties:[],publicContact:false,history:[],...item,games:Array.isArray(item.games)?item.games:[],roles:Array.isArray(item.roles)?item.roles:[],previousTeams:Array.isArray(item.previousTeams)?item.previousTeams:[],languages:Array.isArray(item.languages)?item.languages:[],specialties:Array.isArray(item.specialties)?item.specialties:[],history:Array.isArray(item.history)?item.history:[]}:undefined};
export const saveCoachingProfile=profile=>{const slug=playerSlug(profile.slug||profile.ign||profile.displayName);const stored=read(PROFILE_KEY,[]);const next={...profile,slug,id:profile.id||`coach-${slug}`};write(PROFILE_KEY,[next,...stored.filter(item=>item.slug!==slug)]);return next};
export const getCoachInvitations=userId=>read(INVITE_KEY,[]).filter(item=>item.coachId===userId||item.coachSlug===playerSlug(userId));
export const sendCoachInvitation=invitation=>{const next={id:`coach-invite-${Date.now()}`,status:"Pending",invitationDate:new Date().toISOString(),...invitation};write(INVITE_KEY,[next,...read(INVITE_KEY,[])]);return next};
export const updateCoachInvitation=(id,status)=>{const all=read(INVITE_KEY,[]).map(item=>item.id===id?{...item,status,respondedAt:new Date().toISOString()}:item);write(INVITE_KEY,all);return all.find(item=>item.id===id)};
