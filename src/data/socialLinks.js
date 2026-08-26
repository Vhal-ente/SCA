export const socialPlatforms=["Twitch","YouTube","TikTok","Instagram","X / Twitter","Facebook","Discord","Kick","Website","Other"];
const KEY="sca-social-links";
export const isSafePublicUrl=value=>{try{const url=new URL(value);return url.protocol==="https:"}catch{return false}};
const read=()=>{try{return JSON.parse(localStorage.getItem(KEY))||{}}catch{return {}}};
export const getSocialProfile=id=>read()[id]||{showSocials:true,primaryStream:"",links:[]};
export const saveSocialProfile=(id,value)=>{localStorage.setItem(KEY,JSON.stringify({...read(),[id]:value}));return value};
export const getPublicSocials=id=>{const profile=getSocialProfile(id);return profile.showSocials?{...profile,links:(profile.links||[]).filter(item=>item.public&&isSafePublicUrl(item.url)).sort((a,b)=>(a.order||0)-(b.order||0)),primaryStream:isSafePublicUrl(profile.primaryStream)?profile.primaryStream:""}:{showSocials:false,links:[],primaryStream:""}};

