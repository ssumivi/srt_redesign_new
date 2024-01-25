// language toggle list
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".btn-select");
  const list = document.querySelector(".list-member");

  btn.addEventListener("click", () => {
    btn.classList.toggle("on");
    list.classList.toggle("open");
  });

  list.addEventListener("click", (event) => {
    if (event.target.nodeName === "BUTTON") {
      btn.innerText = event.target.innerText;
      btn.classList.remove("on");
      list.classList.remove("open");
    }
  });
  //from to underline
  var linings = document.querySelectorAll(".underLine");

  linings.forEach(function(lining) {
    lining.addEventListener("click", function() {
      // 모든 요소에 있는 active 클래스를 일단 제거
      linings.forEach(function(item) {
        item.classList.remove('active');
      });
  
      // 클릭한 요소에만 active 클래스를 추가
      this.classList.add('active');
    });
  });
  //현재 날짜
  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
  
    // 월이나 일이 한 자릿수인 경우 앞에 0을 붙임
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
  
    return `${year}-${month}-${day}`;
  }
  
  // 페이지 로드 시 현재 날짜를 input에 설정
  document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('currentDate').value = getCurrentDate();
  });
  
  // 페이지 로드 시 현재 날짜를 input에 설정
  document.getElementById('currentDate').value = getCurrentDate();
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
    breakpoints: {
      1440: {
        slidesPerView: 3,
      },
      1110: {
        slidesPerView: 3,
      },
      360: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }
  });
});
