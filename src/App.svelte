<!-- App -->

<script>
  import { onMount } from 'svelte';
  import Wrap from './utility/Wrap.svelte';
  import Bio from './pages/Bio.svelte';
  import Resume from './pages/Resume.svelte';
  import Writing from './pages/Writing.svelte';
  import Code from './pages/Code.svelte';
  import Footer from './Footer.svelte';
  import {
    randomQuote,
    removePreload,
    setThemeFromLocalStorage,
    switchTheme,
    flyDirection
  } from './utilities';

  const version = '0.5';

  onMount(() => {
    const toggle = document.querySelector('.theme-switch-bg input[type="checkbox"]');
    setThemeFromLocalStorage(toggle);
  });

  removePreload({ firstLoad: true });

  const bio  = 'bio';
  const res  = 'resume';
  const writ = 'writing';
  const code = 'code';

  let prevPg, flyTo;
  let page = bio;
  let quote = randomQuote();

  $: isCurrent = (pg) => (pg === page) ? 'current' : '';
  $: isPrev = (pg) => (pg === prevPg) ? 'prev' : 'not-prev';
  $: getTheme = () => document.body.getAttribute('class');

  function switchPage(pg) {
    if (pg === page) return;
    prevPg = page;
    page = pg;
    document.body.setAttribute('id', `${page}-${getTheme()}`);
    flyTo = flyDirection(prevPg, page);
    quote = randomQuote();
    removePreload({ firstLoad: false });
  };

</script>

<main class='wrapper'>

  <header class='main-head'>
    <div class='main-head-bg'></div>
    <div class='main-head-grid'>
      <h4 class='main-head-item main-head-item-title'>Scott Silsbe</h4>
      <label class='main-head-item theme-switch-bg'>
        <input
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
    <a
      class={`main-nav-item mni mni-bio ${isPrev(bio)} ${isCurrent(bio)}`}
      href='/' on:click|preventDefault={() => switchPage(bio)}
    >{bio}</a>
    <a
      class={`main-nav-item mni mni-resume ${isPrev(res)} ${isCurrent(res)}`}
      href='/' on:click|preventDefault={() => switchPage(res)}
    >{res}</a>
    <a
      class={`main-nav-item mni mni-writing ${isPrev(writ)} ${isCurrent(writ)}`}
      href='/' on:click|preventDefault={() => switchPage(writ)}
    >{writ}</a>
    <a
      class={`main-nav-item mni mni-code ${isPrev(code)} ${isCurrent(code)}`}
      href='/' on:click|preventDefault={() => switchPage(code)}
    >{code}</a>
    <div class='drop-nav'>
      <button class='drop-nav-btn'>
        <div class='drop-nav-btn-icon'>
          <div class='drop-nav-btn-icon-bar'></div>
          <div class='drop-nav-btn-icon-bar'></div>
          <div class='drop-nav-btn-icon-bar'></div>
        </div>
        <div>Scott Silsbe</div>
      </button>
      <div class='drop-nav-items'>
        <a
          class={`drop-nav-item drop-nav-item-bio ${isCurrent(bio)}-drop`}
          href='/' on:click|preventDefault={() => switchPage(bio)}
        ><div>{bio}</div></a>
        <a
          class={`drop-nav-item drop-nav-item-resume ${isCurrent(res)}-drop`}
          href='/' on:click|preventDefault={() => switchPage(res)}
        ><div>{res}</div></a>
        <a
          class={`drop-nav-item drop-nav-item-writing ${isCurrent(writ)}-drop`}
          href='/' on:click|preventDefault={() => switchPage(writ)}
        ><div>{writ}</div></a>
        <a
          class={`drop-nav-item drop-nav-item-code ${isCurrent(code)}-drop`}
          href='/' on:click|preventDefault={() => switchPage(code)}
        ><div>{code}</div></a>
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

<!-- <style lang='scss' global>
  // @import './styles/global.scss';
</style> -->

<!-- <style>

</style> -->