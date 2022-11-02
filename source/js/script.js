const navMain = document.querySelector('.main-nav');
const logoHeaderMain = document.querySelector('.main-header__logo-wrap');
const navToggle = document.querySelector('.main-nav__toggle');
const fat = document.querySelector('.slider__container--fat')
const control = document.querySelector('.slider__control')

navMain.classList.remove('main-nav--nojs');
logoHeaderMain.classList.remove('main-header__logo-wrap--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

if (control) {
  document.querySelector('.slider__control').addEventListener('click', function(){
    if (!fat.classList.contains('slider__container--after') && !fat.classList.contains('slider__container--before')){
      fat.classList.add('slider__container--after')
      control.classList.add('slider__control--after')
    } else {
      fat.classList.toggle('slider__container--after')
      fat.classList.toggle('slider__container--before')
      control.classList.toggle('slider__control--after')
      control.classList.toggle('slider__control--before')
    }

  })
}
