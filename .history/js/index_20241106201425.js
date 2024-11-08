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

})