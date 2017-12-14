$(document).ready(() => {
  const nav = $('nav');

  nav.find('li.page-link').click(function (e) {
    e.preventDefault();
    const section = $(this).find('a').attr('href');
    $('html, body').animate({
      scrollTop: $(section).offset().top - $('header').outerHeight(),
    });
  });

  $('.toggle-nav').click(function (e) {
    e.preventDefault();
    if (!nav.hasClass('active')) {
      nav.toggleClass('active');
    } else {
      nav.addClass('revert');
    }
    $('main').toggleClass('active');
  });

  nav.on('animationend', function () {
    if ($(this).hasClass('revert')) {
      $('nav').toggleClass('revert active');
    }
  });
});
