'use strict';



/**
 * add event listener on multiple elements
*/

const addEventOnElements = function(elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}


/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");
const circle = document.querySelector("[data-circle]");

window.addEventListener("DOMContentLoaded", function() {
    preloader.classList.add("loaded")
    document.body.classList.add("loaded");

    setTimeout(() => {
        circle.classList.add("loaded")
    }, 2000);
});


/**
 * NAVBAR
 * navbar toggle for mobile
 */

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navToglleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function() {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    navToglleBtn.classList.toggle("active");
}

addEventOnElements(navTogglers, 'click', toggleNavbar);

/**
 * HEADER
 * header active when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {
    if (this.scrollY >= 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});