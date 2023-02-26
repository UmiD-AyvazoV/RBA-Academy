const scrollHeader = () => {
  const header = document.querySelector("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  loopAdditionalSlides: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".card-slider", {
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  loopAdditionalSlides: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30,
});

var swiper = new Swiper(".slider", {
  spaceBetween: 30,
  centeredSlides: true,
  roundLengths: true,
  autoplay: {
    delay: 2000,
  },
  loop: true,
  loopAdditionalSlides: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1350: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    1920: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".books", {
  spaceBetween: 30,
  slidesPerView: 2,
  centeredSlides: true,
  roundLengths: true,
  autoplay: {
    delay: 2000,
  },
  loop: true,
  loopAdditionalSlides: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".kurs", {
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  spaceBetween: 30,
  loop: true,
})

var swiper = new Swiper(".yenilik", {
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1350: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  spaceBetween: 30,
  loop: true,
})

var swiper = new Swiper(".mezun", {
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1350: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  spaceBetween: 30,
  loop: true,
})

var swiper = new Swiper(".rey", {
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1350: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  spaceBetween: 30,
  loop: true,
})

const signUp = document.querySelector('.signUp');
const signIn = document.querySelector('.signIn');
const signInOff = document.querySelector('.signInOff');
const signUpOff = document.querySelector('.signUpOff');

document.querySelector('.register').addEventListener('click', () => {
  signIn.style.display = 'none';
  signUp.style.display = 'none';
  signUpOff.style.display = 'block';
  signInOff.style.display = 'block';
});

document.querySelector('#login').addEventListener('click', () => {
  signIn.style.display = 'block';
  signUp.style.display = 'block';
  signUpOff.style.display = 'none';
  signInOff.style.display = 'none';
});

