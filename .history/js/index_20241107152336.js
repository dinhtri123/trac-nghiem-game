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
    popupBtnClose.addEventListener('click', function() {
      popupRegister.classList.remove("active");
    })
})