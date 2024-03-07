$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
});


document.addEventListener('scroll', function() {
  const bannerHeight = document.querySelector('.banner').offsetHeight;
  const textElements = document.querySelectorAll('.font-amandine'); // Targeting your text elements

  // Check if the page has been scrolled past the height of the banner
  if (window.scrollY > 100) {
    textElements.forEach(function(el) {
      el.classList.add('text-after-scroll');
    });
  } else {
    textElements.forEach(function(el) {
      el.classList.remove('text-after-scroll');
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const carouselItems = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;

  function showCurrentItem() {
    carouselItems.forEach((item, index) => {
      item.style.display = index === currentIndex ? 'block' : 'none';
    });
  }

  function moveToNextItem() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showCurrentItem();
  }

  // Set the interval for automatic change
  setInterval(moveToNextItem, 3000);

  // Initial display
  showCurrentItem();
});