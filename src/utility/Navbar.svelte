<!-- Navbar -->

<script>

  import { pages } from '../constants';
  import {
    setFlyDirection, getRandomQuote, removePreloadClass
  } from '../utilities';

  export let page, quote, flyTo;

  let prevPage;
  let dropNavState = 'hidden';

  $: isCurrentPage = (pg) => (pg === page) ? 'current' : '';
  $: isPrevPage = (pg) => (pg === prevPage) ? 'prev' : 'not-prev';

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