 
  let index = 0;
  const totalWorkItems = $(".work-item").length; 

   $(window).on("load",function(){
      $(".preloader").addClass("loaded");
   })

  $(document).ready(function () {

    // nav toggle
    $(".nav-toggle").click(function(){
      $(".header .nav").slideToggle();
    })
    $(".header .nav a").click(function(){
      if($(window).width() < 768){
         $(".header .nav").slideToggle();
      }
    })

    // fixed header 
    $(window).scroll(function(){
      if($(this).scrollTop() > 100){
        $(".header").addClass("fixed");
      }
      else{
        $(".header").removeClass("fixed");
      }
    })

    // more button clicked
    $('#btn-more').click(function(){
    $('#more-info').fadeToggle(2000)
    $('#more-info').slideToggle(3000)
    })

    // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body, works, contact').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})