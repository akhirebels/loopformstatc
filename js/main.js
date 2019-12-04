
// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

// init scroll spy
$('body').scrollspy({ target: '#main-nav' });

// add smooth scrolling
$('#main-nav a').on('click', function (e) {
  // check for a hash value
  if (this.hash !== '') {
    // prevent the default behaviour
    e.preventDefault();
    // store hash
    const hash = this.hash;
    // animate smooth scrolling
    $('html , body').animate(
      {
        scrollTop: $(hash).offset().top
      }, 2000, function () {
        // add hash to url after scroll
        window.location.hash = hash;
      })
  }
});