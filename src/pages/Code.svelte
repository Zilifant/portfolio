<!-- Code -->

<script>

  export let isCurrent;
  $: current = isCurrent ? 'current' : '';

</script>

<div class={`page-wrapper code ${current}`}>
  <a
    class='mhk-url'
    href='https://mhk-front.herokuapp.com/'
    target="_blank" rel="noopener noreferrer"
  >
    MHK
  </a>
  <section class='content'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></section>
</div>

<style lang="scss">

.mhk-url {
  font-size: 50px;
  font-weight: bold;
  color: var(--fuch4);
  text-decoration: none;
}

.mhk-url:hover {
  color: var(--fuch3);
}

</style>