import { configuredGames } from "@/data/recruitment";

const ACCOUNTS_KEY = "sca-player-game-accounts-v1";
const PRIVACY_KEY = "sca-player-game-privacy-v1";

const read = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
};

const normalize = (value = "") => String(value).trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const aliases = (identifiers) => [...new Set((Array.isArray(identifiers) ? identifiers : [identifiers]).filter(Boolean).map(normalize))];

export const playerGamePlatforms = ["Mobile", "PC", "PlayStation", "Xbox", "Nintendo"];
export const playerGames = configuredGames;

export function getPlayerGameAccounts(identifier) {
  const store = read(ACCOUNTS_KEY, {});
  return store[normalize(identifier)] || [];
}

export function savePlayerGameAccounts(identifiers, accounts) {
  const store = read(ACCOUNTS_KEY, {});
  const clean = accounts.map((account, index) => ({
    id: account.id || `game-${Date.now()}-${index}`,
    game: account.game,
    ign: account.ign.trim(),
    playerId: account.playerId?.trim() || "",
    platform: account.platform || "",
    isPrimary: Boolean(account.isPrimary),
    isIgnPublic: Boolean(account.isIgnPublic),
  }));
  aliases(identifiers).forEach((key) => { store[key] = clean; });
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(store));
  return clean;
}

export function getGamesPrivacy(identifier) {
  const store = read(PRIVACY_KEY, {});
  return store[normalize(identifier)] ?? true;
}

export function saveGamesPrivacy(identifiers, visible) {
  const store = read(PRIVACY_KEY, {});
  aliases(identifiers).forEach((key) => { store[key] = Boolean(visible); });
  localStorage.setItem(PRIVACY_KEY, JSON.stringify(store));
}

export function getPublicPlayerGames(identifier, fallbackGame = "") {
  if (!getGamesPrivacy(identifier)) return [];
  const accounts = getPlayerGameAccounts(identifier);
  if (!accounts.length && fallbackGame && fallbackGame !== "Not set") {
    return [{ id: `fallback-${normalize(fallbackGame)}`, game: fallbackGame, ign: "", platform: "", isPrimary: true }];
  }
  return accounts.map(({ id, game, ign, platform, isPrimary, isIgnPublic }) => ({
    id, game, platform, isPrimary, ign: isIgnPublic ? ign : "",
  }));
}
