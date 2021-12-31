// Utilities

import quotes from './content/quotes.json';
import { pgList } from './content/site-info';

//-------------------//
//Footer Random Quote//
//-------------------//

export const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

//--------------//
//Theme Switcher//
//--------------//

export function setThemeFromLocalStorage(page) {
  // Check if any theme has been saved to local storage; if so, assign to currentTheme.
  const currentTheme = localStorage.getItem('theme')
    ? localStorage.getItem('theme')
    : null;

  // When page loads, if a theme has been saved to local storage, check if it's
  // light; if so, change theme-switch and imgs to match
  if (currentTheme) {
    document.body.setAttribute('class', currentTheme);
    document.body.setAttribute('id', `${page}-${currentTheme}`);
    if (currentTheme === 'light') {
      document.querySelector('.theme-switch-checkbox').checked = true;
      swapImagesToTheme('light');
    } else {
      swapImagesToTheme('dark');
    };
  };
};

// FIXME: Tracking theme in both class and id is redundant.
export function switchTheme(e, page) {
  if (e.target.checked) {
    document.body.setAttribute('class', 'light');
    document.body.setAttribute('id', `${page}-light`);
    localStorage.setItem('theme', 'light');
    swapImagesToTheme('light');
  } else {
    document.body.setAttribute('class', 'dark');
    document.body.setAttribute('id', `${page}-dark`);
    localStorage.setItem('theme', 'dark');
    swapImagesToTheme('dark');
  };

  applySafariNavFix();
};

// TODO: Check if this is still needed with current version of Safari.
function applySafariNavFix() {
  const prevPage = document.getElementsByClassName('prev');
  if (prevPage[0]) prevPage[0].classList.replace('prev', 'not-prev');
};

// All img elements that change on theme (should):
//   1) have the `switchable-img` class
//   2) have an id matching their filename (+/- '-alt' for the theme-switched version)
function swapImagesToTheme(theme) {
  const imgList = document.getElementsByClassName('switchable-img');
  const suffix = (theme === 'dark') ? '-alt' : '';

  for (let i = 0; i < imgList.length; i++) {
    imgList[i].setAttribute('src', `../assets/images/${imgList[i].id}${suffix}.png`);
  };
};

//----------------------------//
//Fly Direction on Page Switch//
//----------------------------//

export function setFlyDirection(fromPg, toPg) {
  const pgNums = { bio: 1, resume: 2, code: 3, writing: 4 };
  return pgNums[fromPg] > pgNums[toPg] ? 'right' : 'left';
};

//---------------------//
//Identify Initial Page//
//---------------------//

export function initPage() {
  const targetPg = window.location.hash.substring(1);
  const isViablePg = pgList.includes(targetPg);
  if (isViablePg) return targetPg;
  return pgList[0].id;
};

//--------------------//
//Remove Preload Class//
//--------------------//

export function removePreloadClass({ firstLoad }) {
  // remove preload class after 1s (prevents animations on page load)
  function remove() {
    setTimeout(() => {
      let targetNodes = document.querySelectorAll('.preload');
      for (let i = 0; i < targetNodes.length; i++) {
        targetNodes[i].classList.remove('preload');
      };
    }, 1000);
  };

  firstLoad ? document.addEventListener("DOMContentLoaded", remove) : remove();
};