$(document).ready(() => {
  const nav = $('nav');

  function scrollAnimate(e) {
    e.preventDefault();
    const section = $(this).find('a').attr('href');
    $('html, body').animate({
      scrollTop: $(section).offset().top - $('header').outerHeight(),
    });
  }

  function toggleNav() {
    if ($(this).hasClass('revert')) {
      $('nav').toggleClass('revert active');
    }
  }

  $('.toggle-nav').click((e) => {
    e.preventDefault();
    if (!nav.hasClass('active')) {
      nav.toggleClass('active');
    } else {
      nav.addClass('revert');
    }
    $('main').toggleClass('active');
  });

  nav.find('li.page-link').click(scrollAnimate);
  nav.on('animationend', toggleNav);
});
