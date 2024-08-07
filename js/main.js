let burger = document.querySelector('#burger');
let menu = document.querySelector('#menu');

burger.addEventListener('click', func);

function func() {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
}

//----------------------------------------------

$(document).ready(function () {
   $('.slider-team').slick({
      infinite: false,
      slidesToShow: 4,
      responsive: [
         {
            breakpoint: 1025,
            settings: {
               slidesToShow: 3,
             
            }
         },
         {
            breakpoint: 769,
            settings: {
               slidesToShow: 2,
             
            }
         },
         {
            breakpoint: 481,
            settings: {
               slidesToShow: 1,
              
            }
         }
      ]
   })
   })

  $(document).ready(
      function () {
         $('.slick-prev').addClass('hidden');
      }
)
   

   
   $('.team__slider').on('afterChange', function (event, slick, currentSlide) {
   
   if (currentSlide === 0) {
      $('.slick-prev').addClass('hidden');
   } else {
      $('.slick-prev').removeClass('hidden');
      }  
     
  
      if (window.innerWidth > 1025) {
         if (currentSlide === 2) {
            $('.slick-next').addClass('hidden');
         } else {
            $('.slick-next').removeClass('hidden');
         }
      } else if (window.innerWidth < 1025 && window.innerWidth > 768) {
         if (currentSlide === 3) {
            $('.slick-next').addClass('hidden');
         } else {
            $('.slick-next').removeClass('hidden');
         }
      } else if (window.innerWidth < 769 && window.innerWidth > 480) {
         if (currentSlide === 4) {
            $('.slick-next').addClass('hidden');
         } else {
            $('.slick-next').removeClass('hidden');
         }
      } else {
         if (currentSlide === 5) {
            $('.slick-next').addClass('hidden');
         } else {
            $('.slick-next').removeClass('hidden');
         }
      }
   })

//-------------------------------------------------------------------
   
$(document).ready(function () {
   $('.slider-testimonials ').slick({
      infinite: false,
      slidesToShow: 3,
      responsive: [
         {
            breakpoint: 1025,
            settings: {
               slidesToShow: 2,
             
            }
         },
         {
            breakpoint: 769,
            settings: {
               slidesToShow: 1,
             
            }
         }         
      ]
   })
})
   

 $(document).ready(
      function () {
         $('.slick-prev').addClass('hidden');
      }
)

$('.slider-testimonials').on('afterChange', function (event, slick, currentSlide) {
   
   if (currentSlide === 0) {
      $('.slick-prev').addClass('hidden');
   } else {
      $('.slick-prev').removeClass('hidden');
      }  
     
  
      if (window.innerWidth > 1025) {
         if (currentSlide === 3) {
            $('.slick-next').addClass('hidden');
         } else {
            $('.slick-next').removeClass('hidden');
         }
      } else if (window.innerWidth < 1025 && window.innerWidth > 768) {
         if (currentSlide === 4) {
            $('.slick-next').addClass('hidden');
         } else {
            $('.slick-next').removeClass('hidden');
         }
      } else if (window.innerWidth < 769) {
         if (currentSlide === 5) {
            $('.slick-next').addClass('hidden');
         } else {
            $('.slick-next').removeClass('hidden');
         }
      } 
   })