// Helpers for pages that show console-managed company content.

// pageVisible reports whether staff left a company page published. Until the
// console has saved the list, every page shows.
export const pageVisible = (content, id) =>
  !Array.isArray(content.companyPages) || content.companyPages.some(page => page.id === id);

// lines splits a console text area into its non-empty lines.
export const lines = value => (value || "").split("\n").map(line => line.replace(/^[-*•]\s*/, "").trim()).filter(Boolean);

// activeItems keeps a list's switched-on entries in the order staff set.
export const activeItems = items => (Array.isArray(items) ? items : [])
  .filter(item => item.active !== false).sort((a, b) => (a.order || 0) - (b.order || 0));

export const isEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((value || "").trim());
