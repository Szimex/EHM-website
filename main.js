/* 

INTERSECTION OBSERVER

*/

const sectionHome = document.querySelector("#section-home");
const sectionAbout = document.querySelector("#section-about");
const sectionBlog = document.querySelector("#section-blog");
const sectionGal = document.querySelector("#section-gallery");
const sectionCont = document.querySelector("#section-contact");

const secions = document.querySelectorAll(".site-section");
const sectionQuote = document.querySelector("#section-quote");

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
  rootMargin: "-100px"
};

function toggleActive(entry, navId) {
  if (entry.isIntersecting) {
    for (let navId in activeSection) {
      document.querySelector(activeSection[navId]).classList.remove("active");
    }
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
    if (entry.target.id == sectionHome.id) {
      document
        .querySelector(".sticky-mobile-menu")
        .classList.add("sticky-mobile-menu-hide");
    }
    // else if (entry.target.id == sectionQuote.id) {
    //   document
    //     .querySelector(".sticky-mobile-menu")
    //     .classLis.remove("sticky-mobile-menu-hide");
    // }
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

const openMenuButton = document.querySelector("#menu-button");
const openMenuButtonSticky = document.querySelector("#sticky-mobile-button");
const closeMenuButton = document.querySelector("#menu-close-button");
const mobMenu = document.querySelector(".slide-menu");
const body = document.querySelector("body");
const overlay = document.querySelector("#overlay");

function openMenu() {
  openMenuButton.addEventListener("click", () => {
    mobMenu.classList.add("show-mobile-menu");
    body.classList.add("site-static");
    overlay.style.display = "block";
  });
  openMenuButtonSticky.addEventListener("click", () => {
    mobMenu.classList.add("show-mobile-menu");
    body.classList.add("site-static");
    overlay.style.display = "block";
  });
}

function closeMenu() {
  closeMenuButton.addEventListener("click", () => {
    mobMenu.classList.remove("show-mobile-menu");
    body.classList.remove("site-static");
    overlay.style.display = "none";
  });
  overlay.addEventListener("click", () => {
    mobMenu.classList.remove("show-mobile-menu");
    body.classList.remove("site-static");
    overlay.style.display = "none";
  });
}

openMenu();
closeMenu();
