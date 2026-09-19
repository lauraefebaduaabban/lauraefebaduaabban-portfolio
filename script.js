// Laura Efe Badua Abban — Portfolio site behaviour
// 1. Mobile navigation toggle
// 2. Close mobile menu when a link is clicked
// 3. Auto-update footer year

document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.getElementById("navToggle");
  var navMenu = document.getElementById("navMenu");
  var yearSpan = document.getElementById("year");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var isOpen = navMenu.classList.toggle("is-open");
      navToggle.classList.toggle("is-active", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the mobile menu after tapping a link
    var links = navMenu.querySelectorAll("a");
    links.forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("is-open");
        navToggle.classList.remove("is-active");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      revealObserver.unobserve(entry.target);
    }
  });
});

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

/// Opening preloader
const preloader = document.getElementById("preloader");
const preloadCount = document.getElementById("preloadCount");

let preloadPercentage = 0;

const preloadTimer = setInterval(() => {
  preloadPercentage += 1;
  preloadCount.textContent = preloadPercentage + "%";

  if (preloadPercentage >= 100) {
    clearInterval(preloadTimer);

    setTimeout(() => {
      preloader.classList.add("is-done");
    }, 600);
  }
}, 55);