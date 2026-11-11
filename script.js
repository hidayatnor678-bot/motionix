// Ganti nomor ini dengan nomor WhatsApp kamu. Gunakan format 62, tanpa tanda + atau spasi.
const WHATSAPP_NUMBER = "6280000000000";

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-pill a");
window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 180) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".work-card").forEach(card => {
      card.style.display = filter === "all" || card.dataset.category === filter ? "" : "none";
    });
  });
});

function openWhatsApp(message) {
  if (WHATSAPP_NUMBER === "6280000000000") {
    alert("Silakan ganti nomor WhatsApp contoh di file script.js dengan nomor kamu terlebih dahulu.");
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
}

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();
  openWhatsApp(`Halo MOTIONIX! Saya ${name}. Saya tertarik dengan layanan ${service}.\\n\\nDetail proyek: ${message}`);
});

document.getElementById("waLink").addEventListener("click", event => {
  event.preventDefault();
  openWhatsApp("Halo MOTIONIX! Saya ingin konsultasi tentang jasa editing video.");
});

document.getElementById("soundToggle").addEventListener("click", () => {
  alert("Efek suara belum diaktifkan pada versi ini.");
});


// Shooting stars: create a few lightweight, staggered meteor trails.
(() => {
  const layer = document.querySelector(".shooting-stars");
  if (!layer || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const count = 5;
  for (let i = 0; i < count; i++) {
    const star = document.createElement("span");
    star.className = "shooting-star";
    const top = 4 + Math.random() * 55;
    const left = -18 + Math.random() * 72;
    const duration = 3.2 + Math.random() * 2.4;
    const delay = Math.random() * 9;
    const tail = 100 + Math.random() * 100;
    star.style.top = `${top}vh`;
    star.style.left = `${left}vw`;
    star.style.setProperty("--duration", `${duration}s`);
    star.style.setProperty("--delay", `${delay}s`);
    star.style.setProperty("--tail", `${tail}px`);
    star.style.setProperty("--travel-x", `${420 + Math.random() * 360}px`);
    star.style.setProperty("--travel-y", `${250 + Math.random() * 280}px`);
    layer.appendChild(star);
  }
})();
