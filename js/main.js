"use strict";

function toggleMobileMenu() {
  let mobileMenu = document.querySelector(".sections-mobile");
  mobileMenu.classList.toggle("active-mobile-menu");
}

function hideMobileMenu() {
  let mobileMenu = document.querySelector(".sections-mobile");
  mobileMenu.classList.remove("active-mobile-menu");
}

function parallax() {
  const hero_area = document.querySelector("#hero-section");

  hero_area.addEventListener("mousemove", function parallax(e) {
    document.querySelectorAll(".parallax-object").forEach(function (parallax_object) {
      let moving_value = parallax_object.getAttribute("data-value");
      let x = (e.clientX * moving_value) / 250;
      let y = (e.clientY * moving_value) / 250;
      parallax_object.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  });
}

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY - 80,
  };
}

function dynamicTopNav() {
  let TopNavHome = document.querySelector("#top-nav .home");
  let TopNavAbout = document.querySelector("#top-nav .about");
  let TopNavProjects = document.querySelector("#top-nav .projects");
  let TopNavContact = document.querySelector("#top-nav .contact");
  let aboutSectionTopPosition = getOffset(document.querySelector("#about")).top;
  let projectsSectionTopPosition = getOffset(document.querySelector("#projects")).top;
  let contactSectionTopPosition = getOffset(document.querySelector("#contact")).top;
  let scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

  if (scrollTop < aboutSectionTopPosition) {
    TopNavHome.classList.add("active-section");
    TopNavAbout.classList.remove("active-section");
    TopNavProjects.classList.remove("active-section");
    TopNavContact.classList.remove("active-section");
  }

  if (scrollTop > aboutSectionTopPosition) {
    TopNavHome.classList.remove("active-section");
    TopNavAbout.classList.add("active-section");
    TopNavProjects.classList.remove("active-section");
    TopNavContact.classList.remove("active-section");
  }
  if (scrollTop > projectsSectionTopPosition) {
    TopNavHome.classList.remove("active-section");
    TopNavAbout.classList.remove("active-section");
    TopNavProjects.classList.add("active-section");
    TopNavContact.classList.remove("active-section");
  }

  if (scrollTop > contactSectionTopPosition) {
    TopNavHome.classList.remove("active-section");
    TopNavAbout.classList.remove("active-section");
    TopNavProjects.classList.remove("active-section");
    TopNavContact.classList.add("active-section");
  }

  window.onscroll = function () {
    scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    aboutSectionTopPosition = getOffset(document.querySelector("#about")).top;
    projectsSectionTopPosition = getOffset(document.querySelector("#projects")).top;
    contactSectionTopPosition = getOffset(document.querySelector("#contact")).top;

    if (scrollTop < aboutSectionTopPosition) {
      TopNavHome.classList.add("active-section");
      TopNavAbout.classList.remove("active-section");
      TopNavProjects.classList.remove("active-section");
      TopNavContact.classList.remove("active-section");
    }

    if (scrollTop > aboutSectionTopPosition) {
      TopNavHome.classList.remove("active-section");
      TopNavAbout.classList.add("active-section");
      TopNavProjects.classList.remove("active-section");
      TopNavContact.classList.remove("active-section");
    }
    if (scrollTop > projectsSectionTopPosition) {
      TopNavHome.classList.remove("active-section");
      TopNavAbout.classList.remove("active-section");
      TopNavProjects.classList.add("active-section");
      TopNavContact.classList.remove("active-section");
    }

    if (scrollTop > contactSectionTopPosition) {
      TopNavHome.classList.remove("active-section");
      TopNavAbout.classList.remove("active-section");
      TopNavProjects.classList.remove("active-section");
      TopNavContact.classList.add("active-section");
    }
  };
}

function sendEmail() {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#message").value;
  let message = document.querySelector("#email").value;
  Email.send({
    SecureToken: "dae752d2-d11a-4852-90f7-95b641ed9019",
    To: "badisabdelaziz4@gmail.com",
    From: "badisabdelaziz5@gmail.com",
    Subject: "New Contact Form Enuqiry",
    Body: `<b>name :</b> ${name} <br> <b>email :</b> ${email} <br> <b>message:</b> ${message}`,
  }).then((message) => alert(message));
}

AOS.init({
  once: true,
});
parallax();
dynamicTopNav();
