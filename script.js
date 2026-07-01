const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const moreProjectsBtn = document.getElementById("moreProjectsBtn");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    const link = button.dataset.link;

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

    moreProjectsBtn.href = link;

    if (filter === "todos") {
      moreProjectsBtn.textContent = "Ver más proyectos";
    } else if (filter === "comercial") {
      moreProjectsBtn.textContent = "Ver más proyectos comerciales";
    } else if (filter === "residencial") {
      moreProjectsBtn.textContent = "Ver más proyectos residenciales";
    } else if (filter === "industrial") {
      moreProjectsBtn.textContent = "Ver más proyectos industriales";
    }
  });
});

// LIGHTBOX
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".project-image img").forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = "none";
  }
});
