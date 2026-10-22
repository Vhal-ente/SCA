import { useSearchParams } from "react-router-dom";
import { useApi } from "@/hooks/useApi";
import { useAuth } from "@/context/AuthContext";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const KIND = { tournament: { param: "tournament", api: "tournaments" }, league: { param: "league", api: "leagues" } };

// useCompetitionPage loads the tournament or league a detail page is for,
// named by ?tournament= or ?league= in the address.
export function useCompetitionPage(kind) {
  const { param, api } = KIND[kind];
  const [searchParams] = useSearchParams();
  const slug = searchParams.get(param) || "";
  const { data, loading, error } = useApi(slug ? `/${api}/${slug}` : null);
  const competition = data?.[kind] || null;
  return { slug, competition, loading: Boolean(slug) && loading, missing: !slug || Boolean(error) || (!loading && !competition), base: `/${api}/${slug}` };
}

// useMyEntry is the signed-in player's entry in this competition, if any.
export function useMyEntry(kind, slug) {
  const { user } = useAuth();
  const { data } = useApi(user ? "/me/entries" : null);
  return (data?.entries || []).find(entry => entry.type === kind && entry.slug === slug && !["withdrawn", "disqualified"].includes(entry.status)) || null;
}

export const withCompetition = (path, kind, slug) => (slug ? `${path}?${KIND[kind].param}=${encodeURIComponent(slug)}` : path);

export const shortDate = value => {
  if (!value) return "";
  const date = new Date(value);
  return `${String(date.getDate()).padStart(2, "0")} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
};

export const clockTime = value => {
  if (!value) return "";
  const date = new Date(value);
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
};

const naira = new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 });
export const money = (amount, currency = "NGN") => (currency === "NGN" ? naira.format(amount) : `${currency} ${Number(amount).toLocaleString()}`);

// prizeRows splits a prize pool written as a number ("500000", "₦500,000")
// by the competition's prize allocation. Text prizes ("3,280 CP") are shown as written.
export function prizeRows(competition) {
  const allocations = competition.prizeAllocations || [];
  const cleaned = (competition.prizeText || "").replace(/ngn|naira|₦|,|\s/gi, "");
  const numeric = /^\d+(\.\d+)?$/.test(cleaned);
  const pool = Number(cleaned);
  return allocations.map((share, index) => ({
    place: index + 1,
    value: numeric ? money(Math.round((pool * share) / 100), competition.currency) : `${share}% of the prize pool`,
  }));
}

export const STATUS_LABEL = {
  tournament: { registration: "Registration open", upcoming: "Upcoming", live: "Live", ended: "Ended", cancelled: "Cancelled", draft: "Upcoming" },
  league: { registration: "Registration open", upcoming: "Upcoming", active: "Active", ended: "Ended", cancelled: "Cancelled", draft: "Upcoming" },
};

export const STRUCTURE_LABEL = { single_elimination: "Single elimination", round_robin: "Round robin" };
