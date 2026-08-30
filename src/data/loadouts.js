import { configuredGames } from "@/data/recruitment";

export { configuredGames };

export const loadoutTypes=["Gunsmith","Weapon Build","Character Build","Equipment Setup","Tactical Setup","Team Strategy","Formation","Vehicle Setup","Skill Build","General Strategy","Other"];
export const loadoutStatuses=["Published","Draft","Hidden","Removed","Archived"];
export const reportReasons=["Spam","Misleading Information","Offensive Content","Stolen Content","Scam","Inappropriate Image","Other"];

const LOADOUTS_KEY="sca-loadouts",VOTES_KEY="sca-loadout-votes",REPORTS_KEY="sca-loadout-reports";
const seed=[
  {id:"loadout-ak117-fast-ads",slug:"fast-ads-ak117-build",authorId:"player-mightyness",author:"MightyNess",title:"Fast ADS AK117 Build",game:"Call of Duty Mobile",loadoutType:"Gunsmith",description:"A mobile, fast-aiming setup for aggressive ranked play. Use cover between fights and avoid extended long-range trades.",loadoutCodeOrLink:"CODM-AK117-4F82-X12",tags:["Aggressive","Ranked","Close Range"],images:["/assets/warzone_image.png"],status:"Published",featured:true,createdAt:"2026-08-20T10:00:00.000Z",updatedAt:"2026-08-20T10:00:00.000Z"},
  {id:"loadout-eafc-high-press",slug:"4-3-3-high-press-formation",authorId:"player-von",author:"VON.exe",title:"4-3-3 High Press Formation",game:"EA FC",loadoutType:"Formation",description:"A compact high press that creates overloads out wide while keeping one midfielder available to stop counter attacks.",loadoutCodeOrLink:"",tags:["Aggressive","Tournament"],images:["/assets/tournament_images/tournament_list_img.png"],status:"Published",featured:true,createdAt:"2026-08-18T12:00:00.000Z",updatedAt:"2026-08-18T12:00:00.000Z"},
  {id:"loadout-pubg-rotation",slug:"erangel-safe-rotation-plan",authorId:"player-misha",author:"MishaGG",title:"Erangel Safe Rotation Plan",game:"PUBG Mobile",loadoutType:"Team Strategy",description:"A repeatable edge rotation plan for squads that prioritizes information, vehicle preservation, and late-game utility.",loadoutCodeOrLink:"",tags:["Defensive","Advanced","Tournament"],images:["/assets/PUBG_Global_Championship.png"],status:"Published",featured:false,createdAt:"2026-08-14T08:30:00.000Z",updatedAt:"2026-08-14T08:30:00.000Z"}
];

const read=(key,fallback=[])=>{try{const value=JSON.parse(localStorage.getItem(key)||"null");return Array.isArray(value)?value:fallback}catch{return fallback}};
const write=(key,value)=>{localStorage.setItem(key,JSON.stringify(value));window.dispatchEvent(new CustomEvent("sca-storage",{detail:{key}}));return value};
const slugify=value=>String(value||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");
const legacyImages={"/assets/games/call_of_duty.png":"/assets/warzone_image.png","/assets/path_of_legends.png":"/assets/tournament_images/tournament_list_img.png","/assets/games/PUBG_new_state.png":"/assets/PUBG_Global_Championship.png"};
const migrateImages=items=>items.map(item=>({...item,images:(item.images||[]).map(image=>legacyImages[image]||image)}));
export const getLoadouts=()=>{const stored=read(LOADOUTS_KEY);if(!stored.length)write(LOADOUTS_KEY,seed);const items=stored.length?stored:seed;const migrated=migrateImages(items);if(JSON.stringify(migrated)!==JSON.stringify(items))write(LOADOUTS_KEY,migrated);return migrated};
export const saveLoadouts=items=>write(LOADOUTS_KEY,items);
export const getLoadout=value=>getLoadouts().find(item=>item.id===value||item.slug===value);
export const getPublicLoadouts=()=>getLoadouts().filter(item=>item.status==="Published");
export const getAuthorLoadouts=author=>getLoadouts().filter(item=>[item.authorId,item.author,slugify(item.author)].map(String).includes(String(author)));
export const saveLoadout=input=>{const all=getLoadouts();const now=new Date().toISOString();const existing=input.id&&all.find(item=>item.id===input.id);const baseSlug=slugify(input.title)||`loadout-${Date.now()}`;const item={...existing,...input,id:existing?.id||`loadout-${Date.now()}`,slug:existing?.slug||`${baseSlug}-${String(Date.now()).slice(-5)}`,createdAt:existing?.createdAt||now,updatedAt:now};saveLoadouts(existing?all.map(entry=>entry.id===item.id?item:entry):[item,...all]);return item};
export const deleteLoadout=id=>saveLoadouts(getLoadouts().filter(item=>item.id!==id));
export const getVotes=()=>read(VOTES_KEY);
export const getVoteSummary=id=>{const votes=getVotes().filter(item=>item.loadoutId===id);return{up:votes.filter(item=>item.voteType==="UP").length,down:votes.filter(item=>item.voteType==="DOWN").length,score:votes.reduce((total,item)=>total+(item.voteType==="UP"?1:-1),0)}};
export const getUserVote=(loadoutId,userId)=>getVotes().find(item=>item.loadoutId===loadoutId&&String(item.userId)===String(userId))?.voteType||null;
export const toggleVote=(loadout,userId,voteType)=>{if(!userId)throw new Error("Sign in to vote.");if(String(loadout.authorId)===String(userId))throw new Error("Authors cannot vote on their own loadouts.");const votes=getVotes();const current=votes.find(item=>item.loadoutId===loadout.id&&String(item.userId)===String(userId));const remaining=votes.filter(item=>item!==current);if(current?.voteType!==voteType)remaining.push({id:`vote-${Date.now()}`,loadoutId:loadout.id,userId,voteType});write(VOTES_KEY,remaining);return getVoteSummary(loadout.id)};
export const addLoadoutReport=report=>write(REPORTS_KEY,[{...report,id:`loadout-report-${Date.now()}`,status:"Open",createdAt:new Date().toISOString()},...read(REPORTS_KEY)]);
export const getLoadoutReports=()=>read(REPORTS_KEY);
export const imageFilesToDataUrls=files=>Promise.all([...files].slice(0,3).map(file=>new Promise((resolve,reject)=>{if(!["image/jpeg","image/png","image/webp"].includes(file.type))return reject(new Error("Only JPG, PNG, and WebP images are supported."));if(file.size>4*1024*1024)return reject(new Error("Each image must be 4 MB or smaller."));const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=()=>reject(new Error("An image could not be read."));reader.readAsDataURL(file)})));
