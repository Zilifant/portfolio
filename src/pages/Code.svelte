<!-- Code -->

<script>
  export let isCurrent;
  $: current = isCurrent ? 'current' : '';

</script>

<div class={`page-wrapper code ${current}`}>
  <section class='grd'>
    <div class='project-title mhk'>
      <h1>MHK</h1>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
    <a
      class='url-pseudo-btn app-url mhk'
      href='https://mhk.vercel.app/'
      target="_blank" rel="noopener noreferrer"
    >
      MHK Live
    </a>
    <a
    class='url-pseudo-btn github-url mhk'
    href='https://mhk.vercel.app/'
    target="_blank" rel="noopener noreferrer"
    >
      MHK Github
    </a>
  </section>
</div>

<style lang="scss">

</style>