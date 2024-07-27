let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('open-menu');
    menu.classList.toggle('move');
};
window.onscroll = () =>{
    navbar.classList.remove('open-menu');
    menu.classList.remove('move');
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    autoplay:{
        delay:4000,
        disableOnInteraction:false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        500:{
            slidesPerView:2,
        },
        800:{
            slidesPerView:3,
        },
        1000:{
            slidesPerView:3,
        },
       },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });