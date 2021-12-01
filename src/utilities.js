// Utilities

import quotes from './content/quotes.json';

//-------------------//
//Footer Random Quote//
//-------------------//

export const randomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

//--------------//
//Theme Switcher//
//--------------//

export function setThemeFromLocalStorage(themeSwitch) {
  // check if any theme has been saved to local storage; assign to currentTheme if so
  const currentTheme = localStorage.getItem('theme')
    ? localStorage.getItem('theme')
    : null;

  // when page loads, if a theme has been saved to local storage, check if it's light; if so, change theme-switch and imgs to match
  if (currentTheme) {
    document.body.setAttribute('class', currentTheme);
    document.body.setAttribute('id', `bio-${currentTheme}`);
    if (currentTheme === 'light') {
      themeSwitch.checked = true;
      imgsToLightMode();
    } else {
      imgsToDarkMode();
    }
  } else {
    imgsToDarkMode();
  };
};

export function switchTheme(e, page) {
  if (e.target.checked) {
    document.body.setAttribute('class', 'light');
    document.body.setAttribute('id', `${page}-light`);
    localStorage.setItem('theme', 'light');
    imgsToLightMode();
  } else {
    document.body.setAttribute('class', 'dark');
    document.body.setAttribute('id', `${page}-dark`);
    localStorage.setItem('theme', 'dark');
    imgsToDarkMode();
  }
  safariNavFix();
}

function safariNavFix() {
  const prevPage = document.getElementsByClassName('prev');
  if (prevPage[0]) prevPage[0].classList.replace('prev', 'not-prev');
}

function imgsToDarkMode() {
  let imglist = document.getElementsByClassName("switchable-img");
  for (let i = 0; i < imglist.length; i++) {
    imglist[i].setAttribute('src', `../assets/images/${imglist[i].id}-alt.png`);
  }
}

function imgsToLightMode() {
  let imglist = document.getElementsByClassName("switchable-img");
  for (let i = 0; i < imglist.length; i++) {
    imglist[i].setAttribute('src', `../assets/images/${imglist[i].id}.png`);
  }
}

//--------------------//
//Remove Preload Class//
//--------------------//

export function removePreload({ firstLoad }) {
  // remove preload class after 1s (prevents animations on page load)
  function remove() {
    setTimeout(() => {
      let targetNodes = document.querySelectorAll('.preload');
      for (let i = 0; i < targetNodes.length; i++) {
        targetNodes[i].classList.remove('preload');
      }
    }, 1000)
  };

  firstLoad ? document.addEventListener("DOMContentLoaded", remove) : remove();
}

//----------------------------//
//Fly Direction on Page Switch//
//----------------------------//

export function flyDirection(fromPg, toPg) {
  const pgNums = { bio: 1, resume: 2, code: 3, writing: 4 };
  return pgNums[fromPg] > pgNums[toPg] ? 'right' : 'left';
}