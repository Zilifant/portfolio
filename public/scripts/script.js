//-----------------------------
//General----------------------
//-----------------------------

// remove preload class after 1s (prevents animations on page load)
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    let targetNodes = document.querySelectorAll('.preload');
    for (let i = 0; i < targetNodes.length; i++) {
      targetNodes[i].classList.remove('preload');
    }
  }, 1000)
})

//-----------------------------
//Theme-Switcher-Slider--------
//-----------------------------

// connect js to theme-switch element
const themeSwitch = document.querySelector('.theme-switch-bg input[type="checkbox"]');
themeSwitch.addEventListener('change', switchTheme, false);

// check if any theme has been saved to local storage; assign to currentTheme if so
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

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
  imgsToLightMode()
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

function switchTheme(e) {
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

//-------------------
//Footer Random Quote
//-------------------

// (function newQuote() { // IIFE
//   let quotes = [
//     '<a href="https://en.wikipedia.org/wiki/Francis_Bacon">Nature to be commanded must be obeyed.</a>',
//     '<a href="https://en.wikipedia.org/wiki/Augustine_of_Hippo">Love, and do what you will.</a>',
//     '<a href="https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow">Nothing in life is as important as you think it is, while you are thinking about it.</a>',
//     '<a href="https://en.wikiquote.org/wiki/Bruce_Lee">Freedom discovers man the moment he loses concern over what impression he is making or about to make.</a>',
//   ];
//   let randomQuote = Math.floor(Math.random() * quotes.length);
//   document.getElementById("foot-quote-display").innerHTML = quotes[randomQuote];
// })();