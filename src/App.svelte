<!-- App -->

<script>
  import Bio from './pages/Bio.svelte';
  import Resume from './pages/Resume.svelte';
  import Writing from './pages/Writing.svelte';
  import Code from './pages/Code.svelte';
  import Footer from './Footer.svelte';

  import { randomQuote } from './utilities';

  const bio  = 'bio';
  const res  = 'resume';
  const writ = 'writing';
  const code = 'code';

  let page = bio;

  let quote = randomQuote();

  $: isCurrent = (pg) => pg === page ? 'preload this-page' : 'other-page';

  function switchPage(pg) {
    page = pg;
    document.documentElement.id = 'page-' + pg;
    quote = randomQuote();
    setTimeout(function() {
      let targetNodes = document.querySelectorAll('.preload');
      for (let i = 0; i < targetNodes.length; i++) {
        targetNodes[i].classList.remove('preload');
      }
    }, 1000);
  };

  function isDarkMode() {
    return document.documentElement.getAttribute('current-theme') === 'dark';
  };
</script>

<main class='wrapper'>

  <header class='main-head'>
    <div class='main-head-bg'></div>
    <h4 class='main-head-item main-head-item-title'>Scott Silsbe</h4>
    <div class='main-head-item theme-switch-text light-hidden'>Go Light</div>
    <div class='main-head-item theme-switch-text dark-hidden'>Go Dark</div>
    <label class='main-head-item theme-switch-bg'>
      <input type='checkbox'>
      <span class='theme-switch-slider preload'></span>
    </label>
  </header>

  <nav class='main-nav'>
    <a
      class={`main-nav-item main-nav-item-home ${isCurrent(bio)}-main`}
      href='/' on:click|preventDefault={() => switchPage(bio)}
    >{bio}</a>
    <a
      class={`main-nav-item main-nav-item-resume ${isCurrent(res)}-main`}
      href='/' on:click|preventDefault={() => switchPage(res)}
    >{res}</a>
    <a
      class={`main-nav-item main-nav-item-writing ${isCurrent(writ)}-main`}
      href='/' on:click|preventDefault={() => switchPage(writ)}
    >{writ}</a>
    <a
      class={`main-nav-item main-nav-item-contact ${isCurrent(code)}-main`}
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
          class={`drop-nav-item drop-nav-item-home ${isCurrent(bio)}-drop`}
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
          class={`drop-nav-item drop-nav-item-contact ${isCurrent(code)}-drop`}
          href='/' on:click|preventDefault={() => switchPage(code)}
        ><div>{code}</div></a>
      </div>
    </div>
  </nav>

  <div class='content-wrapper'>
    {#if page === bio}
      <Bio
        isDarkMode={isDarkMode()}
      />
    {:else if page === res}
      <Resume/>
    {:else if page === writ}
      <Writing
        isDarkMode={isDarkMode()}
      />
    {:else if page === code}
      <Code/>
    {:else}
      <h1>Page Not Found</h1>
    {/if}
  </div>

  <div class="main-head-left"></div>
  <div class="main-head-right"></div>
  <div class="side-right"></div>
  <div class="side-left"></div>
  <div class="foot-left"></div>
  <div class="foot-right"></div>

  <Footer quote={quote}/>

</main>

<!-- <style lang='scss' global>
  // @import './styles/global.scss';
</style> -->

<!-- <style global>

</style> -->