// Open Community — site configuration.
//
// Edit the values below to rebrand this template for your own community.
// Every page loads this file (via site.js), so a change here updates the
// page titles, home screen name, PWA manifest, and the homepage — no need
// to hunt through every .html file.
window.SITE_CONFIG = {
  name: "Open Community",
  tagline: "Groups & local info for your community",
  description: "Groups, announcements and local business listings for your community.",
  themeColor: "#0f3a5c",
  githubUrl: "https://github.com/andretiltman/OpenCommunity",

  // Shown on the homepage. Replace with your own group invites (WhatsApp,
  // Telegram, etc.), or set to an empty array to hide the section.
  whatsappGroups: [
    {
      icon: "📢",
      label: "Announcements",
      sublabel: "Main group · important updates",
      url: "https://chat.whatsapp.com/REPLACE_WITH_YOUR_GROUP_LINK",
    },
    {
      icon: "💬",
      label: "Chat",
      sublabel: "General community chat",
      url: "https://chat.whatsapp.com/REPLACE_WITH_YOUR_GROUP_LINK",
    },
    {
      icon: "🛒",
      label: "Buy & Sell",
      sublabel: "Trade with your neighbours",
      url: "https://chat.whatsapp.com/REPLACE_WITH_YOUR_GROUP_LINK",
    },
  ],
};
