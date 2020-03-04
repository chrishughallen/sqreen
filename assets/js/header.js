$(document).ready(function(){
  if ($('header').offset().top >= (window.innerHeight/6)) {
    $('header').addClass('scrolled');
  }
  $(window).on('scroll', function() {
    var winHeight = window.innerHeight;
    var winScroll = $('header').offset().top;
    if (winScroll >= 20) {
      $('header').addClass('scrolled');
    }
    else {
      $('header').removeClass('scrolled');
    }
  });

  // Menu mobile
  $('.burger').on('click', function(){
    $('header').toggleClass('open');
  });

  // Add tracking data to dashboard links if available
  var attributions = location.search
    .slice(1)
    .split("&")
    .filter(function(s) {
      return s.startsWith("utm_");
    })
    .join("&");

  if (attributions.length > 0 || document.referrer.length > 0) {
    $('a[href="https://my.sqreen.com/signup"]').attr(
      "href",
      "https://my.sqreen.com/signup?" +
        attributions +
        "&referrer=" +
        btoa(document.referrer)
    );
    $('a[href="https://my.sqreen.com/login"]').attr(
      "href",
      "https://my.sqreen.com/login?" +
        attributions +
        "&referrer=" +
        btoa(document.referrer)
    );
  }
});
