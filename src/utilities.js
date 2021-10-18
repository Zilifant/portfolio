// Utilities

import { quotes } from './content/quotes';

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

  // when page loads, if a theme has been saved to local storage, check if it's dark; if so, change theme-switch and imgs to match
  if (currentTheme) {
    document.documentElement.setAttribute('current-theme', currentTheme);
    if (currentTheme === 'dark') {
      themeSwitch.checked = true;
      imgsToDarkMode();
    } else {
      imgsToLightMode();
    }
  } else {
    imgsToLightMode();
  };
};

export function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('current-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    imgsToDarkMode();
  } else {
    document.documentElement.setAttribute('current-theme', 'light');
    localStorage.setItem('theme', 'light');
    imgsToLightMode();
  }
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
  const pgNums = { bio: 1, resume: 2, writing: 3, code: 4 };
  return pgNums[fromPg] > pgNums[toPg] ? 'right' : 'left';
}