// Utilities

import quotes from './content/quotes.json';
import { pgList } from './content/site-info';

//-------------------//
//Footer Random Quote//
//-------------------//

export const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

//---------------//
//Theme Switchers//
//---------------//

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

export function switchTheme(e, page) {
  const newTheme = e.target.checked ? 'light' : 'dark';

  // FIXME: Tracking theme in both class and id is redundant.
  document.body.setAttribute('class', newTheme);
  document.body.setAttribute('id', `${page}-${newTheme}`);

  localStorage.setItem('theme', newTheme);
  swapImagesToTheme(newTheme);

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
  // Create reference object from array of page ids.
  const pageOrderRef = pgList.reduce((obj, val, idx) => {
    obj[val] = idx;
    return obj;
  }, {});

  // Use reference object to compare relative 'position' of pages to determine fly direction.
  return pageOrderRef[fromPg] > pageOrderRef[toPg] ? 'right' : 'left';
};

//---------------------//
//Identify Initial Page//
//---------------------//

// Check if URL includes a hash associated with a specific page. If so, return that page id,
// otherwise, return the first page in `pageIds` array (the default/landing page).
export function getInitialPageId() {
  const targetPg = window.location.hash.substring(1);
  const isViablePg = pgList.includes(targetPg);
  if (isViablePg) return targetPg;
  return pgList[0];
};

//--------------------//
//Remove Preload Class//
//--------------------//

// Remove `preload` CSS class from all elements after 1 second.
// The `preload` class disables animations.
export function removePreloadClass({ firstLoad }) {
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