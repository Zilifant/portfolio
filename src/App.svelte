<!-- App -->

<script>
  import Wrap from './components/utility/Wrap.svelte';
  import Header from './components/utility/Header.svelte';
  import Navbar from './components/utility/Navbar.svelte';
  import Footer from './components/utility/Footer.svelte';
  import Bio from './components/pages/Bio.svelte';
  import Resume from './components/pages/Resume.svelte';
  import Writing from './components/pages/Writing.svelte';
  import Code from './components/pages/Code.svelte';
  import { version, bio, res, code, writ, dark, } from './constants';
  import { randFrom, getInitialPageId, removePreloadClass, } from './utilities';
  import { sendXMLHttpRequest } from './sendXMLHttpRequest';

  removePreloadClass({ firstLoad: true });

  $: pageData = (page) => (!!page) ? page : bio;
  $: themeData = (theme) => (!!theme) ? theme : dark;

  let flyTo = 'left';
  let page = getInitialPageId();
  let theme = localStorage.getItem('theme');
  let quotes = [];
  let quote = '';

  const fromBin = (binId) => {
    return {
      url: `https://api.jsonbin.io/v3/b/${binId}/latest`,
      headers: [
        { name: 'X-Master-Key', value: proc?.env.MASTER_KEY }
      ],
      resType: 'json'
    };
  };

  sendXMLHttpRequest(fromBin(proc?.env.QUOTE_BIN_ID)).then(resData => {
    quotes = resData.record;
    quote = randFrom(quotes);
  });

</script>

<main
  class='main-wrapper'
  data-page={pageData(page)}
  data-theme={themeData(theme)}
>

  <Header bind:theme={theme} />

  <Navbar
    bind:page={page}
    bind:quote={quote}
    bind:flyTo={flyTo}
    quotes={quotes}
  />

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
  @import './style/global.scss';
</style>