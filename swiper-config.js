// const swiper = new Swiper('.swiper-container', {
//     slidesPerView: 3, // Number of visible logos at once
//     spaceBetween: 30, // Spacing between logos
//     loop: true, // Infinite loop
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     autoplay: {
//       delay: 3000, // Auto-slide every 3 seconds
//     },
//     breakpoints: {
//       640: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 2,
//         spaceBetween: 30,
//       },
//       1024: {
//         slidesPerView: 3,
//         spaceBetween: 30,
//       },
//     },
//   });

// const swiper = new Swiper('.swiper-container', {
//     slidesPerView: 3, // Number of visible logos at once
//     spaceBetween: 30, // Spacing between logos
//     loop: true, // Infinite loop
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     autoplay: {
//       delay: 3000, // Auto-slide every 3 seconds
//     },
//     breakpoints: {
//       640: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 2,
//         spaceBetween: 30,
//       },
//       1024: {
//         slidesPerView: 5,
//         spaceBetween: 30,
//       },
//     },
//   });

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3, // Number of visible logos at once
  spaceBetween: 30, // Spacing between logos
  loop: true, // Infinite loop
  speed: 3000, // Speed of transition for continuous scrolling
  autoplay: {
    delay: 0, // No delay between slides
    disableOnInteraction: false, // Continue autoplay even after user interactions
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

// Pause autoplay on hover
const swiperContainer = document.querySelector('.swiper-container');

swiperContainer.addEventListener('mouseenter', () => {
  swiper.autoplay.stop(); // Stop autoplay when hovered
});

swiperContainer.addEventListener('mouseleave', () => {
  swiper.autoplay.start(); // Resume autoplay when not hovered
});


