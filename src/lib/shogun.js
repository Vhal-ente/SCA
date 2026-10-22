import { shogunDivisions, shogunEvents, shogunGallery, shogunPlayers } from "@/data/shogun";

// Console records use "Published" for what the public page shows; the API
// already drops drafts and hidden items.
const listed = items => (Array.isArray(items) ? items : []);

export const divisionSlug = division => division.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || String(division.id);

// shogunPage reads the Shogun document staff manage in the console. Until it
// has been saved, the built-in demo clan shows.
export function shogunPage(doc) {
  // A page switched off arrives as just { live: false }.
  const managed = doc.live === false || Array.isArray(doc.teams) || Array.isArray(doc.events);
  if (!managed) {
    return {
      managed, live: true, applications: true, hero: {}, events: shogunEvents, divisions: shogunDivisions,
      rosters: shogunPlayers, achievements: null, sponsors: null, gallery: shogunGallery, social: {},
    };
  }
  const divisions = listed(doc.teams).map(team => ({
    slug: divisionSlug(team), name: team.title, shortName: "", description: team.detail, image: team.imageUrl || "",
  }));
  const rosters = Object.fromEntries(listed(doc.teams).map(team => [divisionSlug(team),
    listed(team.roster).map(entry => ({ name: entry.name || entry.ign, ign: entry.ign, role: entry.role, image: "", bio: "" }))]));
  return {
    managed,
    live: doc.live !== false,
    applications: doc.applications !== false,
    hero: doc.hero || {},
    events: listed(doc.events).map(event => ({ title: event.title, category: "Shogun event", season: "", date: "", description: event.detail, image: event.imageUrl || "" })),
    divisions,
    rosters,
    achievements: listed(doc.achievements),
    sponsors: listed(doc.sponsors),
    gallery: listed(doc.gallery).map(item => item.imageUrl).filter(Boolean),
    social: doc.social || {},
  };
}
