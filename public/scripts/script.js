//-----------------------------
//Theme-Switcher-Slider--------
//-----------------------------

// connect js to theme-switch element
const themeSwitch = document.querySelector('.theme-switch-bg input[type="checkbox"]');
// console.log(document);
// themeSwitch.addEventListener('change', switchTheme, false);

function setThemeFromLocalStorage() {
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

setThemeFromLocalStorage();

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