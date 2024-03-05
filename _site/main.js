$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
});


document.addEventListener('scroll', function() {
  const bannerHeight = document.querySelector('.banner').offsetHeight;
  const textElements = document.querySelectorAll('.font-amandine'); // Targeting your text elements

  // Check if the page has been scrolled past the height of the banner
  if (window.scrollY > bannerHeight) {
    textElements.forEach(function(el) {
      el.classList.add('text-after-scroll');
    });
  } else {
    textElements.forEach(function(el) {
      el.classList.remove('text-after-scroll');
    });
  }
});