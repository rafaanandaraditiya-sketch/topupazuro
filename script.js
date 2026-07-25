// =========================
// LOADER
// =========================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.display = "none";

    }

});

// =========================
// HAMBURGER MENU
// =========================

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger) {
    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    const navLinks = navMenu.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
}

// =========================
// ACTIVE NAV LINK ON SCROLL
// =========================

window.addEventListener("scroll", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    
    navLinks.forEach(link => {
        link.classList.remove("active");
    });
    
    const sections = document.querySelectorAll("section");
    let current = "";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").slice(1) === current) {
            link.classList.add("active");
        }
    });
});

// =========================
// SLIDER NAVIGATION
// =========================

let slideIndex = 1;
let sliderInterval;

function changeSlide(n) {
    clearInterval(sliderInterval);
    showSlide(slideIndex += n);
    startSliderAutoPlay();
}

function currentSlide(n) {
    clearInterval(sliderInterval);
    showSlide(slideIndex = n);
    startSliderAutoPlay();
}

function showSlide(n) {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    slides.forEach(slide => {
        slide.classList.remove("active");
    });
    dots.forEach(dot => {
        dot.classList.remove("active");
    });
    
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].classList.add("active");
    }
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add("active");
    }
}

function startSliderAutoPlay() {
    sliderInterval = setInterval(function() {
        slideIndex++;
        showSlide(slideIndex);
    }, 4000);
}

showSlide(slideIndex);
startSliderAutoPlay();

// =========================
// SEARCH GAME
// =========================

function cariGame() {

    let input = document.getElementById("searchGame");

    if (!input) return;

    let filter = input.value.toLowerCase();

    let cards = document.querySelectorAll(".game-card");

    cards.forEach(card => {

        let game = card.dataset.game || "";

        if (game.toLowerCase().includes(filter)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}

// =========================
// FAQ
// =========================

const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(button => {

    button.addEventListener("click", function () {

        const answer = this.nextElementSibling;

        if (!answer) return;

        if (answer.style.display === "block") {

            answer.style.display = "none";

        } else {

            answer.style.display = "block";

        }

    });

});

// =========================
// DARK MODE
// =========================

const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {

    darkBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

    });

}

// =========================
// BACK TO TOP
// =========================

const topButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (!topButton) return;

    if (window.scrollY > 250) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}
// ===============================
// PILIH NOMINAL
// ===============================

const nominalCards = document.querySelectorAll(".nominal-card");

nominalCards.forEach(card => {

    card.addEventListener("click", function(){

        nominalCards.forEach(c => {

            c.classList.remove("active");

        });

        this.classList.add("active");

        document.getElementById("summaryNominal").innerText =
        this.dataset.name;

        document.getElementById("summaryPrice").innerText =
        this.dataset.price;

    });

});

// ===============================
// PAYMENT CARD SELECTION
// ===============================

const paymentCardsOnMain = document.querySelectorAll(".payment-section .payment-card");

paymentCardsOnMain.forEach(card => {
    card.addEventListener("click", function(){
        paymentCardsOnMain.forEach(c => {
            c.classList.remove("active");
        });
        this.classList.add("active");
    });
});

// ===============================
// PILIH PEMBAYARAN
// ===============================

const paymentCards = document.querySelectorAll(".topup-container .payment-card");

paymentCards.forEach(card => {

    card.addEventListener("click", function(){

        paymentCards.forEach(c => {

            c.classList.remove("active");

        });

        this.classList.add("active");

        document.getElementById("summaryPayment").innerText =
        this.dataset.payment;

    });

});

function checkout(){

    const inputs=document.querySelectorAll(".form-group input");

    const userId=inputs[0] ? inputs[0].value : "";

    const secondInput=inputs[1] || null;

    const secondValue=secondInput ? secondInput.value : null;

    const nominal=document.getElementById("summaryNominal").innerText;

    const payment=document.getElementById("summaryPayment").innerText;

    if(userId==""){

        alert("Masukkan User ID");

        return;

    }

    if(secondInput && secondValue==""){

        alert("Masukkan Zone ID");

        return;

    }

    if(nominal=="-"){

        alert("Pilih Nominal");

        return;

    }

    if(payment=="-"){

        alert("Pilih Pembayaran");

        return;

    }

    window.location.href="success.html";

}
// ===============================
// SCROLL REVEAL ANIMATIONS
// ===============================

function initScrollReveal() {
    const fadeElements = document.querySelectorAll(".fade-up");
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = "fadeUp 0.6s ease forwards";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(element => {
        element.style.opacity = "0";
        observer.observe(element);
    });
}

window.addEventListener("load", initScrollReveal);
window.addEventListener("DOMContentLoaded", initScrollReveal);