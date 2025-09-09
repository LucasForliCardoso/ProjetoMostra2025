const swiper = new Swiper('.slide-wrapper',{
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    spaceBetween: 40,
    autoHeight: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,  
  },

  navegation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
        slidesPerView: 1
    },
    620: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    },
  }


});