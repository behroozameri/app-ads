const SUPPORT_EMAIL = "bpzone.ca@gmail.com";

const apps = {
  "vocamingo": {
    name: "VocaMingo",
    icon: "/assets/apps/tools/vocamingo/icon-512.png",
    page: "/apps/tools/vocamingo/",
    privacy: "/apps/tools/vocamingo/privacy-policy.html",
    platforms: "Android and iOS",
    accent: "#168aad",
    accentDark: "#0d6886",
    accentSoft: "#e8f7fb",
    faqQuestion: "Vocabulary, review, speaking, or game progress does not look right",
    faqAnswer: "Close and reopen the app first. Include the learning tool or game mode, category or level, and a screenshot when you contact support."
  },
  "lexiarcade": {
    name: "LexiArcade",
    icon: "/assets/apps/tools/lexiarcade/icon-512.png",
    page: "/apps/tools/lexiarcade/",
    privacy: "/apps/tools/wordvoyage/privacy-policy.html",
    platforms: "Android and iOS",
    accent: "#2389ea",
    accentDark: "#1769b7",
    accentSoft: "#e8f5ff",
    faqQuestion: "Progress, hints, or a puzzle result does not look right",
    faqAnswer: "Close and reopen the app first. Include the game mode, level, stars or hints used, and a screenshot when you contact support."
  },
  "thread-circle": {
    name: "Thread Circle",
    icon: "/assets/apps/tools/thread-circle/icon-512.png",
    page: "/apps/tools/thread-circle/",
    privacy: "/apps/tools/thread-circle/privacy-policy.html",
    platforms: "iPhone and iPad",
    accent: "#e94d24",
    accentDark: "#bd3415",
    accentSoft: "#f9e8dd",
    faqQuestion: "Generation, export, or the pin sequence does not look right",
    faqAnswer: "Keep the app open while generation finishes. If an export or pattern still looks wrong, include your selected preset, pin count, thread moves, and a screenshot when you contact support."
  },
  "laser-box-puzzle": {
    name: "Laser Box Puzzle",
    icon: "/assets/apps/games/laser-box-puzzle/icon-512.png",
    page: "/apps/games/laser-box-puzzle/",
    privacy: "/laser-box-puzzle-privacy-policy.html",
    platforms: "Android and iOS",
    accent: "#047f99",
    accentDark: "#065f73",
    accentSoft: "#e7f8fb",
    faqQuestion: "A laser route, mirror move, or level result does not look right",
    faqAnswer: "Restart the level first. Include the level number, move count, mirror inventory, and a screenshot of the board when you contact support."
  },
  "memory-tap-challenge": {
    name: "Memory Tap Challenge",
    icon: "/assets/apps/games/memory-tap-challenge/icon-512.png",
    page: "/apps/games/memory-tap-challenge/",
    privacy: "/memory-tap-privacy-policy.html",
    platforms: "Android and iOS",
    accent: "#7c3aed",
    accentDark: "#5b21b6",
    accentSoft: "#f0eafe",
    faqQuestion: "My progress, score, or daily challenge does not look right",
    faqAnswer: "Close and reopen the app first. Include the game mode, level or daily challenge date, and a screenshot when you contact support."
  },
  "color-memory-glow-sequence": {
    name: "Color Memory: Glow Sequence",
    icon: "/assets/apps/games/color-memory-glow-sequence/icon-512.png",
    page: "/apps/games/color-memory-glow-sequence/",
    privacy: "/color-memory-privacy-policy.html",
    platforms: "Android and iOS",
    accent: "#2563eb",
    accentDark: "#1746a2",
    accentSoft: "#eaf1ff",
    faqQuestion: "The color sequence or sound does not play correctly",
    faqAnswer: "Check the device volume and silent mode, restart the round, and make sure the latest app version is installed. Tell us which game mode was affected."
  },
  "tic-tac-toe": {
    name: "Tic Tac Toe",
    icon: "/assets/apps/games/tic-tac-toe/icon-512.png",
    page: "/apps/games/tic-tac-toe/",
    privacy: "/tic-tac-toe-privacy-policy.html",
    platforms: "Android and iOS",
    accent: "#16a34a",
    accentDark: "#08783e",
    accentSoft: "#e8f8ef",
    faqQuestion: "A game result or AI move seems incorrect",
    faqAnswer: "Send us the board size, game mode, difficulty, and a screenshot of the board so we can review the exact position."
  },
  "block-drop-puzzle": {
    name: "Block Drop Puzzle",
    icon: "/assets/apps/games/block-drop-puzzle/icon-512.png",
    page: "/apps/games/block-drop-puzzle/",
    privacy: "/block-drop-puzzle-privacy-policy.html",
    platforms: "Android and iOS",
    accent: "#0891b2",
    accentDark: "#0e7490",
    accentSoft: "#e5f8fb",
    faqQuestion: "Controls, blocks, or rewarded features are not responding",
    faqAnswer: "Restart the current game and check your internet connection for rewarded features. Include the game mode and a screenshot in your support email."
  },
  "2048": {
    name: "2048",
    icon: "/assets/apps/games/2048/icon-512.png",
    page: "/apps/games/2048/",
    privacy: "/2048-puzzle-privacy-policy.html",
    platforms: "Android and iOS",
    accent: "#d97706",
    accentDark: "#a85308",
    accentSoft: "#fff3df",
    faqQuestion: "My score, board, or undo action was not saved",
    faqAnswer: "Avoid reinstalling the app before contacting us because local game data may be removed. Tell us what action happened immediately before the issue."
  },
  "sticker-land": {
    name: "Sticker Land",
    icon: "/assets/apps/stickers/sticker-land/icon-512.png",
    page: "/apps/stickers/sticker-land/",
    privacy: "/privacy-policy.html",
    platforms: "Android",
    accent: "#0891b2",
    accentDark: "#0e7490",
    accentSoft: "#e5f8fb",
    faqQuestion: "A sticker pack will not add to WhatsApp",
    faqAnswer: "Make sure WhatsApp and Sticker Land are updated. Open the pack in Sticker Land, tap the add button again, and restart WhatsApp if the pack does not appear."
  },
  "nice-emoji": {
    name: "Emoji Stickers for WhatsApp",
    icon: "/assets/apps/stickers/nice-emoji/icon-512.png",
    page: "/apps/stickers/nice-emoji/",
    privacy: "/privacy-policy.html",
    platforms: "Android",
    accent: "#7c3aed",
    accentDark: "#5b21b6",
    accentSoft: "#f0eafe",
    faqQuestion: "A sticker pack will not add to WhatsApp",
    faqAnswer: "Make sure WhatsApp and the sticker app are updated. Open the pack, tap the add button again, and restart WhatsApp if the pack does not appear."
  },
  "cute-girls": {
    name: "Cute Girls Stickers",
    icon: "/assets/apps/stickers/cute-girls/icon-512.png",
    page: "/apps/stickers/cute-girls/",
    privacy: "/privacy-policy.html",
    platforms: "Android",
    accent: "#e11d48",
    accentDark: "#be123c",
    accentSoft: "#ffe9ef",
    faqQuestion: "A sticker pack will not add to WhatsApp",
    faqAnswer: "Make sure WhatsApp and the sticker app are updated. Open the pack, tap the add button again, and restart WhatsApp if the pack does not appear."
  },
  "lovely-kiss": {
    name: "Lovely Kiss for WhatsApp",
    icon: "/assets/apps/stickers/lovely-kiss/icon-512.png",
    page: "/apps/stickers/lovely-kiss/",
    privacy: "/privacy-policy.html",
    platforms: "Android and iOS",
    accent: "#be123c",
    accentDark: "#9f1239",
    accentSoft: "#ffe9ef",
    faqQuestion: "A sticker pack will not add to WhatsApp",
    faqAnswer: "Make sure WhatsApp and Lovely Kiss are updated. Open the pack, tap the add button again, and restart WhatsApp if the pack does not appear."
  },
  "romantic-kiss": {
    name: "Romantic Kiss",
    icon: "/assets/apps/stickers/romantic-kiss/icon-512.png",
    page: "/apps/stickers/romantic-kiss/",
    privacy: "/privacy-policy.html",
    platforms: "Android and iOS",
    accent: "#dc2626",
    accentDark: "#b91c1c",
    accentSoft: "#ffebeb",
    faqQuestion: "A sticker pack will not add to WhatsApp",
    faqAnswer: "Make sure WhatsApp and Romantic Kiss are updated. Open the pack, tap the add button again, and restart WhatsApp if the pack does not appear."
  },
  "romantic-kiss-2": {
    name: "Romantic Kiss Stickers",
    icon: "/assets/apps/stickers/romantic-kiss-2/icon-512.png",
    page: "/apps/stickers/romantic-kiss-2/",
    privacy: "/apps/stickers/privacy-policy-ios-love-note-studio.html",
    platforms: "Android and iOS",
    accent: "#db2777",
    accentDark: "#b51461",
    accentSoft: "#ffe9f4",
    faqQuestion: "A sticker will not copy, share, or unlock",
    faqAnswer: "Check your internet connection for rewarded content, then close and reopen the app. Tell us which sticker pack and action were affected."
  },
  "sweet-kiss": {
    name: "Sweet Kiss",
    icon: "/assets/apps/stickers/sweet-kiss/icon-512.png",
    page: "/apps/stickers/sweet-kiss/",
    privacy: "/privacy-policy.html",
    platforms: "Android and iOS",
    accent: "#f43f5e",
    accentDark: "#be123c",
    accentSoft: "#ffedf1",
    faqQuestion: "A sticker pack will not add to WhatsApp",
    faqAnswer: "Make sure WhatsApp and Sweet Kiss are updated. Open the pack, tap the add button again, and restart WhatsApp if the pack does not appear."
  }
};

