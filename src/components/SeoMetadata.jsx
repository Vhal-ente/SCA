import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_NAME = "Short Circuit Arena";
const BASE_URL = "https://sca.gg";
const routes = [
  ["/", "Esports Tournaments & Leagues", "Compete in online esports tournaments and leagues with Short Circuit Arena. Find teams, follow matches, and join the SCA gaming community."],
  ["/news", "Esports News & Updates", "Read tournament announcements, league updates, and stories from the Short Circuit Arena community."],
  ["/shogun", "Shogun Esports Team", "Meet Shogun, the official SCA sponsored esports team."],
  ["/coaches", "Esports Coaches", "Discover competitive gaming coaches and find support to improve your play."],
  ["/loadouts", "Community Loadouts", "Browse community created loadouts, builds, and strategies for competitive games."],
  ["/recruitment", "Find a Team", "Find teams recruiting players for upcoming tournaments, leagues, and competitive play."],
  ["/careers", "Careers", "Explore career opportunities with Short Circuit Arena."],
  ["/community", "Gaming Community", "Connect with the Short Circuit Arena competitive gaming community."],
  ["/sponsor-program", "Partner with SCA", "Partner with Short Circuit Arena to reach competitive gamers and esports communities."],
  ["/press-kit", "Press Kit", "SCA brand resources, company information, and media materials."],
  ["/terms-of-service", "Terms of Service", "Read the Short Circuit Arena terms of service."],
  ["/privacy-policy", "Privacy Policy", "Learn how Short Circuit Arena handles personal information."],
  ["/refund-policy", "Refund Policy", "Review the Short Circuit Arena refund policy."],
  ["/fair-play-policy", "Fair Play Policy", "Read the SCA rules for fair, safe, and competitive play."],
];
const privatePath = /^(\/(dashboard|admin)(\/|$)|\/(login|signup|forgot-password|reset-password)(\/|$)|\/tournamentspage\/join$|\/leaguespage\/join$)/;

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default function SeoMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = routes.find(([path]) => path === pathname);
    const title = route ? `${route[1]} | ${SITE_NAME}` : `${SITE_NAME} | Esports`;
    const description = route?.[2] || "Explore esports tournaments, leagues, teams, and competitive gaming with Short Circuit Arena.";
    const canonicalUrl = `${BASE_URL}${pathname}`;
    const noIndex = privatePath.test(pathname);

    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [pathname]);

  return null;
}
