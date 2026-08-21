export const WHATSAPP_CHANNEL_URL =
  import.meta.env.VITE_WHATSAPP_CHANNEL_URL ||
  "https://whatsapp.com/channel/REPLACE_WITH_CHANNEL_ID";

export const communityLinks = [
  { name: "WhatsApp Community", url: WHATSAPP_CHANNEL_URL, description: "Get important announcements, tournament updates, and community news.", action: "Join WhatsApp", icon: "whatsapp" },
];
