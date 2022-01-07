<!-- App -->

<script>
  import Wrap from './utility/Wrap.svelte';
  import Header from './utility/Header.svelte';
  import Footer from './utility/Footer.svelte';
  import Bio from './pages/Bio.svelte';
  import Resume from './pages/Resume.svelte';
  import Writing from './pages/Writing.svelte';
  import Code from './pages/Code.svelte';
  import { version, pages, bio, res, code, writ, dark,
  } from './content/site-info';
  import {
    getRandomQuote,
    setFlyDirection,
    getInitialPageId,
    removePreloadClass,
  } from './utilities';

  removePreloadClass({ firstLoad: true });

  $: isCurrentPage = (pg) => (pg === page) ? 'current' : '';
  $: isPrevPage = (pg) => (pg === prevPage) ? 'prev' : 'not-prev';
  $: pageData = (page) => (!!page) ? page : bio;
  $: themeData = (theme) => (!!theme) ? theme : dark;

  let prevPage, flyTo;
  let dropNavState = 'hidden';
  let page = getInitialPageId();
  let theme = localStorage.getItem('theme');
  let quote = getRandomQuote();

  function switchPage(newPage) {
    // If link to current page triggered, do nothing.
    if (newPage === page) return;

    // Update state.
    prevPage = page;
    page = newPage;
    flyTo = setFlyDirection(prevPage, page);
    quote = getRandomQuote();

    removePreloadClass({ firstLoad: false });

    // If viewing dropNav, minimize it.
    if (document.documentElement.clientWidth <= 600) toggleDropNav();
  };

  function toggleDropNav() {
    if (dropNavState === 'hidden') return dropNavState = 'visible';
    dropNavState = 'hidden';
  };
</script>

<main
  class='main-wrapper'
  data-page={pageData(page)}
  data-theme={themeData(theme)}
>

  <Header bind:theme={theme} />

  <nav class='main-nav'>
    {#each pages as { id }}
      <a
        class={`main-nav-item mni-${id} ${isPrevPage(id)} ${isCurrentPage(id)}`}
        href={`#${id}`}
        on:click={() => switchPage(id)}
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
            class={`drop-nav-item ${isPrevPage(id)} ${isCurrentPage(id)}`}
            href={`#${id}`}
            on:click={() => switchPage(id)}
          ><div>{id}</div></a>
        {/each}
      </div>
    </div>
  </nav>

  <div class='content-wrapper'>
    <div class='transition-grid'>
      {#if page === res}
        <Wrap flyDirection={flyTo}>
          <Resume/>
        </Wrap>
      {:else if page === writ}
        <Wrap flyDirection={flyTo}>
          <Writing/>
        </Wrap>
      {:else if page === code}
        <Wrap flyDirection={flyTo}>
          <Code/>
        </Wrap>
      {:else}
        <Wrap flyDirection={flyTo}>
          <Bio theme={themeData(theme)} />
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