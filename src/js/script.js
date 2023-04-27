//    !!!!!!!             Menu         !!!!!!!

const menuButton = $(".menu-button");
const darkOverlay = $(".dark-overlay");
const mobileMenu = $(".mobile-menu");

$(document).on("click", ".menu-button", handleMenu);
$(document).on("click", ".is-submenu", handleToggleMenu);

function handleMenu(e) {
  e.preventDefault();
  darkOverlay.toggleClass("visible");
  mobileMenu.toggleClass("visible");
}

function handleToggleMenu(e) {
  e.preventDefault();
  const $this = $(this);
  $this.parent(".has-submenu").toggleClass("opened");
  $this.next("ul").slideToggle(500, function () {
    $(this).find(".has-submenu").removeClass("opened").children("ul").hide();
  });

  $this
    .parent(".has-submenu")
    .toggleClass("opened")
    .siblings("li")
    .removeClass("opened")
    .find("ul")
    .hide();
}

// console.log("TEST");

function initMobile() {
  console.log("is-mobile");
}

function initTablet() {
  console.log("is-tablet");
}

function initDesktop() {
  console.log("is-desktop");
}

ssm.addStates([
  {
    id: "mobile",
    query: "(max-width: 640px)",
    onEnter: function () {
      initMobile();
    },
  },
  {
    id: "tablet",
    query: "(min-width: 641px) and (max-width: 992px)",
    onEnter: function () {
      initTablet();
    },
  },
  {
    id: "desktop",
    query: "(min-width: 993px)",
    onEnter: function () {
      initDesktop();
    },
  },
]);

//   !!!!!!!                                             Slick-Slider                                                                   !!!!!!!

$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseonFocus: true,
    pauseonHover: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

//  !!!!!!!!                                  Change background-image                                                                !!!!!!!

let images = [
  "i/middle_banner-01.jpg",
  "i/middle_banner-02.jpg",
  "i/middle_banner-03.jpg",
  "i/middle_banner-04.jpg",
  "i/middle_banner-05.jpg",
  "i/middle_banner-06.jpg",
  "i/middle_banner-07.jpg",
  "i/middle_banner-08.jpg",
  "i/middle_banner-09.jpg",
  "i/middle_banner-10.jpg",
];
let currentImageIndex = 1;

function changeBackground() {
  let body = document.querySelector("body");
  body.style.backgroundImage = "url('" + images[currentImageIndex] + "')";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundPosition = "center center";
  body.style.backgroundAttachment = "fixed";
  body.style.transition = "background-image 2s ease-in-out 0s";
  currentImageIndex = (currentImageIndex + 1) % images.length;
}
setInterval(changeBackground, 10000);

//  !!!!!!!                                          scroll to TOP                                                                  !!!!!!!!!!
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.addEventListener("click", () => {
  const scrollStep = -window.scrollY / (1000 / 15);

  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
});

//   !!!!                                               Submit form                                                              !!!!!!!

const form = document.getElementById("my-form");
const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  submitBtn.setAttribute("disabled", "");

  emailInput.value = "";

  setTimeout(function () {
    submitBtn.removeAttribute("disabled");
  }, 5000);
});

emailInput.addEventListener("input", function () {
  if (emailInput.checkValidity()) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", "");
  }
});
