$(document).ready(() => {
  $('nav').find('a.page-link').click(function (e) {
    e.preventDefault();
    const section = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(section).offset().top - $('header').outerHeight(),
    });
  });
});
