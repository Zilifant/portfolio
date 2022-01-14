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
  let content;
  let quotes = [];
  let quote = '';

  const reqArgs = {
    url: `https://api.jsonbin.io/v3/b/${proc?.env.CONTENT_BIN_ID}/latest`,
    headers: [
      { name: 'X-Master-Key', value: proc?.env.MASTER_KEY }
    ],
    resType: 'json'
  };

  const promise = sendXMLHttpRequest(reqArgs).then(resData => {
    content = resData.record;
    quotes = content.quotes.quotes;
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
    {#await promise}
      <div>Loading...</div>
    {:then}
      <div class='transition-grid'>
        {#if page === res}
          <Wrap flyDirection={flyTo}>
            <Resume res={content.resume}/>
          </Wrap>
        {:else if page === writ}
          <Wrap flyDirection={flyTo}>
            <Writing writing={content.writing}/>
          </Wrap>
        {:else if page === code}
          <Wrap flyDirection={flyTo}>
            <Code code={content.code}/>
          </Wrap>
        {:else}
          <Wrap flyDirection={flyTo}>
            <Bio
              bio={content.bio}
              theme={themeData(theme)}
            />
          </Wrap>
        {/if}
      </div>
    {/await}
  </div>

  <Footer
    page={page}
    quote={quote}
    version={version}
    socials={content?.socials}
  />

</main>

<style lang='scss' global>
  @import './style/variables.scss';
  @import './style/mixins.scss';
  @import './style/global.scss';
</style>