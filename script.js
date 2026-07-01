const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

const categoryLinks = {
  todos: "proyectos.html",
  comercial: "proyectos-comerciales.html",
  residencial: "proyectos-residenciales.html",
  industrial: "proyectos-industriales.html"
};

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const moreProjectsBtn = document.getElementById("moreProjectsBtn");

filterButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (!button.dataset.filter) return;

    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const category = card.dataset.category;

      if (filter === "todos" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    if (moreProjectsBtn) {
      moreProjectsBtn.href = categoryLinks[filter];

      if (filter === "todos") {
        moreProjectsBtn.textContent = "Ver todos los proyectos";
      } else if (filter === "comercial") {
        moreProjectsBtn.textContent = "Ver más proyectos comerciales";
      } else if (filter === "residencial") {
        moreProjectsBtn.textContent = "Ver más proyectos residenciales";
      } else if (filter === "industrial") {
        moreProjectsBtn.textContent = "Ver más proyectos industriales";
      }
    }
  });
});

// LIGHTBOX
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

if (lightbox && lightboxImg) {
  document.querySelectorAll(".project-image img").forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });
}

if (closeBtn && lightbox) {
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}

if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox) {
    lightbox.style.display = "none";
  }
});
