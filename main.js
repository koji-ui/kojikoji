'use strict';

{
  $(function () {
    $('.burger').on('click', function () {
      $('.burger').toggleClass('is-active');
      $('.menu').toggleClass('is-active');
    });

    $('.nav__close, .nav__item a').on('click', function () {
      $('.menu').removeClass('is-active');
      $('.burger').removeClass('is-active'); // ここ重要
    });
  });

  const items = document.querySelectorAll(".accordion button");

  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (let i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }

  items.forEach(item => item.addEventListener('click', toggleAccordion));
}
