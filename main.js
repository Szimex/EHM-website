/* 
INTERSECTION OBSERVER
*/

const sectionHome = document.querySelector("#section-home");
const sectionAbout = document.querySelector("#section-about");
const sectionBlog = document.querySelector("#section-blog");
const sectionGal = document.querySelector("#section-gallery");
const sectionCont = document.querySelector("#section-contact");
const secions = document.querySelectorAll(".site-section");

const activeSection = {
  "section-home": ".nav-home",
  "section-blog": ".nav-blog",
  "section-about": ".nav-about",
  "section-gallery": ".nav-gallery",
  "section-contact": ".nav-contact"
};

const options = {
  root: null,
  threshold: 0.2,
  rootMargin: "-180px"
};

function toggleActive(entry, navId) {
  if (entry.isIntersecting) {
    document
      .querySelectorAll(navId)
      .forEach(navEl => navEl.classList.add("active"));
  } else {
    document
      .querySelectorAll(navId)
      .forEach(navEl => navEl.classList.remove("active"));
  }
}

const navbarToggle = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.target.id in activeSection) {
      toggleActive(entry, activeSection[entry.target.id]);
    }
  });
}, options);

navbarToggle.observe(sectionHome);
navbarToggle.observe(sectionBlog);
navbarToggle.observe(sectionAbout);
navbarToggle.observe(sectionGal);
navbarToggle.observe(sectionCont);

/* 
MENU BUTTON
*/

const menuButton = document.querySelector("#menu-button");
const mobMenu = document.querySelector(".mobile-menu");
const imgMenu = document.querySelector("#img-menu");
const imgCloseMenu = document.querySelector("#img-close-menu");

function dropDown() {
  menuButton.addEventListener("click", () =>
    mobMenu.style.display === "none"
      ? (mobMenu.style.display = "flex")
      : (mobMenu.style.display = "none")
  );
}
dropDown();
