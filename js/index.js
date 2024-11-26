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
    btnGame.map(item => {
      item.addEventListener('click', function() {
        btnPopupGame.href = item.href
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
      const gif = document.querySelector(".gif-list-bg");
      btnSpin.addEventListener("click", function () {
        gif.classList.add("active");
        setTimeout(() => {
          popupSuc.classList.add('active')
        }, 4000)
      })
      let dataGif = "but-ong";
      switch (dataGif) {
        case "gau":
          return gif.classList.add('gau');
          break;
        case "bam-xanh":
          return gif.classList.add("bam-xanh");
          break;
        case "sach":
          return gif.classList.add('sach');
          break;
        case "bam-hong":
          return gif.classList.add('bam-hong');
          break;
        case "tui":
          return gif.classList.add('tui');
          break;
        case "but-ong":
          return gif.classList.add('but-ong');
          break;
        case "quat":
          return gif.classList.add('quat');
          break;
        case "du":
          return gif.classList.add('du');
          break;
        case "but-bi":
          return gif.classList.add('but-bi');
          break;
        case "chuc-may-man":
          return gif.classList.add("chuc-may-man");
          break;
        default:
          return gif.classList.add("");
      }
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
