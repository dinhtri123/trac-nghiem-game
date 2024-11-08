document.addEventListener("DOMContentLoaded", function()  {
    const btnMenu = document.querySelector(".header-icon-menu");
    const btnCloseMenu = document.querySelector('.header-btn-close')
    const headerMenu = document.querySelector(".header-menu-wrapper");

    btnMenu.addEventListener('click', () => {
        headerMenu.classList.add('active')
    })

    btnCloseMenu.addEventListener("click", () => {
      headerMenu.classList.remove("active");
    });


    // popup
    const popupRegister = document.querySelector('.popup-register');
    const popupLogin = document.querySelector('.popup-login');
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
    const navbarItem = Array.from(document.querySelectorAll(".navbar li"));
    const navbarItemActive = document.querySelector('.navbar li.active');
    console.log("🚀 ~ document.addEventListener ~ navbarItemActive:", navbarItemActive)
    const navbarItemActiveContent = document.querySelector(".navbar li.active > div");
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
        if(item.classList.contains('active')) {
          const itemContent = item.querySelector("div")
          console.log("🚀 ~ itemContent:", itemContent)
        }
      });
    });

})