const elements = {
  appName: document.getElementById("app-name"),
  panelAppName: document.getElementById("panel-app-name"),
  appIcon: document.getElementById("app-icon"),
  appPlatforms: document.getElementById("app-platforms"),
  supportIntro: document.getElementById("support-intro"),
  appSelector: document.getElementById("app-selector"),
  formApp: document.getElementById("form-app"),
  appPageLink: document.getElementById("app-page-link"),
  navAppLink: document.getElementById("nav-app-link"),
  privacyLink: document.getElementById("privacy-link"),
  navPrivacyLink: document.getElementById("nav-privacy-link"),
  emailSupportLink: document.getElementById("email-support-link"),
  specificQuestion: document.getElementById("app-specific-question"),
  specificAnswer: document.getElementById("app-specific-answer"),
  form: document.getElementById("support-form"),
  formNote: document.getElementById("form-note")
};

function setMeta(name, content) {
  const meta = document.querySelector(`meta[name="${name}"]`);
  if (meta) {
    meta.setAttribute("content", content);
  }
}

function updateSupportPage(appKey, updateUrl = false) {
  const app = apps[appKey];
  const isKnownApp = Boolean(app);
  const selectedKey = isKnownApp ? appKey : "";

  elements.appSelector.value = selectedKey;
  elements.formApp.value = selectedKey;

  if (isKnownApp) {
    document.documentElement.style.setProperty("--accent", app.accent);
    document.documentElement.style.setProperty("--accent-dark", app.accentDark);
    document.documentElement.style.setProperty("--accent-soft", app.accentSoft);

    elements.appName.textContent = app.name;
    elements.panelAppName.textContent = app.name;
    elements.appIcon.src = app.icon;
    elements.appIcon.alt = `${app.name} app icon`;
    elements.appPlatforms.textContent = app.platforms;
    elements.supportIntro.textContent = `Find quick troubleshooting steps or contact us for help with ${app.name}.`;
    elements.appPageLink.href = app.page;
    elements.appPageLink.hidden = false;
    elements.navAppLink.href = app.page;
    elements.navAppLink.hidden = false;
    elements.privacyLink.href = app.privacy;
    elements.navPrivacyLink.href = app.privacy;
    elements.specificQuestion.textContent = app.faqQuestion;
    elements.specificAnswer.textContent = app.faqAnswer;

    const subject = encodeURIComponent(`${app.name} Support`);
    elements.emailSupportLink.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}`;
    document.title = `${app.name} Support | BPZone`;
    setMeta("description", `Get help with ${app.name} on ${app.platforms}. Find troubleshooting steps, privacy information, and contact BPZone support.`);
  } else {
    document.documentElement.style.setProperty("--accent", "#2563eb");
    document.documentElement.style.setProperty("--accent-dark", "#1746a2");
    document.documentElement.style.setProperty("--accent-soft", "#eaf1ff");

    elements.appName.textContent = "BPZone Apps";
    elements.panelAppName.textContent = "All BPZone Apps";
    elements.appIcon.src = "/logo.png";
    elements.appIcon.alt = "BPZone Apps logo";
    elements.appPlatforms.textContent = "Android and iOS";
    elements.supportIntro.textContent = "Find quick troubleshooting steps or contact us for help with any BPZone app.";
    elements.appPageLink.hidden = true;
    elements.navAppLink.hidden = true;
    elements.privacyLink.href = "/site-privacy-policy.html";
    elements.navPrivacyLink.href = "/site-privacy-policy.html";
    elements.specificQuestion.textContent = "I need help with a feature in the app";
    elements.specificAnswer.textContent = "Tell us which app and feature you were using, what you expected to happen, and what happened instead.";
    elements.emailSupportLink.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("BPZone App Support")}`;
    document.title = "App Support | BPZone";
    setMeta("description", "Get help with BPZone apps on Android and iOS. Find troubleshooting steps, privacy information, and contact support.");
  }

  if (updateUrl) {
    const url = new URL(window.location.href);
    if (selectedKey) {
      url.searchParams.set("app", selectedKey);
    } else {
      url.searchParams.delete("app");
    }
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  }
}

