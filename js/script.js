(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);

$(document).ready(function () {
  $("#myForm").submit(function (event) {
      event.preventDefault();

      let valid = true;

      if ($("#first-name").val() === "") {
          valid = false;
          alert("First Name is required");
      }

      if ($("#last-name").val() === "") {
          valid = false;
          alert("Last Name is required");
      }

      if ($("#nrp").val() === "" || isNaN($("#nrp").val())) {
          valid = false;
          alert("NRP is required and must be a number");
      }

      if ($("#phone").val() === "" || isNaN($("#phone").val())) {
          valid = false;
          alert("Phone Number is required and must be a number");
      }

      if (valid) {
          $("#myForm")[0].submit();
      }
  });
});