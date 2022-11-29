// For mobile nav menu
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

// For info containers of cards
const cards = document.querySelectorAll('div.card');
const infos = document.querySelectorAll('div.card>div');
let isInfoOpen = Array(infos.length).fill(false);

function undoTranslateY(undo, i) {
  undo
    ? (infos[i].style.transform = 'translateY(0)')
    : (infos[i].style.transform = '');
}

for (let i = 0; i < cards.length; i++) {
  infos[i].addEventListener('transitionend', (e) => {
    if (e.propertyName === 'transform' && !isInfoOpen[i]) {
      infos[i].classList.add('visually-hidden');
    }
  });

  cards[i].addEventListener('click', () => {
    if (isInfoOpen[i]) {
      undoTranslateY(false, i);
    } else {
      infos[i].classList.remove('visually-hidden');
      setTimeout(undoTranslateY, 3, true, i);
    }
    isInfoOpen[i] = !isInfoOpen[i];
  });
}