elements.appSelector.addEventListener("change", () => {
  updateSupportPage(elements.appSelector.value, true);
});

elements.formApp.addEventListener("change", () => {
  updateSupportPage(elements.formApp.value, true);
});

elements.form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!elements.form.reportValidity()) {
    return;
  }

  const data = new FormData(elements.form);
  const app = apps[data.get("app")];
  const appName = app ? app.name : "BPZone App";
  const platform = data.get("platform");
  const version = data.get("version").trim() || "Not provided";
  const replyEmail = data.get("email").trim() || "Not provided";
  const message = data.get("message").trim();
  const pageUrl = new URL(window.location.href);
  pageUrl.hash = "";

  const subject = `${appName} Support - ${platform}`;
  const body = [
    `App: ${appName}`,
    `Platform: ${platform}`,
    `App version: ${version}`,
    `Reply email: ${replyEmail}`,
    "",
    "Issue:",
    message,
    "",
    `Support page: ${pageUrl.toString()}`
  ].join("\n");

  elements.formNote.textContent = "Opening your email app...";
  window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.setTimeout(() => {
    elements.formNote.textContent = "This button opens your default email app.";
  }, 2500);
});

const requestedApp = new URLSearchParams(window.location.search).get("app") || "";
updateSupportPage(requestedApp);
