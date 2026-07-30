// Applies config.js's SITE_CONFIG to every page: titles, meta tags, the
// PWA manifest, and (on the homepage) the hero, WhatsApp groups and footer.
(function () {
  const config = window.SITE_CONFIG;
  if (!config) return;

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[char]);
  }

  document.querySelectorAll('meta[name="apple-mobile-web-app-title"]').forEach((meta) => {
    meta.content = config.name;
  });

  if (config.themeColor) {
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.content = config.themeColor;
    });
  }

  document.querySelectorAll(".hero-icon img").forEach((img) => {
    img.alt = config.name;
  });

  const titleParts = document.title.split(" · ");
  document.title = titleParts.length > 1 ? `${titleParts[0]} · ${config.name}` : config.name;

  patchManifest();
  applyHomepage();

  function patchManifest() {
    const link = document.querySelector('link[rel="manifest"]');
    if (!link) return;

    fetch(link.getAttribute("href"))
      .then((response) => response.json())
      .then((manifest) => {
        const merged = {
          ...manifest,
          name: config.name,
          short_name: config.name,
          description: config.description || manifest.description,
          theme_color: config.themeColor || manifest.theme_color,
          background_color: config.themeColor || manifest.background_color,
        };
        const blob = new Blob([JSON.stringify(merged)], { type: "application/manifest+json" });
        link.setAttribute("href", URL.createObjectURL(blob));
      })
      .catch(() => {});
  }

  function applyHomepage() {
    const heroName = document.getElementById("site-name");
    const heroTagline = document.getElementById("site-tagline");
    if (!heroName && !heroTagline) return; // not the homepage

    if (heroName) heroName.textContent = config.name;
    if (heroTagline) heroTagline.textContent = config.tagline;

    const description = document.querySelector('meta[name="description"]');
    if (description && config.description) description.content = config.description;

    const footerLink = document.getElementById("footer-link");
    if (footerLink && config.githubUrl) {
      footerLink.href = config.githubUrl;
      footerLink.textContent = `${config.name} on GitHub`;
    }

    const groupsSection = document.getElementById("whatsapp-groups-section");
    const groupsList = document.getElementById("whatsapp-groups-list");
    if (!groupsList) return;

    const groups = Array.isArray(config.whatsappGroups) ? config.whatsappGroups : [];
    if (!groups.length) {
      if (groupsSection) groupsSection.hidden = true;
      return;
    }

    groupsList.innerHTML = groups
      .map(
        (group) => `
          <a class="card" href="${escapeHtml(group.url)}" target="_blank" rel="noopener">
            <span class="card-icon">${escapeHtml(group.icon || "💬")}</span>
            <span class="card-body">
              <strong>${escapeHtml(group.label || "")}</strong>
              <span>${escapeHtml(group.sublabel || "")}</span>
            </span>
            <span class="card-arrow">›</span>
          </a>
        `
      )
      .join("");
  }
})();
