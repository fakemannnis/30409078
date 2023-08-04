$(document).ready(function() {
  // Lightbox
  $('.gallery-item img').click(function() {
    var image = $(this).attr('src');
    $.colorbox({
      href: image,
      maxWidth: '80%',
      maxHeight: '80%'
    });
  });

  // Rollover
  $('.gallery-item img').hover(function() {
    $(this).animate({
      width: '+=50px',
      height: '+=50px'
    }, 100);
  }, function() {
    $(this).animate({
      width: '-=50px',
      height: '-=50px'
    }, 100);
  });

  // Slideshow
  var slideIndex = 0;
  showSlides();
  function showSlides() {
    var slides = $('#slideshow > div');
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = 'block';
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
});
