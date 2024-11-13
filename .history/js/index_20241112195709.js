document.addEventListener("DOMContentLoaded", function () {
  const homePage = document.querySelectorAll(".homepage");
  
}
const btnMenu = document.querySelector(".header-icon-menu");
const btnCloseMenu = document.querySelector(".header-btn-close");
const headerMenu = document.querySelector(".header-menu-wrapper");

btnMenu.addEventListener("click", () => {
  headerMenu.classList.add("active");
});

btnCloseMenu.addEventListener("click", () => {
  headerMenu.classList.remove("active");
});

// popup
const popupRegister = document.querySelector(".popup-register");
const popupLogin = document.querySelector(".popup-login");
const btnCloseRegister = popupRegister.querySelector(".popup-btn-close");
const btnCloseLogin = popupLogin.querySelector(".popup-btn-close");
const btnRegister = document.querySelector(".btn-register");
const btnLogin = document.querySelector(".btn-login");
btnRegister.addEventListener("click", function () {
  popupRegister.classList.add("active");
});
btnCloseRegister.addEventListener("click", function () {
  popupRegister.classList.remove("active");
});
btnLogin.addEventListener("click", function () {
  popupLogin.classList.add("active");
});
btnCloseLogin.addEventListener("click", function () {
  popupLogin.classList.remove("active");
});

// profile
const media = window.matchMedia("(min-width: 769px)");
const profile = document.querySelector("#profile");
if (profile) {
  const navbarItem = Array.from(document.querySelectorAll(".navbar li"));
  const navbarItemActive = document.querySelector(".navbar li.active");
  if (media.matches) {
    const navbarItemActiveContent = document
      .querySelector(".navbar li.active > div")
      .cloneNode(true);
    const navbarContent = document.querySelector(".profile-content");
    if (navbarItemActive) {
      navbarContent.appendChild(navbarItemActiveContent);
    }
    navbarItem.map((item, i, arr) => {
      item.addEventListener("click", function () {
        arr.forEach((itemChild) => {
          itemChild.classList.remove("active");
        });
        item.classList.add("active");
        if (item.classList.contains("active")) {
          navbarContent.innerHTML = "";
          const itemContent = item.querySelector("div").cloneNode(true);
          navbarContent.appendChild(itemContent);
        }
      });
    });
  } else {
    navbarItem.map((item,i,arr) => {
      item.addEventListener('click', function() {
        arr.forEach(itemChild => {
          itemChild.classList.remove("active");
        })
        item.classList.add('active')
      })
    })
  }
}
  if(homePage) {

  // careers
  const careers = document.querySelector('.careers');
  if(careers) {
    const percent = document.querySelector(".excercise-progress .percent");
    const progressBg = document.querySelector(".excercise-progress .progress-bg");
    const percentvalue = percent.textContent;
    progressBg.style.width = `${percentvalue}`;
  }
});
