const sections = document.querySelectorAll(".section, .project-card, .timeline-item, .skill-box, .roadmap-step");

sections.forEach((section) => {
  section.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

sections.forEach((section) => observer.observe(section));

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});



// Cat Mode Easter Egg
const catModeButton = document.getElementById("catModeButton");

function showCatToast() {
  const existingToast = document.querySelector(".cat-toast");
  if (existingToast) existingToast.remove();

  const toast = document.createElement("div");
  toast.className = "cat-toast";
  toast.textContent = "Code joy mode activated 🐈‍⬛✨";
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3300);
}

function activateCatMode() {
  const catItems = ["🐈‍⬛", "🐾", "✨", "💻", "🛡️", "🐱"];
  const totalItems = 42;

  showCatToast();

  for (let i = 0; i < totalItems; i++) {
    const item = document.createElement("span");
    item.className = "cat-rain-item";
    item.textContent = catItems[Math.floor(Math.random() * catItems.length)];

    const left = Math.random() * 100;
    const size = 18 + Math.random() * 22;
    const duration = 3.2 + Math.random() * 3.2;
    const delay = Math.random() * 1.2;

    item.style.left = `${left}vw`;
    item.style.fontSize = `${size}px`;
    item.style.animationDuration = `${duration}s`;
    item.style.animationDelay = `${delay}s`;

    document.body.appendChild(item);

    setTimeout(() => {
      item.remove();
    }, (duration + delay) * 1000 + 500);
  }
}

if (catModeButton) {
  catModeButton.addEventListener("click", activateCatMode);
}
