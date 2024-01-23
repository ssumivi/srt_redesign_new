window.onload = function(){
  // Swiper
 var swiper = new Swiper(".noti_slide", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  speed: 8000,
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
});

//travel swiper
var swiper = new Swiper(".travel_imgslide", {
  slidesPerView: 3,
  // loop: true,
  // centeredSlides: true,
  spaceBetween: 20,
  grabCursor: false,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
 
});
}
// language toggle list
function toggleList() {
  var languageList = document.getElementById('languageList');
  languageList.classList.toggle('show');
  }
  



