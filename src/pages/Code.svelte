<!-- Code -->

<script>

  export let isCurrent;
  $: current = isCurrent ? 'current' : '';

</script>

<div class={`page-wrapper code ${current}`}>
  <a
    class='mhk-url'
    href='https://mhk.vercel.app/'
    target="_blank" rel="noopener noreferrer"
  >
    MHK
  </a>
  <section class='content'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></section>
</div>

<style lang="scss">

</style>