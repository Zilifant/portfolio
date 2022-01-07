<!-- Header -->

<script>

  import { light, dark } from '../constants';
  import { applySafariNavFix } from '../utilities';

  export let theme;

  function switchTheme(e) {
    theme = e.target.checked ? light : dark;
    localStorage.setItem('theme', theme);
    applySafariNavFix();
  };

</script>

<header class='main-head'>
  <div class='main-head-grid'>
    <h4 class='main-head-item main-head-item-title'>Scott Silsbe</h4>
    <label class='main-head-item theme-switch-bg'>
      <input
        class='theme-switch-checkbox'
        type='checkbox'
        checked={theme === light}
        on:change={(e) => switchTheme(e)}
      >
      <div class='th-switch-slider preload'>
        <div class='eclipse-animation moon preload'></div>
        <div class='eclipse-animation earth preload'></div>
      </div>
    </label>
  </div>
</header>