document.addEventListener("DOMContentLoaded", function () {
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
  const btnClose = Array.from(
    document.querySelectorAll(".popup-btn-close")
  );
  const btnRegister = Array.from(document.querySelectorAll(".btn-register"));
  const btnLogin = Array.from(document.querySelectorAll(".btn-login"));
  btnClose.map(item => {
    const parentPopup = item.parentNode.parentNode;
    item.addEventListener('click', function() {
      parentPopup.classList.remove('active')
    })
  })
  btnRegister.map((item) => {
    item.addEventListener("click", function () {
      popupRegister.classList.add("active");
      popupLogin.classList.remove("active");
    });
  });
  btnLogin.map((item) => {
    item.addEventListener("click", function () {
      popupLogin.classList.add("active");
      popupRegister.classList.remove("active");
    });
  });
  const homePage = document.querySelector(".homepage");
  if (homePage) {
    // get link game
    const btnGame = Array.from(document.querySelectorAll(".game-item a"));
    const btnPopupGame = document.querySelector(".popup-btn-game");
     const popupGame = document.querySelector(".popup-game");
    btnGame.map(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        btnPopupGame.href = item.href;
        popupGame.classList.add('active')
      })
    })
    // check login
    const headerBtn = document.querySelector(".header-btn");
    const notLogged = Array.from(document.querySelectorAll(".not-logged"));
    notLogged.map((item) => {
      item.addEventListener("click", function (e) {
        if (headerBtn.classList.contains("header-btn-action")) {
          e.preventDefault();
          popupLogin.classList.add("active");
        }
      });
    });

    // vongquay
    const lucky = document.querySelector("#lucky");
    const popupSuc = document.querySelector(".popup-successfully");
    if (lucky) {
      const btnSpin = document.querySelector(".gif-list-btn");
      const gif = document.querySelector(".gif-list-bg img");


      function fetchGif() {
        return new Promise((resolve) => {
          setTimeout(() => {
            const data = "chuc-may-man"
            resolve(data);
          }, 1000);
        });
      }
      const dataGif = {
        "gau": 360,
        "bam-xanh": 685,
        "sach": 650,
        "bam-hong": 610,
        "tui" : 575,
        "but-ong": 540,
        "quat": 465,
        "du": 430,
        "but-bi": 395,
        "chuc-may-man": 500,
      };

      btnSpin.addEventListener("click", async () => {
        const resultFetchGif = await fetchGif();
        const result = dataGif[resultFetchGif];

        const rotate = 360 * 1 + result;

        gif.style.transition = "transform 4s cubic-bezier(0.25, 1, 0.5, 1)";
        gif.style.transform = `rotate(${rotate}deg)`;

        setTimeout(() => {
          popupSuc.classList.add("active");
        }, 4000);
      });

    }
    

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
        // reset password
        const showPass = Array.from(document.querySelectorAll(".showpass"));
        showPass.map(item => {
          item.addEventListener("click", function() {
            const input = item.parentNode.querySelector("input")
            if(item.classList.contains('active')) {
              item.classList.remove('active')
              item.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
              input.type = "password";
            }else {
              item.innerHTML = '<i class="fa-regular fa-eye"></i>';
              item.classList.add('active');
              input.type = "text"
            }
          })
        })
      } else {
        navbarItem.map((item, i, arr) => {
          item.addEventListener("click", function () {
            arr.forEach((itemChild) => {
              itemChild.classList.remove("active");
            });
            item.classList.add("active");
          });
        });
      }
    }
  }

  // careers
  const careers = document.querySelector(".careers");
  if (careers) {
    const btnMore = Array.from(document.querySelectorAll(".btn-more button"));
    btnMore.map((item) => {
      item.addEventListener("click", function () {
        const exploreItemContent = item.parentNode.parentNode;
        if (item.textContent == "Thu gọn") {
          item.textContent = "Xem thêm";
          exploreItemContent.classList.remove("active");
        } else {
          item.textContent = "Thu gọn";
          exploreItemContent.classList.add("active");
        }
      });
    });
  }

  // brochure
  const brochure = document.querySelector(".brochure");
  if (brochure) {
    const brochureItem = document.querySelector(".brochure-item");
    const brochureListItem = Array.from(
      document.querySelectorAll(".brochure-item-list li a")
    );
    const file = document.querySelector(".brochure .file");
    brochureListItem.map((item) => {
      item.addEventListener("click", function () {
        brochureItem.classList.add("hidden");
        file.classList.remove("hidden");
      });
    });
    file.addEventListener("click", handleClick);
    function handleClick() {
      file.classList.add("active");
      file.removeEventListener("click", handleClick);
    }
  }

  // excercise
  const excercise = document.querySelector("#excercise");
  if (excercise) {
    const percent = document.querySelector(".excercise-progress .percent");
    const progressBg = document.querySelector(
      ".excercise-progress .progress-bg"
    );
    const radio = Array.from(
      document.querySelectorAll(
        ".excercise-item-option label input[type='radio']"
      )
    );

    radio.forEach((item) => {
      item.addEventListener("change", updateProgress);
    });
    const totalItems = radio.length;
    function updateProgress() {
      let selectedCount = new Set(
        radio.filter((radio) => radio.checked).map((radio) => radio.name)
      ).size;

      let percentage = Math.round((selectedCount / totalItems) * 100);

      percent.textContent = `${percentage * 2}%`;
      progressBg.style.width = `${percentage * 2}%`;
    }
  }

});
