const menuBtn = document.querySelector('#home>button');
const mobileMenu = document.querySelector('body>nav');
let isMenuOpen = false;

function undoTranslateX(undo) {
  undo
    ? (mobileMenu.style.transform = 'translateX(0)')
    : (mobileMenu.style.transform = '');
}

menuBtn.addEventListener('click', () => {
  if (isMenuOpen) {
    undoTranslateX(false);
    setTimeout(() => {
      mobileMenu.classList.add('visually-hidden');
    }, 550);
  } else {
    mobileMenu.classList.remove('visually-hidden');
    setTimeout(undoTranslateX, 5, true);
  }
  isMenuOpen = !isMenuOpen;
});
