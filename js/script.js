// =======================menu bar fixed 
const navbar = document.querySelector('#Navbar-bg');
window.addEventListener('scroll' , () =>{
  let scrolling = this.scrollY;
  if(scrolling > 100){
    navbar.classList.add('navbar-fixed');
  }else{
    navbar.classList.remove('navbar-fixed');
  }
})





$('.counter').counterUp({
    delay: 10,
    time: 2000,
  });

  $('.client-row').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:'<i class="fa-solid fa-arrow-up prevArrow"></i>',
    nextArrow:'<i class="fa-solid fa-arrow-down nextArrow"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });