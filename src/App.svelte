<!-- App -->

<script>
  import Wrap from './components/utility/Wrap.svelte';
  import Loading from './components/utility/Loading.svelte';
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

  let page = getInitialPageId();
  let theme = localStorage.getItem('theme');
  let animation = 'fade';
  let loaded = true;
  let content = {};
  let quotes = [];
  let quote = '';

  const reqArgs = {
    url: proc?.env.RELAY_URL,
    resType: 'json'
  };

  const promise = sendXMLHttpRequest(reqArgs).then(res => {
    loaded = true;
    content = res.data;
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
    bind:animation={animation}
    quotes={quotes}
  />

  <div class='content-wrapper'>
    <div class='transition-grid'>
      {#await promise}
        <Loading loaded={loaded}/>
      {:then}
        {#if page === res}
          <Wrap animation={animation}>
            <Resume res={content.resume}/>
          </Wrap>
        {:else if page === writ}
          <Wrap animation={animation}>
            <Writing writing={content.writing}/>
          </Wrap>
        {:else if page === code}
          <Wrap animation={animation}>
            <Code code={content.code}/>
          </Wrap>
        {:else}
          <Wrap animation={animation}>
            <Bio
              bio={content.bio}
              theme={themeData(theme)}
            />
          </Wrap>
        {/if}
      {/await}
    </div>
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