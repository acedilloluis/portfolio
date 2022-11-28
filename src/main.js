const menuBtn = document.querySelector('#home>button');
const mobileMenu = document.querySelector('body>nav');
const homeLink = document.querySelector('body>nav a');
let isMenuOpen = false;

function undoTranslateX(undo) {
  undo
    ? (mobileMenu.style.transform = 'translateX(0)')
    : (mobileMenu.style.transform = '');
}

mobileMenu.addEventListener('transitionend', (e) => {
  // Wait to hide mobile nav until transform ends when user closes mobile nav
  if (e.propertyName === 'transform' && !isMenuOpen) {
    mobileMenu.classList.add('visually-hidden');
  }
  if (e.propertyName === 'transform' && isMenuOpen) {
    homeLink.focus({ preventScroll: true, focusVisible: true });
  }
});

menuBtn.addEventListener('click', () => {
  if (isMenuOpen) {
    undoTranslateX(false);
  } else {
    mobileMenu.classList.remove('visually-hidden');
    setTimeout(undoTranslateX, 3, true);
  }
  isMenuOpen = !isMenuOpen;
});
