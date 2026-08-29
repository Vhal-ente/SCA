const MONTHS=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const TOURNAMENT_STATUS={registration:"Upcoming",upcoming:"Upcoming",live:"Live",ended:"Ended",cancelled:"Ended"};
const LEAGUE_STATUS={registration:"Registration",active:"Active",upcoming:"Upcoming",ended:"Ended",cancelled:"Ended"};

export const dateRange=(startsAt,endsAt)=>{
  if(!startsAt)return "Dates to be announced";
  const start=new Date(startsAt);const end=endsAt?new Date(endsAt):null;
  const label=date=>`${MONTHS[date.getMonth()]} ${String(date.getDate()).padStart(2,"0")}`;
  if(!end||start.toDateString()===end.toDateString())return `${label(start)}, ${start.getFullYear()}`;
  return `${label(start)} – ${label(end)}, ${end.getFullYear()}`;
};

export const toTournamentCard=tournament=>({
  ...tournament,
  image:tournament.bannerUrl,
  date:dateRange(tournament.startsAt,tournament.endsAt),
  participants:tournament.maxParticipants||tournament.participantsCount,
  prize:tournament.prizeText,
  status:TOURNAMENT_STATUS[tournament.status]||"Upcoming",
});

export const toLeagueCard=league=>({
  ...league,
  image:league.bannerUrl,
  status:LEAGUE_STATUS[league.status]||"Upcoming",
});

export const startLabel=value=>{
  if(!value)return "To be announced";
  const date=new Date(value);
  return `${String(date.getDate()).padStart(2,"0")} ${MONTHS[date.getMonth()]} · ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}`;
};

export const toEntry=competition=>({
  id:competition.slug,
  name:competition.name,
  game:competition.game,
  season:competition.season,
  format:competition.format,
  status:competition.status,
  fee:competition.entryFee,
  currency:competition.currency,
  starts:startLabel(competition.startsAt),
  open:competition.status==="registration",
});
