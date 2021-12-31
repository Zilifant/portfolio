<!-- App -->

<script>
  import { onMount } from 'svelte';
  import Wrap from './utility/Wrap.svelte';
  import Footer from './utility/Footer.svelte';
  import Bio from './pages/Bio.svelte';
  import Resume from './pages/Resume.svelte';
  import Writing from './pages/Writing.svelte';
  import Code from './pages/Code.svelte';
  import { version, pages, bio, res, code, writ, pgList, } from './content/site-info';
  import {
    randomQuote,
    setThemeFromLocalStorage,
    switchTheme,
    flyDirection,
    initPage,
    removePreload,
  } from './utilities';

  onMount(() => {
    setThemeFromLocalStorage();
    const theme = document.body.getAttribute('class');
    const page = initPage(pgList);
    document.body.setAttribute('id', `${page}-${theme}`);
  });

  removePreload({ firstLoad: true });

  $: isCurrent = (pg) => (pg === page) ? 'current' : '';
  $: isPrev = (pg) => (pg === prevPg) ? 'prev' : 'not-prev';
  $: getTheme = () => document.body.getAttribute('class');

  let prevPg, flyTo;
  let dropNavState = 'hidden';
  let page = initPage(pgList);
  let quote = randomQuote();

  function switchPage(newPg) {
    if (newPg === page) return;
    prevPg = page;
    page = newPg;
    document.body.setAttribute('id', `${page}-${getTheme()}`);
    flyTo = flyDirection(prevPg, page);
    quote = randomQuote();
    removePreload({ firstLoad: false });
    toggleDropNav();
  };

  function toggleDropNav() {
    if (document.documentElement.clientWidth > 600) return;
    if (dropNavState === 'hidden') return dropNavState = 'visible';
    dropNavState = 'hidden';
  };

</script>

<main class='wrapper'>

  <header class='main-head'>
    <div class='main-head-grid'>
      <h4 class='main-head-item main-head-item-title'>Scott Silsbe</h4>
      <label class='main-head-item theme-switch-bg'>
        <input
          class='theme-switch-checkbox'
          type='checkbox'
          on:change={(e) => switchTheme(e, page)}
        >
        <div class='th-switch-slider preload'>
          <div class='eclipse-animation moon preload'></div>
          <div class='eclipse-animation earth preload'></div>
        </div>
      </label>
    </div>
  </header>

  <nav class='main-nav'>
    {#each pages as { id }}
      <a
        class={`main-nav-item mni mni-${id} ${isPrev(id)} ${isCurrent(id)}`}
        href={`#${id}`} on:click={() => switchPage(id)}
      >{id}</a>
    {/each}
    <div class='drop-nav'>
      <button
        class='drop-nav-btn'
        on:click|preventDefault={toggleDropNav}
      >
        <div class='drop-nav-btn-icon'>
          <div class='drop-nav-btn-icon-bar'></div>
          <div class='drop-nav-btn-icon-bar'></div>
          <div class='drop-nav-btn-icon-bar'></div>
        </div>
        <div class='drop-nav-title'>Scott Silsbe</div>
      </button>
      <div class={`drop-nav-items ${dropNavState}`}>
        {#each pages as { id }}
          <a
            class={`drop-nav-item ${isPrev(id)} ${isCurrent(id)}`}
            href={`#${id}`} on:click={() => switchPage(id)}
          ><div>{id}</div></a>
        {/each}
      </div>
    </div>
  </nav>

  <div class='content-wrapper'>
    <div class='transition-grid'>
      {#if page === bio}
        <Wrap flyDirection={flyTo}>
          <Bio
            isCurrent={page === bio}
            isDarkMode={getTheme() === 'dark'}
          />
        </Wrap>
      {:else if page === res}
        <Wrap flyDirection={flyTo}>
          <Resume
            isCurrent={page === res}
          />
        </Wrap>
      {:else if page === writ}
        <Wrap flyDirection={flyTo}>
          <Writing
            isCurrent={page === writ}
          />
        </Wrap>
      {:else if page === code}
        <Wrap flyDirection={flyTo}>
          <Code
            isCurrent={page === code}
          />
        </Wrap>
      {:else}
        <Wrap flyDirection={flyTo}>
          <Bio
            isCurrent={page === bio}
            isDarkMode={getTheme() === 'dark'}
          />
        </Wrap>
      {/if}
    </div>
  </div>

  <Footer
    page={page}
    quote={quote}
    version={version}
  />

</main>

<style lang='scss' global>
  @import './style/variables.scss';
  @import './style/mixins.scss';
</style>