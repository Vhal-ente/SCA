const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// The API's category slugs, with the labels the site shows.
const CATEGORY_LABEL = { tournament: "Tournament", league: "League", partnership: "Partnership", community: "Community", announcement: "Announcement", esports: "Esports" };

export const newsCategories = ["All", "Tournaments", "Leagues", "Partnerships", "Community", "Announcements", "Esports"];

export function matchesCategory(article, category) {
  if (category === "All") return true;
  return [article.category, `${article.category}s`].some(label => label.toLowerCase() === category.toLowerCase());
}

export const newsDate = value => {
  if (!value) return "";
  const date = new Date(value);
  return `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

// toNewsCard turns an article from the API into what the news components show.
export const toNewsCard = article => ({
  ...article,
  category: CATEGORY_LABEL[article.category] || article.category || "News",
  date: newsDate(article.date),
  image: article.image || "/assets/user_header.png",
  content: article.content || [],
});
