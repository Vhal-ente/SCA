import { leagueTeams } from "./leagueTeams";
import { shogunPlayers } from "./shogun";

export const playerSlug = (value = "") => String(value ?? "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const portraits = ["/assets/admins/mightyness.svg", "/assets/admins/von.svg", "/assets/admins/manja.svg", "/assets/admins/misha.svg"];
const shogun = Object.values(shogunPlayers).flat().map(player => ({ ...player, slug:playerSlug(player.ign), team:"Shogun Clan", game:"Call of Duty Mobile", country:"Nigeria" }));
const known = [["MightyNess","The Mighty_Ness","F4 Sides","Captain",portraits[0]],["VON.exe","Von","F4 Sides","Player",portraits[1]],["Manja Prime","Manja","F4 Sides","Player",portraits[3]],["MishaGG","Misha","F4 Sides","Player",portraits[2]],["Tora Jin","Tora","No team","Player",portraits[0]]].map(([ign,name,team,role,image]) => ({ign,name,team,role,image,slug:playerSlug(ign),game:"EA FC",country:"Nigeria",bio:`${ign} is an active SCA competitor focused on consistent improvement and high-level competitive play.`}));
const generated = leagueTeams.flatMap(team => team.members.map((ign,index) => ({ign,name:ign,team:team.name,role:ign===team.captain||index===0?"Captain":"Player",image:null,slug:playerSlug(ign),game:team.game,country:team.location,bio:`${ign} represents ${team.name} in SCA competition.`})));
export const playerProfiles = [...shogun,...known,...generated].reduce((profiles,player) => profiles.some(item=>item.slug===player.slug)?profiles:[...profiles,player],[]);
export const getPlayerProfile = (identifier="") => { const displayIdentifier=String(identifier ?? ""); const normalized=playerSlug(displayIdentifier); return playerProfiles.find(player=>player.slug===normalized)||{slug:normalized,ign:displayIdentifier.replace(/[-_]/g," "),name:displayIdentifier.replace(/[-_]/g," "),team:"No team",role:"Player",game:"Not set",country:"Nigeria",image:null,bio:"This player has not added a public bio yet."}; };
