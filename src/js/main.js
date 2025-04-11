/* TR-07 - HEADER SECTİON START */
const hamburger = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".navbar-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

const changeLinkVisual = () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const currentPath = window.location.pathname;

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
};

changeLinkVisual();

const loginBtn = document.querySelector(".login-btn");
const signupBtn = document.querySelector(".signup-btn");

loginBtn.addEventListener("click", () => {
  console.log("Login!");
});
signupBtn.addEventListener("click", () => {
  console.log("Sign Up!");
});
/* TR-07 - HEADER SECTİON END */

/* TR-15 - Numbers Section Start */
document.addEventListener("DOMContentLoaded", function(){
  const counters = document.querySelectorAll(".counter span");

  counters.forEach(counter => {
    counter.innerText = "0";
    
    const updateCounter = () => {
      const target = +counter.parentElement.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = target / 100;

      if(current < target ){
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCounter, 30);
      } else {
        counter.innerText = target.toLocaleString(); 
      }
    };
    updateCounter();
  });
});
/* TR-15 - Numbers Section End */
