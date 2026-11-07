document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

const header = document.querySelector(".topbar");
const toggle = document.querySelector(".menu-toggle");
if (header && toggle) {
  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  header.querySelectorAll(".nav a").forEach((link) =>
    link.addEventListener("click", () => {
      header.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

// Service galleries: clicking a thumbnail swaps the main image
document.querySelectorAll(".service-media").forEach((media) => {
  const main = media.querySelector(".gallery-main img");
  const buttons = media.querySelectorAll(".thumbs button");
  buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      const img = btn.querySelector("img");
      main.src = img.src;
      main.alt = img.alt;
      buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    })
  );
});

// Contact form opens the visitor's email app with the details pre-filled
const form = document.querySelector("#inquiry");
if (form) {
  const params = new URLSearchParams(location.search);
  const preselect = params.get("service");
  if (preselect) {
    const box = form.querySelector(`input[name="services"][value="${CSS.escape(preselect)}"]`);
    if (box) box.checked = true;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const services = data.getAll("services");
    const lines = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Event type: ${data.get("eventType")}`,
      `Event date: ${data.get("date") || "TBD"}`,
      `City (Texas): ${data.get("city")}`,
      `Approx. guests: ${data.get("guests") || "TBD"}`,
      `Interested in: ${services.length ? services.join(", ") : "Not sure yet"}`,
      "",
      `${data.get("message") || ""}`,
    ];
    const subject = `BoogieBots booking inquiry - ${data.get("eventType")}`;
    location.href =
      "mailto:admin@patternstech.com?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(lines.join("\n"));
  });
}
