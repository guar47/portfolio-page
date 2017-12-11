$(document).ready(() => {
  $('nav').find('li.page-link').click(function (e) {
    e.preventDefault();
    const section = $(this).find('a').attr('href');
    $('html, body').animate({
      scrollTop: $(section).offset().top - $('header').outerHeight(),
    });
  });
});
