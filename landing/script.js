import { downloads } from "./config.js";

const getPlatform = () => {
  const source = `${navigator.userAgent} ${navigator.platform}`.toLowerCase();
  if (source.includes("win")) return "windows";
  if (source.includes("mac")) return "mac";
  if (source.includes("linux") || source.includes("x11")) return "linux";
  return "source";
};

const labels = {
  mac: "macOS",
  windows: "Windows",
  linux: "Linux",
  source: "tu compu",
};
const platform = getPlatform();

document.querySelectorAll("[data-platform-name]").forEach((node) => {
  node.textContent = labels[platform];
});

document.querySelectorAll("[data-download]").forEach((link) => {
  const target = link.dataset.download;
  const url = downloads[target];
  if (!url) {
    link.removeAttribute("href");
    link.removeAttribute("target");
    link.setAttribute("aria-disabled", "true");
    link.classList.add("platform-unavailable");
    return;
  }
  link.href = url;
  link.target = "_blank";
  link.rel = "noreferrer";
  if (target === platform) link.classList.add("recommended-platform");
});

document.querySelectorAll("[data-download-primary]").forEach((link) => {
  link.href = downloads[platform] || downloads.mac || downloads.source || "#";
  link.target = "_blank";
  link.rel = "noreferrer";
});

document
  .querySelectorAll(".primary-download:not([data-download-primary])")
  .forEach((link) => {
    link.addEventListener("click", (event) => {
      if (link.getAttribute("href") === "#descargar") return;
      event.preventDefault();
      window.open(
        downloads[platform] || downloads.source,
        "_blank",
        "noopener,noreferrer",
      );
    });
  });

document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (!detail.open) return;
    document.querySelectorAll("details[open]").forEach((other) => {
      if (other !== detail) other.open = false;
    });
  });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach(
        (entry) =>
          entry.isIntersecting && entry.target.classList.add("is-visible"),
      ),
    { threshold: 0.12 },
  );
  document
    .querySelectorAll(".section, .feature-card")
    .forEach((node) => observer.observe(node));
}
